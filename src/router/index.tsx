import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';
import RestaurantListPage from '../page/RestaurantListPage';
import OnboardingPage from '../page/OnboardingPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:id',
    element: <DetailPage />,
  },
  {
    path: '/restaurants',
    element: <RestaurantListPage />,
  },
  {
    path: '/onboarding',
    element: <OnboardingPage />,
  },
]);
