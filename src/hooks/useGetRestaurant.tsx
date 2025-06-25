import { useEffect, useState } from 'react';
import baseApi from '../api/base';
import type { RestaurantInfo } from '../type';

const useGetRestaurant = (id: number) => {
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(false);
  const [restaurant, setRestaurant] = useState<RestaurantInfo | null>(null);

  const getRestaurant = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log(document.cookie);
      const response = await baseApi.get(`/api/restaurants/${id}`);

      setRestaurant(response.data);

      return response.data;
    } catch (error: any) {
      setError(error.response?.data?.message || '레스토랑 요청 중 오류 발생');
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const refetchRestaurant = async () => {
    await getRestaurant();
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  return {
    refetchRestaurant,
    error,
    loading,
    restaurant,
  };
};

export default useGetRestaurant;
