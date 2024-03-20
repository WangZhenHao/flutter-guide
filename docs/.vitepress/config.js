import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  base: '/flutter-guide/',
  outDir: '../dist',
  lang: 'en-US',
  title: 'vue3源码解析',
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
          { text: '读源码步骤', link: '/start/preface' },
          { text: 'Vue3项目构建流程', link: '/start/build' },
          { text: 'es6的新特性', link: '/start/es6' },
          { text: '联系&讨论', link: '/start/contact' },
        ],
      }
    ],
  },
});
