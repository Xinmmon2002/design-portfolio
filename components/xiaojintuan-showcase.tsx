import {sitePath} from '@/lib/site-path';
import Image from 'next/image';

const screens=[
  ['01-main.png','小金团开屏'],
  ['02-create.png','新建小金团'],
  ['03-offers.png','优惠详情'],
  ['04-daily-plan.png','每日计划详情'],
  ['05-savings.png','攒钱金团'],
  ['06-transfer-in.png','资金转入'],
  ['07-transfer-out.png','资金转出'],
  ['08-limit.png','限额设置'],
  ['09-assistant.png','A 钱助手'],
  ['10-aa-settings.png','AA 设置'],
  ['11-reminder.png','付款提醒'],
  ['12-member.png','团友详情'],
  ['13-history.png','历史明细'],
  ['14-payment-success.png','支付成功'],
] as const;

export function XiaojintuanShowcase(){
  return <section className="xiaojintuan-showcase reveal" id="high-fidelity-showcase" aria-label="小金团高保真界面循环展示">
    <div className="xiaojintuan-showcase-track" aria-hidden="true">
      {[0,1,2].map(set=><div className="xiaojintuan-showcase-set" key={set}>
        {screens.map(([file])=><div className="xiaojintuan-showcase-screen" key={set+'-'+file}>
          <Image src={sitePath('/assets/interaction/showcase/'+file)} alt="" width={728} height={1428} loading="eager"/>
        </div>)}
      </div>)}
    </div>
    <Image className="xiaojintuan-showcase-device" src={sitePath('/assets/interaction/showcase/device-frame.png')} alt="" width={642} height={1336} loading="eager" aria-hidden="true"/>
  </section>;
}
