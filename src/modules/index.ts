import { initAuthModule } from './auth';
import { initDemoModule } from './demo';

export default (opts: IModuleOptions) => {
  initAuthModule(opts);
  initDemoModule(opts);
};
