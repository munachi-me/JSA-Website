import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
export default function CodeBlock({ children, language = 'text', title }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => { try { await navigator.clipboard.writeText(children); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { setCopied(false); } };
  return <div className="code-block"><div className="code-top"><div className="code-dots"><i/><i/><i/></div><span>{title || language}</span><button onClick={copy} className="copy-button" aria-label="Copy code">{copied ? <Check size={14}/> : <Copy size={14}/>} {copied ? 'Copied' : 'Copy'}</button></div><pre><code>{children}</code></pre></div>;
}
