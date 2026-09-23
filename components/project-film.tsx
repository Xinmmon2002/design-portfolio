'use client';
import {sitePath} from '@/lib/site-path';

import {useRef,useState} from 'react';
import {Play} from 'lucide-react';

type ProjectFilmProps = {src?:string;poster?:string;title?:string};

export function ProjectFilm({src='/assets/ejin-ncda-film.mp4',poster='/assets/ejin-ncda-poster.jpg',title='额吉食光 NCDA 宣讲视频'}:ProjectFilmProps={}){
  const video=useRef<HTMLVideoElement>(null);
  const [started,setStarted]=useState(false);
  const [error,setError]=useState(false);
  async function play(){
    if(!video.current)return;
    setError(false);
    setStarted(true);
    try{await video.current.play();}
    catch{setStarted(false);setError(true);}
  }
  // Keep the supplied film intact; no separate caption file was provided.
  return <section className="project-film" aria-label={title}>
    {/* oxlint-disable-next-line jsx-a11y/media-has-caption */}
    <video ref={video} src={sitePath(src)} poster={sitePath(poster)} width={1920} height={1080} controls={started} preload="none" playsInline autoPlay={false} loop={false}
      onPlay={()=>setStarted(true)}
      onEnded={()=>{setStarted(false);video.current?.load();}}
      aria-label={title}/>
    {!started?<button type="button" className="project-film-play" onClick={play} aria-label={(error?'重新播放':'播放')+title}><Play size={30} fill="currentColor" strokeWidth={1.5}/></button>:null}
    {error?<output className="project-film-error">暂时无法播放，请点击重试。</output>:null}
  </section>;
}
