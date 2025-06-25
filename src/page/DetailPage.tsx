import { useNavigate, useSearchParams } from 'react-router-dom';
import Waiting from '../components/detail/Waiting';
import Chart from '../components/detail/Chart';

import useGetRestaurant from '../hooks/useGetRestaurant';
import {
  StudentHeatmapComponent,
  GBHeatmapComponent,
  JGHeatmapComponent,
} from '../components/detail/HeatmapComponent';

const DetailPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');
  const restaurantId = id ? parseInt(id, 10) : 1;

  const congestionParam = searchParams.get('congestion');
  const maxPeople = Number(searchParams.get('maxPeople') || 0);
  const waitingPeople = Number(searchParams.get('waitingPeople'));

  // 혼잡도 타입 처리
  type CrowdedStatus = '혼잡' | '보통' | '여유';
  const congestion: CrowdedStatus =
    congestionParam === '혼잡' ||
    congestionParam === '보통' ||
    congestionParam === '여유'
      ? congestionParam
      : '보통';

  const waitTime = Math.abs((waitingPeople - 100) / 2);

  const { restaurant, loading, error } = useGetRestaurant(restaurantId);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{String(error)}</div>;
  if (!restaurant) return <div>레스토랑 정보 없음</div>;

  //API로 조회하기
  return (
    <div className="max-w-screen-sm min-h-screen flex flex-col">
      <header className="flex justify-between">
        <div className="flex p-3 gap-3 items-center ">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <img src="/arrow.svg" width={20} height={20} />
            <h2 className="font-semibold">{restaurant.name}</h2>
          </button>
        </div>
      </header>

      <Waiting
        waitingPeople={waitingPeople}
        congestion={congestion}
        waitTime={waitTime}
      />

      {restaurant.name === '학생회관' && (
        <StudentHeatmapComponent
          waitingPeople={waitingPeople}
          fullPeople={maxPeople}
        />
      )}

      {restaurant.name === '계절밥상' && (
        <GBHeatmapComponent
          waitingPeople={waitingPeople}
          fullPeople={maxPeople}
        />
      )}

      {restaurant.name === '진관홀' && (
        <JGHeatmapComponent
          waitingPeople={waitingPeople}
          fullPeople={maxPeople}
        />
      )}

      <Chart name={restaurant.name} />

      <div className="px-4 mb-5"></div>
    </div>
  );
};

export default DetailPage;
