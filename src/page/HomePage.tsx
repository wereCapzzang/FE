import Header from '../components/Header';
import RestaurantList from '../components/RestaurantList';

function HomePage() {
  return (
    <div className="max-w-screen-sm min-h-screen flex flex-col">
      <div className="h-50 w-full bg-green-200 rounded-b-xl flex flex-col items-center">
        <Header />
      </div>
      <div className="flex justify-between p-4">
        <h2 className="font-semibold text-lg">
          교내 식당 <span className="text-green-600">혼잡도 </span>
        </h2>

        <button className="text-green-600 bg-white cursor-pointer text-sm">
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
      <RestaurantList />
    </div>
  );
}

export default HomePage;
