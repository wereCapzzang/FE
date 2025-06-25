import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import RestaurantList from '../components/RestaurantList';
import useGetRestaurantList from '../hooks/useGetRestaurantList';
import usePin from '../hooks/usePin';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import type { RestaurantInfo } from '../type';

function HomePage() {
  const {
    restaurants,
    error: restaurantError,
    loading: restaurantLoading,
  } = useGetRestaurantList();

  const { data: pins, isLoading, isError, error } = usePin();
  const pinIds: number[] = JSON.parse(localStorage.getItem('alarm') || '[]');

  useEffect(() => {
    if (pins?.restaurants && pinIds) {
      const toastPinIds = pinIds.filter((pinId) =>
        pins.restaurants.includes(pinId)
      );

      const pinnedRestaurants = restaurants?.filter((restaurant) =>
        toastPinIds.includes(restaurant.id)
      );

      console.log('pinnedRestaurants', pinnedRestaurants);
      console.log('pinIds', pinIds);

      console.log('toastPinIds', toastPinIds);
      console.log('pins', pins);

      if (pinnedRestaurants) {
        for (const x of pinnedRestaurants) {
          alert(`📢 ${x.name} 식당이 여유로워졌습니다.`);
          toast.info(`📢 ${x.name} 식당이 여유로워졌습니다.`, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            theme: 'light',
          });
        }
      }
    }
  }, [pins, pinIds]);

  const navigate = useNavigate();

  if (restaurantLoading) return <div>로딩 중...</div>;
  if (restaurantError) return <div>{String(error)}</div>;
  if (!restaurants) return <div>레스토랑 리스트 없음</div>;

  if (isLoading) return <div>핀 목록 불러오는 중 ...</div>;
  if (isError) return <div>에러: {error.message}</div>;

  let splitRestaurants = [];
  for (let i = 0; i < 3; i++) {
    splitRestaurants.push(restaurants[i]);
  }

  const handleClickMore = () => {
    navigate('/restaurants');
  };

  const studentRestaurant = Array.isArray(restaurants)
    ? restaurants.filter(
        (restaurant) =>
          restaurant.name === '학생회관 식당' || restaurant.name === '계절밥상'
      )
    : [];

  type CrowdedStatus = '혼잡' | '보통' | '여유';

  const statusColorMap: Record<CrowdedStatus, string> = {
    혼잡: 'text-[#ff4848] border-[#ff4848]',
    여유: 'text-[#95ca14] border-[#95ca14]',
    보통: 'text-[#ffb02e] border-[#ffb02e]',
  };

  const handleClickConfusion = (restaurant: RestaurantInfo) => {
    const query = new URLSearchParams({
      id: String(restaurant.id),
      congestion: restaurant.congestion,
      maxPeople: String(restaurant.maxPeople),
      waitingPeople: String(restaurant.waitingPeople),
    }).toString();

    navigate(`/detail?${query}`);
  };

  return (
    <div className="max-w-screen-sm min-h-screen flex flex-col">
      <div className="h-50 w-full bg-green-200 rounded-b-xl flex flex-col items-center">
        <Header />
      </div>
      <div className="flex justify-between  items-center p-4">
        <p className="text-[#ACACAC] font-semibold text-sm">2025-06-26 rainy</p>

        <button
          onClick={handleClickMore}
          className="text-green-600 bg-white cursor-pointer text-sm"
        >
          더 보기
        </button>
      </div>

      <h2 className="font-semibold text-lg px-4">
        교내 식당 <span className="text-green-600">혼잡도 </span>
      </h2>
      {/**태그 */}

      {/* TODO: 3개만 보이게 */}
      {splitRestaurants && <RestaurantList restaurants={splitRestaurants} />}

      <div className="p-4">
        <h2 className="font-semibold text-lg mb-3">
          대기 시간<span className="text-green-600"> 적은 맛집 추천 </span>
        </h2>
        <div className="grid grid-cols-2 gap-3 w-full">
          {studentRestaurant?.map((restaurant) => {
            return (
              <div className="bg-green-200 h-70 p-3 flex justify-center flex-col rounded rounded-lg">
                <h2 className="font-semibold text-lg pt-8">
                  {restaurant.name}
                </h2>

                <div className="flex gap-2">
                  <h2
                    className={`text-lg font-semibold ${
                      statusColorMap[restaurant.congestion]
                    }`}
                  >
                    {restaurant.congestion === '혼잡' ? 6 : 0}
                    <span
                      className={` text-sm ${
                        statusColorMap[restaurant.congestion]
                      }`}
                    >
                      분 대기
                    </span>
                  </h2>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-2 items-center ">
                      <img src="/people.svg" className="w-5 h-5" />
                      <span className="text-sm text-stone-500">
                        {restaurant.waitingPeople}
                      </span>
                    </div>

                    <div className="text-sm text-stone-500">
                      {restaurant.startAt + '~ ' + restaurant.endAt}
                    </div>
                    <button
                      onClick={() => handleClickConfusion(restaurant)}
                      className="flex justify-center items-center bg-black text-white text-sm px-3 py-1 rounded rounded-lg"
                    >
                      혼잡도 보기
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
