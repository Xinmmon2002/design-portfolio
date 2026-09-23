# Design Portfolio

品牌视觉、公共艺术、包装文创与 AIGC 创意探索作品集。

GitHub 仓库：<https://github.com/Xinmmon2002/design-portfolio>

GitHub Pages 地址：<https://xinmmon2002.github.io/design-portfolio/>

## 本地运行

需要 Node.js 22.13 或以上版本。

```sh
npm ci
npm run dev
```

## 构建与发布

```sh
npm run build:github
```

发布文件生成在 `dist/client`。构建会恢复原始视频和动图，保留点击播放与循环动画的设置，并生成可直接访问的作品页目录。

首次发布时，在 GitHub 仓库的 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。推送到 `main` 后，**Actions → Deploy portfolio to GitHub Pages** 会自动构建并发布。

仓库的名称和所属账号在 `github-pages.config.json` 中配置；GitHub Actions 会优先使用当前仓库地址。更名后同步修改此文件，可让本地构建与线上地址保持一致。

## 内容位置

- `app`：首页与作品详情页面。
- `components`：目录交互、作品展示、工作流与视频播放器。
- `lib`：作品文字与排版。
- `public/assets`：图片与媒体资源。
- `source-assets`：大型视频与动图的原始文件分片；构建时自动校验并还原。

作品与图片版权归设计者及相应权利人所有。公开本仓库不代表授权转载或商用作品素材。
