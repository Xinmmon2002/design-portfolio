'use client';
import {sitePath} from '@/lib/site-path';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { categories, projects, projectThumbnail, type CategoryId } from '@/lib/portfolio';
export function PortfolioIndex(){
const [active,setActive]=useState<CategoryId|null>(null);
const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
const clear=()=>{if(timer.current)clearTimeout(timer.current)};
useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current)},[]);
return <section className="index-grid" id="works" aria-label="作品总目录">
{categories.map(category=>{const entries=projects.filter(p=>p.category===category.id);const isOpen=active===category.id;return <Collapsible onMouseLeave={()=>{clear();timer.current=setTimeout(()=>setActive(null),200)}} onKeyDown={e=>{if(e.key==='Escape'){clear();setActive(null)}}} key={category.id} className={'category category--'+category.id+(isOpen?' is-open':'')} open={isOpen} onOpenChange={open=>setActive(open?category.id:null)} onMouseEnter={()=>{clear();setActive(category.id)}} onFocusCapture={()=>{clear();setActive(category.id)}} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget))setActive(null)}}>
<CollapsibleTrigger className="category-trigger" aria-label={category.title+'，展开项目目录'}><span className="category-number">{category.index}</span><span className="category-label"><span className="category-title">{category.title}</span><span className="category-english">{category.english}</span></span><span className="category-control" aria-hidden="true">{isOpen?<Minus size={24}/>:<Plus size={24}/>}</span></CollapsibleTrigger>
<div className="category-art" aria-hidden="true"><Image src={sitePath(category.id==='interaction'?'/assets/category-interaction.png':'/assets/category-'+category.id+'.webp')} width={category.id==='interaction'?377:416} height={category.id==='interaction'?349:374} alt=""/></div>
<div className="category-bottom" aria-hidden={isOpen}><span>{category.note}</span><span>{entries.length?String(entries.length).padStart(2,'0')+' PROJECTS':'IN PROGRESS'}</span></div>
<CollapsibleContent className="category-menu" keepMounted>
<div className="project-menu-inner">
{entries.length?entries.map((project,i)=><a className="project-entry" href={sitePath('/work/'+project.slug)} key={project.slug}>
<div className="project-link"><span className="project-ordinal">{String(i+1).padStart(2,'0')}</span><span className="project-link-title">{project.title}</span><ArrowUpRight className="project-arrow" size={24} strokeWidth={1.5}/></div>
<div className="project-peek"><div className="project-peek-inner"><Image src={sitePath(projectThumbnail(project.slug))} width={project.category==='commercial'?350:536} height={project.category==='commercial'?350:344} alt={project.shortTitle+"作品概览"} loading="lazy"/><p>{project.description}</p></div></div>
</a>):<div className="aigc-empty"><span className="empty-plus" aria-hidden="true">＋</span><p>新的探索，正在发生。</p><span>作品整理中</span></div>}
</div>
</CollapsibleContent></Collapsible>})}
</section>;
}
