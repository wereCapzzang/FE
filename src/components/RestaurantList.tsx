import RestaurantCard from './RestaurantCard';

import type { RestaurantInfo } from '../type';

interface RestaurantListProps {
  restaurants: RestaurantInfo[];
}

const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  return (
    <div className="flex flex-col gap-3 p-3">
      {restaurants.map((restaurant) => {
        return <RestaurantCard restaurant={restaurant} />;
      })}
    </div>
  );
};

export default RestaurantList;
