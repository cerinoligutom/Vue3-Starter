import routes from './routes';

export const initAuthModule: IModuleFn = ({ router }) => {
  routes.map((route) => router.addRoute(route));
};
