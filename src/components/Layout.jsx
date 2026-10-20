import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Command, Github, Menu, X } from 'lucide-react';
import { APP_URL, REPO_URL } from '../data/content.js';

const navItems = [
  { label: 'Features', to: '/features' },
  { label: 'Documentation', to: '/docs/introduction' },
  { label: 'Examples', to: '/examples' },
  { label: 'Releases', to: '/releases' },
  { label: 'Roadmap', to: '/roadmap' },
];

export function Logo({ compact = false }) {
  return <Link to="/" className={`brand ${compact ? 'brand-compact' : ''}`} aria-label="JSA home">
    <span className="brand-mark"><Command size={22} strokeWidth={2.1} aria-hidden="true" /></span>
    {!compact && <span className="brand-copy"><strong>JSA</strong><small>JAVASCRIPT ANALYTICS</small></span>}
  </Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  React.useEffect(() => setOpen(false), [location.pathname]);
  return <header className="site-header"><div className="container header-inner">
    <Logo />
    <button className="mobile-menu icon-button" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X size={21}/> : <Menu size={21}/>}</button>
    <nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
      {navItems.map(item => <NavLink key={item.to} to={item.to} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>{item.label}</NavLink>)}
      <div className="nav-mobile-actions"><a className="button button-secondary" href={REPO_URL} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={14}/></a><a className="button button-primary" href={APP_URL} target="_blank" rel="noreferrer">Open JSA <ArrowUpRight size={15}/></a></div>
    </nav>
    <div className="header-actions"><a className="github-link" href={REPO_URL} target="_blank" rel="noreferrer" aria-label="JSA GitHub repository"><Github size={18}/></a><a className="button button-primary button-small" href={APP_URL} target="_blank" rel="noreferrer">Open JSA <ArrowUpRight size={15}/></a></div>
  </div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-top">
    <div className="footer-brand"><Logo/><p>Explore your data.<br/>Understand what matters.</p></div>
    <div className="footer-col"><h4>Explore</h4><Link to="/features">Features</Link><Link to="/examples">Examples</Link><Link to="/releases">Releases</Link><Link to="/roadmap">Roadmap</Link></div>
    <div className="footer-col"><h4>Learn</h4><Link to="/docs/introduction">Documentation</Link><Link to="/docs/quick-start">Quick start</Link><Link to="/docs/troubleshooting">Troubleshooting</Link><Link to="/docs/contributing">Contributing</Link></div>
    <div className="footer-col"><h4>Project</h4><a href={REPO_URL} target="_blank" rel="noreferrer">GitHub repository <ArrowUpRight size={13}/></a><a href={APP_URL} target="_blank" rel="noreferrer">Launch JSA <ArrowUpRight size={13}/></a><Link to="/about">About JSA</Link></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} JSA · JavaScript Analytics</span><span>Built to make data work feel clearer.</span></div></footer>;
}

export function PageShell({ children, className = '' }) {
  return <><Header/><main className={className}>{children}</main><Footer/></>;
}

export function Eyebrow({ children, dot = true }) { return <div className="eyebrow">{dot && <span className="eyebrow-dot"/>}{children}</div>; }
export function SectionHeading({ eyebrow, title, children, align = 'left' }) { return <div className={`section-heading align-${align}`}>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2>{children && <p>{children}</p>}</div>; }
export function CTASection({ title = 'Your next insight starts with a dataset.', description = 'Open JSA and turn your next question into a clearer view of the data.' }) { return <section className="cta-wrap"><div className="container"><div className="cta-panel"><div className="cta-orb orb-one"/><div className="cta-orb orb-two"/><div className="cta-content"><Eyebrow>MAKE YOUR DATA USEFUL</Eyebrow><h2>{title}</h2><p>{description}</p><div className="button-row"><a className="button button-primary" href={APP_URL} target="_blank" rel="noreferrer">Open JSA <ArrowUpRight size={16}/></a><Link className="button button-glass" to="/docs/quick-start"><BookOpen size={16}/> Read the guide</Link></div></div><div className="cta-art" aria-hidden="true"><div className="art-ring ring-a"/><div className="art-ring ring-b"/><div className="art-core">J<span>S</span>A</div><div className="art-spark spark-a"/><div className="art-spark spark-b"/></div></div></div></section>; }
