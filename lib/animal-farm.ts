export const animalFarmSteps = [
  {id:'script',number:'01',title:'概念与剧本',english:'CONCEPT & SCRIPT',tools:'ChatGPT × Notion / 剧本共创与修改',eyebrow:'SCRIPT COLLABORATION · 剧本共创',heading:'ChatGPT × Notion：从想法到剧本实现',flow:'设计者提供初步想法 → ChatGPT 撰写剧本 → 设计者给出修改意见 → Notion 实时修改'},
  {id:'prompts',number:'02',title:'分镜与提示词',english:'SHOTS & PROMPTS',tools:'ChatGPT × Notion / 分镜拆解与提示词',eyebrow:'SHOTS & PROMPTS · 分镜与提示词',heading:'ChatGPT × Notion：分镜拆解与提示词',flow:'读取剧本 → ChatGPT 拆分镜头并编写提示词 → Notion 同步修改'},
  {id:'keyframes',number:'03',title:'AI 关键帧',english:'AI KEYFRAME',tools:'Notion → Codex → Midjourney',eyebrow:'KEYFRAME GENERATION · 关键帧生成',heading:'Codex 自动执行 Midjourney 生图',flow:'Notion 提示词 → Codex 自动读取与执行 → Midjourney 生图'},
  {id:'video',number:'04',title:'视频生成',english:'VIDEO GENERATION',tools:'提示词 → 即梦 / Grok → 视频片段',eyebrow:'VIDEO GENERATION · 视频生成',heading:'即梦 × Grok：从关键帧到视频',flow:'ChatGPT 视频提示词 → 自动联动即梦 / Grok → 视频片段'},
] as const;

export const animalFarmStills = [
  {time:'00:16',title:'旧主人的统治',english:'THE OLD ORDER'},
  {time:'00:32',title:'反抗与更名',english:'REBELLION & RENAMING'},
  {time:'01:03',title:'平等的许诺',english:'PROMISE OF EQUALITY'},
  {time:'01:20',title:'重复的劳作',english:'REPETITIVE LABOR'},
  {time:'01:43',title:'平等被改写',english:'EQUALITY REWRITTEN'},
  {time:'01:58',title:'新权力的盛宴',english:"THE NEW ELITE’S BANQUET"},
  {time:'02:04',title:'猪与人举杯',english:'PIG & HUMAN TOAST'},
] as const;

export const animalFarmVisualRules = [
  {title:'机位与构图',english:'CAMERA & COMPOSITION',text:'固定机位 · 正面视角 · 中轴对称',translation:'LOCKED-OFF / FRONTAL / SYMMETRICAL'},
  {title:'色彩',english:'COLOR',text:'三至四种主色 · 高饱和糖果色',translation:'3–4 KEY COLORS / HIGH SATURATION'},
  {title:'角色',english:'CHARACTER',text:'成人身体 · 道具感动物头套',translation:'HUMAN BODIES / ANIMAL MASKS'},
  {title:'动作节奏',english:'MOTION',text:'重复动作 · 定格般的机械节奏',translation:'REPETITION / STOP-MOTION CADENCE'},
] as const;
