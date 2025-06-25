import { useNavigate, useLocation } from 'react-router-dom';
import Waiting from '../components/detail/Waiting';
import Heatmap from '../components/detail/Heatmap';
import Chart from '../components/detail/Chart';
import { useParams } from 'react-router-dom';
import useGetRestaurant from '../hooks/useGetRestaurant';

type CrowdedStatus = '혼잡' | '보통' | '여유';

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const restaurantId = parseInt(id || '', 10);
  const { restaurant, loading, error } = useGetRestaurant(restaurantId);

  const location = useLocation();
  //TODO: maxPeople 저장 후 파람으로 넘기기 List클릭시
  const queryParams = new URLSearchParams(location.search);
  const congestionParam = queryParams.get('congestion');
  const congestion: CrowdedStatus =
    congestionParam === '혼잡' ||
    congestionParam === '보통' ||
    congestionParam === '여유'
      ? congestionParam
      : '보통';
  const maxPeople = Number(queryParams.get('maxPeople') || 0);
  const waitTime = 200;

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{String(error)}</div>;
  if (!restaurant) return <div>레스토랑 정보 없음</div>;

  //API로 조회하기
  const name = '학생회관 식당';
  return (
    <div className="max-w-screen-sm min-h-screen flex flex-col">
      <header className="flex justify-between">
        <div className="flex p-3 gap-3 items-center ">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <img src="/arrow.svg" width={20} height={20} />
            <h2 className="font-semibold">{name}</h2>
          </button>
        </div>
      </header>

      <Waiting
        maxPeople={maxPeople}
        congestion={congestion}
        waitTime={waitTime}
      />

      <Heatmap />

      <Chart />

      <div className="px-4 mb-5">
        <p className="text-sm text-stone-400">
          지금 10시에 비해 대기 시간이 <span className="text-red-600">3배</span>
          걸려요
        </p>
        <p className="text-sm text-stone-400">
          이 식당의 12의 평균 대기 시간은
          <span className="text-red-600"> 20분</span>이에요
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
