import { useNavigate } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';
import useGetRestaurantList from '../hooks/useGetRestaurantList';

const RestaurantListPage = () => {
  const { restaurants, error, loading } = useGetRestaurantList();

  const navigate = useNavigate();
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{String(error)}</div>;
  if (!restaurants || restaurants.length === 0)
    return <div>레스토랑 리스트 없음</div>;

  return (
    <div className="max-w-screen-sm min-h-screen flex flex-col">
      <header className="w-full p-4 h-10 flex gap-3 items-center">
        <div
          onClick={() => navigate('/')}
          className="cursor-pointer flex gap-3"
        >
          <img src="/rice.png" alt="logo" className="w-6 h-6" />
          <h3 className="text-lg text-green-600 font-semibold">밥톨</h3>
        </div>
      </header>

      <div className="flex justify-between p-4">
        <h2 className="font-semibold text-lg">
          교내 식당 <span className="text-green-600">혼잡도 </span>
        </h2>
      </div>

      {/**태그 */}
      <div className="px-3 flex gap-3">
        <button className="active:bg-black rounded-full active:text-white text-stone-500 border  border-stone-400 text-sm px-4 py-1">
          전체
        </button>
        <button className="active:bg-black rounded-full active:text-white text-stone-500 border  border-stone-400 text-sm px-4 py-1">
          여유
        </button>
        <button className="active:bg-black rounded-full active:text-white text-stone-500 border  border-stone-400 text-sm px-4 py-1">
          20분 이내
        </button>
      </div>
      <div className="flex flex-col gap-3 p-3">
        {Array.isArray(restaurants) &&
          restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantListPage;
