import { useEffect, useState } from 'react';
import baseApi from '../api/base';
import type { RestaurantInfo } from '../type';

const useGetRestaurantList = () => {
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState<RestaurantInfo[] | null>();

  const getRestaurantList = async () => {
    try {
      setLoading(true);
      setError(null);

      //token=17e0606f-cd0e-4854-ae5d-56d0a63a375e; Max-Age=189216000; Expires=Tue, 24 Jun 2031 18:12:36 GMT; Path=/; Secure

      console.log(document.cookie);
      const response = await baseApi.get('/api/restaurants');
      setRestaurants(response.data.restaurants);

      return response.data.restaurants;
    } catch (error: any) {
      setError(error.response?.data?.message || '레스토랑 요청 중 오류 발생');
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const refetchRestaurantList = async () => {
    await getRestaurantList();
  };

  useEffect(() => {
    getRestaurantList();
  }, []);

  return {
    refetchRestaurantList,
    error,
    loading,
    restaurants,
  };
};

export default useGetRestaurantList;
