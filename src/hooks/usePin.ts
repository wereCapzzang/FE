import { useQuery } from '@tanstack/react-query';
import baseApi from '../api/base';

interface pinsType {
  restaurants: number[];
}

const fetchPins = async (): Promise<pinsType> => {
  const response = await baseApi.get('/api/pins/alarm');
  return response.data;
};

const usePin = () => {
  return useQuery<pinsType, Error>({
    queryKey: ['pins'],
    queryFn: fetchPins,
    refetchInterval: 5000,
    retry: 1,
  });
};

export default usePin;
