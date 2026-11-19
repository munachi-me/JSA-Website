import fs from 'fs';
import path from 'path';

function readFirst(paths) {
  for (const p of paths) {
    try {
      return fs.readFileSync(path.join(process.cwd(), p), 'utf8');
    } catch {}
  }
  return null;
}

function wantsMarkdown(acceptHeader) {
  const accept = acceptHeader || '';
  return accept
    .split(',')
    .map((part) => part.trim().split(';')[0].trim())
    .some((type) => type === 'text/markdown' || type.startsWith('text/markdown+'));
}

export default function handler(req, res) {
  if (wantsMarkdown(req.headers.accept)) {
    const md = readFirst(['public/index.md', '../public/index.md', 'index.md']);
    if (md == null) {
      res.status(500).send('index.md not found');
      return;
    }
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    res.setHeader('Vary', 'Accept');
    res.status(200).send(md);
  } else {
    const html = readFirst(['dist/home.html', '../dist/home.html', 'home.html']);
    if (html == null) {
      res.status(500).send('home.html not found');
      return;
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  }
}
