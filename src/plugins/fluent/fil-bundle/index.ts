import filMessages from './fil.ftl?raw'; // https://fluent-vue.demivan.me/howto/importing-ftl-files.html#vite
import { FluentBundle, FluentResource } from '@fluent/bundle';
import { SupportedLanguage } from '@/shared/constants/supported-language';

// Create a FluentBundle instance
export const filFluentBundle = new FluentBundle(SupportedLanguage.FIL);

// Add global resources to the bundle
filFluentBundle.addResource(new FluentResource(filMessages));
