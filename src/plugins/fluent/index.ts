import type { App } from 'vue';
import 'intl-pluralrules'; // Polyfill: https://www.npmjs.com/package/intl-pluralrules#Polyfill
import { createFluentVue } from 'fluent-vue';
import { enFluentBundle } from './en-bundle';
import { filFluentBundle } from './fil-bundle';
import { SupportedLanguage } from '@/shared/constants/supported-language';

const fluent = createFluentVue({
  bundles: [enFluentBundle],
});

export const changeLanguage = (lang: SupportedLanguage) => {
  switch (lang) {
    case SupportedLanguage.EN: {
      fluent.bundles = [enFluentBundle];
      break;
    }
    case SupportedLanguage.FIL: {
      fluent.bundles = [filFluentBundle];
      break;
    }
    default: {
      fluent.bundles = [enFluentBundle];
      throw new Error(`Language "${lang}" not supported`);
    }
  }
};

export const initFluent = (app: App<Element>) => {
  // Create plugin istance
  // bundles - The current negotiated fallback chain of languages

  app.use(fluent);
};
