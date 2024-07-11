import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Products from '../pages/Products';
import Categories from '../pages/Categories';
import Create from '../pages/Create';
import Login from '../pages/Login';
import CreateContact from '../pages/CreateContact';
import Contacts from '../pages/Contacts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error404 />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
  {
    path: '/contacts/create',
    element: <CreateContact />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
  {
    path: '/create',
    element: <Create />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
