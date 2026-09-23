'use client';
import {sitePath} from '@/lib/site-path';

import {useState} from 'react';
import Image from 'next/image';
import {ArrowRight,ZoomIn} from 'lucide-react';
import {Tabs,TabsList,TabsTrigger,TabsContent} from '@/components/ui/tabs';
import {animalFarmSteps} from '@/lib/animal-farm';

function WorkflowImage({file,alt,className=''}:{file:string;alt:string;className?:string}){
  const src=sitePath('/assets/animal-farm/'+file);
  const dimensions:Record<string,[number,number]>={
    'script-notion.png':[1572,1525],'script-chatgpt.png':[1132,817],
    'shots-prompts.png':[2559,1501],'keyframe-notion.png':[861,1522],
    'keyframe-midjourney.png':[1692,1135],'video-jimeng.png':[1348,1251],
    'video-grok.png':[1254,1396],
  };
  const [width,height]=dimensions[file];
  return <a href={src} target="_blank" rel="noreferrer" className={'animal-workflow-image '+className} aria-label={'放大查看：'+alt}>
    <Image src={src} alt={alt} width={width} height={height} loading="lazy"/>
    <span className="animal-zoom" aria-hidden="true"><ZoomIn size={17}/></span>
  </a>;
}

function WorkflowDetail({step}:{step:string}){
  if(step==='script')return <div className="animal-script-grid">
    <div className="animal-script-conversation">
      <blockquote className="animal-prompt">
        <strong>初步想法：</strong>
        <p>我想以动物农场为灵感做一个实验电影短片。2分钟左右。下面是我的美术风格想象：内容怪诞，配色高饱和度多巴胺配色，但一张图里颜色不超过三到四个（有点怪核、刻奇、超现实主义和刻意营造的布景的感觉）内容随意发挥，需要以乔治奥威尔的动物农场为灵感。但是主要角色明显是人类的身体套着一个动物的头套的感觉。静态运镜，高度对称化构图。这样可以生成什么样的剧本？</p>
      </blockquote>
      <WorkflowImage file="script-chatgpt.png" alt="ChatGPT 根据设计者反馈修改剧本的对话截图" className="animal-script-chatgpt"/>
    </div>
    <WorkflowImage file="script-notion.png" alt="Notion 中实时整理与修改 ANIMAL FARM 剧本" className="animal-script-notion"/>
  </div>;
  if(step==='prompts')return <WorkflowImage file="shots-prompts.png" alt="Notion 中的镜头拆解、机位设计和中英文生成提示词" className="animal-shots-prompts"/>;
  if(step==='keyframes')return <div className="animal-keyframes-grid">
    <WorkflowImage file="keyframe-notion.png" alt="Notion 中交给 Codex 执行的关键帧提示词" className="animal-keyframe-notion"/>
    <WorkflowImage file="keyframe-midjourney.png" alt="Codex 自动操作 Midjourney 生成关键帧的过程" className="animal-keyframe-midjourney"/>
  </div>;
  return <div className="animal-video-grid">
    <WorkflowImage file="video-jimeng.png" alt="即梦根据关键帧和视频提示词生成镜头"/>
    <WorkflowImage file="video-grok.png" alt="Grok 根据关键帧和提示词生成视频片段"/>
  </div>;
}

export function AnimalFarmWorkflow(){
  const [active,setActive]=useState<string>('script');
  return <section className="animal-workflow animal-section" aria-labelledby="animal-workflow-title">
    <Tabs className="animal-tabs" orientation="vertical" value={active} onValueChange={value=>{if(typeof value==='string')setActive(value)}}>
      <div className="animal-workflow-sidebar">
        <header className="animal-workflow-heading">
          <p className="animal-kicker">4-STEP AI PIPELINE</p>
          <h2 id="animal-workflow-title">四步 AI 创作流程</h2>
          <p>四步串联剧本、分镜与提示词、关键帧和视频。<br/>以 Notion 协作，由我提供创意并持续审核。</p>
        </header>
        <TabsList className="animal-step-list" aria-label="选择 AI 创作流程步骤">
          {animalFarmSteps.map(step=><TabsTrigger key={step.id} value={step.id} className="animal-step" onPointerEnter={event=>{if(event.pointerType==='mouse')setActive(step.id)}}>
            <span className="animal-step-number">{step.number}</span>
            <span className="animal-step-label"><strong>{step.title}</strong><span lang="en">{step.english}</span><small>{step.tools}</small></span>
            <ArrowRight className="animal-step-arrow" size={22} strokeWidth={1.5}/>
          </TabsTrigger>)}
        </TabsList>
      </div>
      <div className="animal-workflow-details">
        {animalFarmSteps.map(step=><TabsContent value={step.id} key={step.id} className="animal-step-panel" keepMounted>
          <div className="animal-panel-reveal">
            <header className="animal-detail-heading">
              <p className="animal-kicker">{step.number} / {step.eyebrow}</p>
              <h3>{step.heading}</h3>
              <p className="animal-flow-line">{step.flow}</p>
            </header>
            <WorkflowDetail step={step.id}/>
          </div>
        </TabsContent>)}
      </div>
    </Tabs>
  </section>;
}
