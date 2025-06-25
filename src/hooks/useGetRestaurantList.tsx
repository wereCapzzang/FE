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

      const response = await baseApi.get('/api/restaurants');

      setRestaurants(response.data);

      return response.data;
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
