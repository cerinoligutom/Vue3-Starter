import enMessages from './en.ftl?raw'; // https://fluent-vue.demivan.me/howto/importing-ftl-files.html#vite
import { FluentBundle, FluentResource } from '@fluent/bundle';
import { SupportedLanguage } from '@/shared/constants/supported-language';

// Create a FluentBundle instance
export const enFluentBundle = new FluentBundle(SupportedLanguage.EN);

// Add global resources to the bundle
enFluentBundle.addResource(new FluentResource(enMessages));
