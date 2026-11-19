import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import fs from 'node:fs';

const vite = await createServer({
  root: process.cwd(),
  logLevel: 'error',
  server: { middlewareMode: true },
  appType: 'custom',
  ssr: { noExternal: ['lucide-react'] },
});

try {
  const { default: Home } = await vite.ssrLoadModule('/src/pages/Home.jsx');
  const html = renderToString(
    React.createElement(
      MemoryRouter,
      { initialEntries: ['/'] },
      React.createElement(Home)
    )
  );
  const dist = 'dist/index.html';
  let out = fs.readFileSync(dist, 'utf8');
  const marker = '<div id="root"></div>';
  if (!out.includes(marker)) {
    throw new Error('root div marker not found in dist/index.html');
  }
  out = out.replace(marker, `<div id="root">${html}</div>`);
  fs.writeFileSync(dist, out);
  // Rename so "/" is NOT in the static filesystem — this lets the vercel.json
  // rewrite "/" -> /api/home take over and do Accept-header negotiation
  // (Vercel checks the filesystem before rewrites, so "/index.html" would
  // otherwise always win and markdown-for-agents could never trigger).
  fs.renameSync('dist/index.html', 'dist/home.html');
  const words = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  console.log(`Prerendered homepage: ${html.length} chars, ~${words} visible words`);
} finally {
  await vite.close();
}
