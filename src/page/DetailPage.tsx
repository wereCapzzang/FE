import { useNavigate } from 'react-router-dom';
import Waiting from '../components/detail/Waiting';
import Heatmap from '../components/detail/Heatmap';
import Chart from '../components/detail/Chart';

const DetailPage = () => {
  const navigate = useNavigate();
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

      <Waiting />

      <Heatmap />

      <Chart />

      <div className="px-4 mb-5">
        <p className="text-sm text-stone-400">
          지금 10시에 비해 대기 시간이 <span className="text-red-600">3배</span>
          걸려요
        </p>
        <p className="text-sm text-stone-400">
          이 가게의 12시의 평균 대기 시간은{' '}
          <span className="text-red-600">20분</span>이에요
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
