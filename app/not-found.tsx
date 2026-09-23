import {sitePath} from '@/lib/site-path';
import {SiteHeader,SiteFooter} from '@/components/site-header';
export default function NotFound(){return <><SiteHeader/><main className="about-main"><p className="eyebrow">404</p><h1>这件作品暂未找到。</h1><a className="back-link" href={sitePath("/#works")}>返回作品目录 ↗</a></main><SiteFooter/></>}
