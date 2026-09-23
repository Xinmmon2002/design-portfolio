import {sitePath} from '@/lib/site-path';
export function SiteHeader(){return <header className="site-header"><a className="wordmark" href={sitePath("/")} aria-label="作品集首页">PORTFOLIO<span className="wordmark-dot">.</span></a><span className="header-discipline">VISUAL DESIGN & AI EXPLORATION</span><nav aria-label="主导航"><a href={sitePath("/#works")}>作品目录 <span>Index</span></a></nav></header>}
export function SiteFooter(){return <footer className="site-footer"><span>DESIGN PORTFOLIO</span><a href={sitePath("/#works")}>返回作品目录 ↗</a><span>SELECTED WORKS / 2023—2026</span></footer>}

