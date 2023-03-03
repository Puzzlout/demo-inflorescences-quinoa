const localeShort = 'fr';
const localeFull = 'fr-FR';
const websiteDomain = 'demo-inflorescences.netlify.app';
const titleDefault = 'Inflorescences (DEMO)';
const descriptionDefault =
  'Débutée en 2021, la production de quinoa sur la ferme familiale, située à Hermeville, en Seine Maritime. Soucieux de proposer une alimentation de qualité aux consommateurs, nous cultivons dans une démarche d’agroécologie :  protection des sols, de la ressource en eau et de la biodiversité. C’est ainsi que nous sommes actuellement certifiés exploitation à Haute Valeur Environnementale (HVE) de niveau 2, le niveau 3 sera atteint pour la récolte prochaine.';
const themeColor = '#BD512F';
const repoLink = 'https://github.com/Puzzlout/demo-inflorescences-quinoa';

export const frHeadConfig = {
  lang: localeFull,
  title: titleDefault,
  description: descriptionDefault,
  repo: repoLink,
  //https://v2.vuepress.vuejs.org/reference/config.html#head
  head: [
    ['meta', { property: 'og:title', content: titleDefault }],
    [
      'meta',
      {
        property: 'og:url',
        // content: `https://${websiteDomain}/${localeShort}/`,
        content: `https://${websiteDomain}/`,
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: descriptionDefault,
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    [
      'meta',
      { property: 'og:image', content: '/icons/android-chrome-512x512.png' },
    ],
    ['meta', { name: 'msapplication-TileColor', content: themeColor }],
    ['meta', { name: 'theme-color', content: themeColor }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: themeColor,
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ],
};
