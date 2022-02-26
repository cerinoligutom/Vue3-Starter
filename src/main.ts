import { createApp } from 'vue';
import router from '@/router';

import '@/assets/styles/tailwind.css';
import '@/assets/styles/global.css';

import App from './app.vue';
import initModules from './modules';
import initLayouts from './shared/layouts';

const app = createApp(App);

initLayouts(app);
initModules({ app, router });

app.use(router);

app.mount('#app');
