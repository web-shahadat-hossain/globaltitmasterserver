import { authRouters } from '../app/Modules/auth/auth.router';
import { userRouters } from '../app/Modules/user/user.route';

const modulesRoutes = [
  // user router start here
  {
    path: '/users',
    route: userRouters.router,
  },
  {
    path: '/auth',
    route: authRouters.router,
  },
];

export default modulesRoutes;
