import type { RestaurantInfo } from '../type';

interface RestaurantCardProps {
  restaurant: RestaurantInfo;
}

const mockRestaurant = {
  id: 1,
  name: '학생회관 식당',
  startAt: '10:00',
  endAt: '20:00',
  breakStartAt: '14:00',
  breakEndAt: '15:00',
  maxPeople: '200',
  congenstion: '여유',
};

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  // TODO: 혼잡도 계산 로직을 여기에
  type CrowdedStatus = '혼잡' | '보통' | '여유';
  const crowded: CrowdedStatus = '여유';

  const statusColorMap: Record<CrowdedStatus, string> = {
    혼잡: 'text-[#ff4848] border-[#ff4848]',
    여유: 'text-[#95ca14] border-[#95ca14]',
    보통: 'text-[#ffb02e] border-[#ffb02e]',
  };

  const isAlarm = false;

  return (
    <div className="flex flex-col p-4 rounded-xl border border-stone-200">
      <div className="flex flex-row justify-between gap-3">
        <div className="flex gap-2">
          <h2 className="font-semibold">{mockRestaurant.name}</h2>
          <button
            className={`text-xs border rounded-sm px-2 py-0.5 ${statusColorMap[crowded]}`}
          >
            {crowded}
          </button>
        </div>
        <button className="">
          {isAlarm ? (
            <img src="/bell-green.svg" className="w-5 h-5" />
          ) : (
            <img src="/bell-grey.svg" className="w-5 h-5" />
          )}
        </button>
      </div>
      <div className="flex gap-2">
        <h2 className={`text-lg font-semibold ${statusColorMap[crowded]}`}>
          23{' '}
          <span className={` text-sm ${statusColorMap[crowded]}`}>분 대기</span>
        </h2>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <img src="/people.svg" className="w-5 h-5" />
          <span className="text-sm text-stone-400">
            {mockRestaurant.maxPeople}
          </span>
        </div>

        <button className="flex justify-center items-center bg-black text-white text-sm px-3 py-1 rounded rounded-lg">
          혼잡도 보러 가기
        </button>
      </div>

      <h2></h2>
    </div>
  );
};

export default RestaurantCard;
