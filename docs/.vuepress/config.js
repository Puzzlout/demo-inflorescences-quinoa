const version = '1.0.14';

import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';

// import docsearchPlugin from '@vuepress/plugin-docsearch';

import theme from './theme';
import { /*enHeadConfig,*/ frHeadConfig } from './configs/head';

export default defineUserConfig({
  lang: 'fr-FR',
  locales: {
    //'/': enHeadConfig,
    '/': frHeadConfig,
  },
  theme,
  shouldPrefetch: false,
  bundler: viteBundler(),
  plugins: [
    /*docsearchPlugin({
      appId: 'OEWJGZ6584',
      apiKey: '9da6989deaa25628c61dce09c61710b5',
      indexName: '[[docssearch-index]]',
      locales: {
        '/': {
          placeholder: 'Search',
          translations: {
            button: {
              buttonText: 'Search',
              buttonAriaLabel: 'Search',
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'Clear',
                resetButtonAriaLabel: 'Clear',
                cancelButtonText: 'Cancel',
                cancelButtonAriaLabel: 'Cancel',
              },
              startScreen: {
                recentSearchesTitle: 'Search history',
                noRecentSearchesText: 'No recent search',
                saveRecentSearchButtonTitle: 'Save recent searches',
                removeRecentSearchButtonTitle: 'Remove recent searches',
                favoriteSearchesTitle: 'Collect',
                removeFavoriteSearchButtonTitle: 'Remove',
              },
              errorScreen: {
                titleText: 'Unable to get results',
                helpText: 'You may need to check your internet connection',
              },
              footer: {
                selectText: 'Choose',
                navigateText: 'Switch',
                closeText: 'Close',
                searchByText: 'Search by',
              },
              noResultsScreen: {
                noResultsText: 'No relevant results found',
                suggestedQueryText: 'You can try...',
                reportMissingResultsText:
                  'Do you think this query should have results?',
                reportMissingResultsLinkText: 'Report missing result',
              },
            },
          },
        },
        '/fr/': {
          placeholder: 'Rechercher',
          translations: {
            button: {
              buttonText: 'Rechercher',
              buttonAriaLabel: 'Rechercher',
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'Effacer',
                resetButtonAriaLabel: 'Effacer',
                cancelButtonText: 'Annuler',
                cancelButtonAriaLabel: 'Annuler',
              },
              startScreen: {
                recentSearchesTitle: "Rechercher l'historique",
                noRecentSearchesText: 'Aucun recherche r??cente',
                saveRecentSearchButtonTitle:
                  'Sauvegarder les recherches r??centes',
                removeRecentSearchButtonTitle:
                  'Supprimer les recherches r??centes',
                favoriteSearchesTitle: 'Mettre en favori',
                removeFavoriteSearchButtonTitle: 'Supprimer des favoris',
              },
              errorScreen: {
                titleText: 'Aucun r??sultat',
                helpText: 'V??rifiez peut-??tre votre connexion Internet.',
              },
              footer: {
                selectText: 'S??lectionner',
                navigateText: 'Changer',
                closeText: 'Fermer',
                searchByText: 'Rechercher par',
              },
              noResultsScreen: {
                noResultsText: 'Aucun r??sultat trouv?? par votre recherche.',
                suggestedQueryText: 'Essayez peut-??tre...',
                reportMissingResultsText:
                  'Pensez-vous que cette recherche devrait retourner des r??sultats ?',
                reportMissingResultsLinkText: 'Rapporter un r??sultat manquant',
              },
            },
          },
        },
      },
    }),*/
  ],
});
