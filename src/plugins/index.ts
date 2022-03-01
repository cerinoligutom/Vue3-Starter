import type { App } from 'vue';
import { initFluent } from './fluent';

export default (app: App<Element>) => {
  initFluent(app);
};
