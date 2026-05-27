# 小文家电官网

这是“小文家电｜临淄本地家电与监控服务老店”的单页展示型官网，适合部署到 GitHub Pages、Netlify、Cloudflare Pages 或任意静态服务器。

## 文件说明

- `index.html`：页面结构和主要文案。
- `styles.css`：页面样式、PC 和移动端响应式适配。
- `script.js`：读取配置、复制微信号、联系方式链接替换。
- `config.js`：电话、微信、地址、二维码、Logo、老板形象等可配置内容。
- `assets/`：图片资源，包括 Logo、老板形象、场景图、微信二维码。

## 常用修改

联系方式集中在 `config.js`：

```js
window.XIAOWEN_SITE_CONFIG = {
  phone: "13608940548",
  wechatId: "13608940548",
  serviceArea: "临淄城区及周边社区、商铺、仓库、办公室",
  address: "淄博市临淄区稷下街道办阳光康城商业房小文家电",
  mapUrl: "https://uri.amap.com/search?keyword=...",
  logoImage: "assets/logo-reference.png",
  bossImage: "assets/boss-reference.png",
  qrImage: "assets/wechat-qr-real.jpg"
};
```

替换二维码时，把新图片放进 `assets/`，再修改 `qrImage`。

替换电话或微信时，只改 `phone` 和 `wechatId`，页面按钮和复制功能会自动使用新值。

## 本地预览

在当前目录运行：

```bash
python3 -m http.server 4173
```

然后打开：

```text
http://localhost:4173
```

## 推荐上线方式：GitHub Pages

1. 新建一个 GitHub 仓库，例如 `xiaowen-appliance-site`。
2. 把本目录文件提交并推送到仓库。
3. 进入 GitHub 仓库的 `Settings -> Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub Pages 生成网址。

后续修改时，只需要修改文件并推送到 `main` 分支，GitHub Pages 会自动更新。
