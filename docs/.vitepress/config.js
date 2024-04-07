import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  base: '/flutter-guide/',
  outDir: '../dist',
  lang: 'en-US',
  title: 'flutter入门学习',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档仓库', link: 'https://github.com/WangZhenHao/flutter-guide' },
      { text: 'flutter文档', link: 'https://docs.flutter.dev/get-started/install/windows' }
    ],

    sidebar: [
      {
        text: '准备工作',
        items: [
          { text: '环境搭建', link: '/start/env' },
          { text: 'Dart语法', link: '/start/dart' },
          { text: 'widget', link: '/start/widget' },
          { text: '构建部署', link: '/start/deployment' }
        ],
      }
    ],
  },
});
