import { createApp } from 'vue';
import router from '@/router';

import '@/assets/styles/global.css';

import App from './app.vue';
import initModules from './modules';
import initLayouts from './shared/layouts';
import initPlugins from './plugins';

const app = createApp(App);

initLayouts(app);
initPlugins(app);
initModules({ app, router });

app.use(router);

app.mount('#app');
