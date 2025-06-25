import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:id',
    element: <DetailPage />,
  },
]);
