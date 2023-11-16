import RestItemHome from '../views/pages/restaurant-item';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': RestItemHome,
  '/restaurant-item': RestItemHome,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
