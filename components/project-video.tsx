import {sitePath} from '@/lib/site-path';

type ProjectVideoProps={src:string;poster?:string;title:string};

export function ProjectVideo({src,poster,title}:ProjectVideoProps){
  return <section className="project-video" aria-label={title}>
    {/* oxlint-disable-next-line jsx-a11y/media-has-caption */}
    <video src={sitePath(src)} poster={poster?sitePath(poster):undefined} width={1920} height={1080} controls preload="metadata" playsInline autoPlay={false} loop={false} aria-label={title}/>
  </section>;
}
