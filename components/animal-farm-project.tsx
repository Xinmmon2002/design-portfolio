import {sitePath} from '@/lib/site-path';
import {ArrowRight} from 'lucide-react';
import Image from 'next/image';
import {ProjectFilm} from '@/components/project-film';
import {AnimalFarmWorkflow} from '@/components/animal-farm-workflow';
import {animalFarmSteps,animalFarmStills,animalFarmVisualRules} from '@/lib/animal-farm';

export function AnimalFarmProject(){
  return <>
    <ProjectFilm src="/assets/animal-farm/film.mp4" poster="/assets/animal-farm/cover.jpg" title="ANIMAL FARM 完整短片"/>
    <AnimalFarmWorkflow/>
    <section className="animal-film-sequence animal-section" aria-labelledby="animal-sequence-title">
      <header className="animal-sequence-heading reveal">
        <h2 id="animal-sequence-title">从关键帧到成片<span lang="en">FROM FRAME TO FILM</span></h2>
        <p>AI 关键帧 · 视频生成 · 成片<span lang="en">KEYFRAMES · VIDEO · FINAL FILM</span></p>
      </header>
      <div className="animal-narrative-heading reveal">
        <h3>成片剧情节选 <span lang="en">/ FINAL FILM · NARRATIVE SEQUENCE</span></h3>
        <p>从旧主人的命令、反抗与更名，到平等戒律被改写，最终以猪与人举杯收尾。</p>
        <p lang="en">Commands lead to revolt and renaming; equality is rewritten, ending with a toast between pig and human.</p>
      </div>
      <div className="animal-stills">
        {animalFarmStills.map((still,i)=>{const number=String(i+1).padStart(2,'0');return <figure className="animal-still reveal" key={still.time}>
          <a href={sitePath('/assets/animal-farm/still-'+number+'.png')} target="_blank" rel="noreferrer" aria-label={'查看完整画面：'+still.title}>
            <Image src={sitePath('/assets/animal-farm/still-'+number+'.webp')} alt={still.title} width={900} height={506} loading="lazy"/>
          </a>
          <figcaption><small>{number} · {still.time} / FILM STILL</small><strong>{still.title}</strong><span lang="en">{still.english}</span></figcaption>
        </figure>})}
      </div>
      <div className="animal-direction-grid">
        <div className="animal-visual-rules reveal">
          <h3>视觉一致性 <span lang="en">/ VISUAL CONSISTENCY</span></h3>
          <div className="animal-rule-grid">{animalFarmVisualRules.map(rule=><article className="animal-rule" key={rule.title}>
            <h4>{rule.title}<span lang="en">{rule.english}</span></h4>
            <p>{rule.text}</p><small lang="en">{rule.translation}</small>
          </article>)}</div>
        </div>
        <article className="animal-direction reveal">
          <h3>AI 创作统筹 <span lang="en">/ AI DIRECTION</span></h3>
          <p>以四步协作持续校准角色、画面与动作，统一从剧本到成片的视觉语言。</p>
          <p lang="en">Four connected steps align characters, imagery and motion from script to final film.</p>
          <ol className="animal-direction-steps">{animalFarmSteps.map((step,i)=><li key={step.id}>
            <small>{step.number}</small><strong>{step.title}</strong><span lang="en">{step.english}</span>
            {i<3?<ArrowRight size={16} aria-hidden="true"/>:null}
          </li>)}</ol>
        </article>
      </div>
    </section>
  </>;
}
