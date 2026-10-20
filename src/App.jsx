import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Features from './pages/Features.jsx';
import Docs, { DocsIndex } from './pages/Docs.jsx';
import Examples from './pages/Examples.jsx';
import Releases from './pages/Releases.jsx';
import Roadmap from './pages/Roadmap.jsx';
import About from './pages/About.jsx';
import Contributing from './pages/Contributing.jsx';
import { PageShell } from './components/Layout.jsx';
import { ArrowLeft, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

function ScrollToTop(){const {pathname,hash}=useLocation();useEffect(()=>{if(hash){const t=setTimeout(()=>document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({behavior:'smooth',block:'start'}),80);return()=>clearTimeout(t)}window.scrollTo({top:0,behavior:'instant'})},[pathname,hash]);return null;}
function NotFound(){return <PageShell><section className="not-found container"><span className="not-found-code">404</span><h1>This page went off the chart.</h1><p>The page may have moved, or the URL might be incorrect.</p><div className="button-row"><Link to="/" className="button button-primary"><HomeIcon size={16}/> Back home</Link><button className="button button-secondary" onClick={()=>window.history.back()}><ArrowLeft size={16}/> Go back</button></div></section></PageShell>}
export default function App(){return <><ScrollToTop/><Routes><Route path="/" element={<Home/>}/><Route path="/features" element={<Features/>}/><Route path="/docs" element={<DocsIndex/>}/><Route path="/docs/:slug" element={<Docs/>}/><Route path="/examples" element={<Examples/>}/><Route path="/releases" element={<Releases/>}/><Route path="/roadmap" element={<Roadmap/>}/><Route path="/about" element={<About/>}/><Route path="/contributing" element={<Contributing/>}/><Route path="*" element={<NotFound/>}/></Routes></>}
