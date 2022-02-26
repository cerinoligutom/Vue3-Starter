import routes from './routes';

export const initDemoModule: IModuleFn = ({ router }) => {
  routes.map((route) => router.addRoute(route));
};
