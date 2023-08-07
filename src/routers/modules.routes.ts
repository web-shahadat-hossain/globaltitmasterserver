import { userRouters } from '../app/Modules/user/user.route';

const modulesRoutes = [
  // user router start here
  {
    path: '/users',
    route: userRouters.router,
  },
];

export default modulesRoutes;
