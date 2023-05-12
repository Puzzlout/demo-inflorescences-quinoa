//https://v2.vuepress.vuejs.org/reference/default-theme/extending.html

import { hopeTheme } from 'vuepress-theme-hope';

import { enNavBarConfig, frNavBarConfig } from './configs/navbar';

export default hopeTheme({
  //path.resolve(__dirname, './theme'),
  hostname: 'https://demo-inflorescences.netlify.app',
  author: {
    name: 'Jeremie Litzler',
    url: 'https://demo-inflorescences.netlify.app',
  },
  // repo: 'Puzzlout/demo-inflorescences-quinoa',
  // docsRepo: 'https://github.com/Puzzlout/demo-inflorescences-quinoa',
  // docsBranch: 'main',
  docsDir: 'docs',
  // editLinkPattern: ':repo/edit/:branch/:path',
  logo: '/icons/favicon-32x32.png',
  // logoDark: '/icons/dark-favicon-32x32.png',
  locales: {
    // '/': {
    //   navbar: enNavBarConfig,
    //   sidebar: false,
    // },
    '/': {
      navbar: frNavBarConfig,
      sidebar: false,
    },
  },
  toc: false,
  displayFooter: true,
  footer:
    'GPLv3 Licensed | <a href="https://demo-inflorescences.netlify.app/page/mentions-legales" title="Lire les mentions légales">Mentions légales</a>',
  plugins: {
    // blog: true,
    // comment: {
    //   provider: 'Giscus',
    //   repo: 'JeremieLitzler/journal',
    //   repoId: 'MDEwOlJlcG9zaXRvcnkzOTQ1MzE2NTg=',
    //   category: 'Comments',
    //   categoryId: 'DIC_kwDOF4QTSs4CTng3',
    //   mapping: 'title',
    // },
    mdEnhance: {
      checkLinks: 'always',
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html
      align: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/attrs.html
      attrs: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html
      //chart: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/container.html
      container: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/echarts.html
      //echarts: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html
      //See also https://echarts.apache.org/en/index.html
      //footnote: true,
      //use the figure, figureCaption to wrap an image
      figure: true,
      //load image lazily with native method
      imgLazyload: true,
      //allow control of image size
      //imgSize: true,
      //Syntax: ==this text is marked==
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html
      mark: true,
      //Supports RevealJS
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html
      //presentation: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/stylize.html
      //I'm not sure I need it for now
      //stylize: []
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/tabs.html
      tabs: true,
    },
    pwa: {
      cacheHTML: true,
      //caching pictures is too heavy...
      //cachePic: true
    },
  },
});
