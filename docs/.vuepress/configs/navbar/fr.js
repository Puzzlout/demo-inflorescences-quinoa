import { navbar } from 'vuepress-theme-hope';

export const frNavBarConfig = navbar([
  '/',
  '/page/a-propos/',
  {
    text: 'Notre Quinoa',
    link: '/page/le-quinoa/',
  },
  // {
  //   text: 'Acheter en sachet de 350g',
  //   link: 'https://buy.stripe.com/test_dR6eUV4eN1VigdW000',
  // },
  // {
  //   text: 'Acheter en sac de 3kg',
  //   link: 'https://buy.stripe.com/test_4gwcMNeTrarO0eY6op',
  // },
  // {
  //   text: 'Acheter en sac de 6kg',
  //   link: 'https://buy.stripe.com/test_fZe8wxcLjfM8gdW5km',
  // },
  { text: 'Commandez', link: '/page/commande-de-quinoa/' },
  '/page/contactez-nous/',
]);
