import { SiteHeader, SiteFooter } from '@/components/site-header';
import { PortfolioIndex } from '@/components/portfolio-index';

export default function Home(){return <><SiteHeader/><main className="home-main"><div className="masthead"><div><p className="eyebrow">SELECTED WORKS · 2023—2026</p><h1>PORTFOLIO<span className="title-period">.</span></h1></div><div className="masthead-aside"><span>SELECTED DESIGN WORKS</span><p>视觉传达 · 交互设计<br/>与 AI 创意探索</p></div></div>
  <PortfolioIndex/></main><SiteFooter/></>}
