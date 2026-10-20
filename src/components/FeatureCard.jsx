import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Database, SlidersHorizontal, BarChart3, Gauge, LayoutDashboard, FileDown, ShieldCheck } from 'lucide-react';
const icons = { Database, SlidersHorizontal, BarChart3, Gauge, LayoutDashboard, FileDown, ShieldCheck };
export default function FeatureCard({ feature, index = 0 }) {
  const Icon = icons[feature.icon] || Database;
  return <article className="feature-card" style={{'--card-delay': `${index * 55}ms`}}><div className="feature-card-top"><span className="feature-icon"><Icon size={20}/></span><span className="feature-category">{feature.category}</span></div><h3>{feature.title}</h3><p>{feature.description}</p><Link className="text-link" to={`/features#${feature.id}`}>Explore capability <ArrowUpRight size={15}/></Link></article>;
}
