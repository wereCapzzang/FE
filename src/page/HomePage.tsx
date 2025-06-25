import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import RestaurantList from '../components/RestaurantList';
import useGetRestaurantList from '../hooks/useGetRestaurantList';

function HomePage() {
  const { restaurants, error, loading } = useGetRestaurantList();

  const navigate = useNavigate();
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{String(error)}</div>;
  if (!restaurants) return <div>레스토랑 리스트 없음</div>;

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

  const isAlarm = false;

  return (
    <div className="max-w-screen-sm min-h-screen flex flex-col">
      <div className="h-50 w-full bg-green-200 rounded-b-xl flex flex-col items-center">
        <Header />
      </div>
      <div className="flex justify-between p-4">
        <h2 className="font-semibold text-lg">
          교내 식당 <span className="text-green-600">혼잡도 </span>
        </h2>

        <button
          onClick={handleClickMore}
          className="text-green-600 bg-white cursor-pointer text-sm"
        >
          더 보기
        </button>
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

      {/* TODO: 3개만 보이게 */}
      <RestaurantList restaurants={splitRestaurants} />

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
                    className={`text-lg font-semibold ${statusColorMap['보통']}`}
                  >
                    23
                    <span className={` text-sm ${statusColorMap['보통']}`}>
                      분 대기
                    </span>
                  </h2>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-2 items-center ">
                      <img src="/people.svg" className="w-5 h-5" />
                      <span className="text-sm text-stone-500">200</span>
                    </div>

                    <div className="text-sm text-stone-500">
                      {restaurant.startAt + '~ ' + restaurant.endAt}
                    </div>
                    <button className="flex justify-center items-center bg-black text-white text-sm px-3 py-1 rounded rounded-lg">
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
