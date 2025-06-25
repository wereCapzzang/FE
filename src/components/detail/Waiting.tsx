const mockRestaurantDetail = {
  name: '학생회관 식당',
  startAt: '10:00',
  endAt: '20:00',
  breakStartAt: '14:00',
  breakEndAt: '15:00',
  crowed: [
    {
      hour: 12,
      category: '혼잡',
    },
    {
      hour: 13,
      category: '혼잡',
    },
    {
      hour: 14,
      category: '보통',
    },
    {
      hour: 15,
      category: '여유',
    },
  ],
};

type CrowdedStatus = '혼잡' | '보통' | '여유';

interface WaitingProps {
  maxPeople: number;
  congestion: CrowdedStatus;
  waitTime: number;
}

const Waiting = ({ maxPeople, congestion, waitTime }: WaitingProps) => {
  const statusColorMap: Record<CrowdedStatus, string> = {
    혼잡: 'text-[#ff4848]',
    여유: 'text-[#95ca14]',
    보통: 'text-[#ffb02e]',
  };

  const renderImageByCongestion = (congestion: CrowdedStatus) => {
    switch (congestion) {
      case '보통':
        return (
          <img src="/common.svg" alt="보통 이미지" className="w-32 h-32" />
        );
      case '여유':
        return <img src="/chill.svg" alt="여유 이미지" className="w-32 h-32" />;
      case '혼잡':
      default:
        return (
          <img src="/confuse.svg" alt="혼잡 이미지" className="w-32 h-32" />
        );
    }
  };

  return (
    <div className="flex flex-col px-4 py-2">
      {/* 상단 제목과 아이콘 */}

      <h2 className="text-md font-semibold">대기 현황</h2>

      {/* 캐릭터 이미지 */}
      <div className="w-full flex justify-center">
        <div className="w-48 h-48 rounded-full bg-[#fff4f3] flex items-center justify-center">
          {renderImageByCongestion(congestion)}
        </div>
      </div>

      {/* 혼잡도 정보 카드 */}
      <div className="mt-8 border border-stone-200 rounded-xl py-4 px-6 flex justify-between text-center text-sm">
        <div className="flex-1">
          <p className="text-stone-400 mb-1">현재 혼잡도</p>
          <p className={`font-bold ${statusColorMap[congestion]}`}>
            {congestion}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-stone-400 mb-1">대기 시간</p>
          <p className="font-bold text-black">{waitTime}분</p>
        </div>
        <div className="flex-1">
          <p className="text-stone-400 mb-1">현재 대기 인원</p>
          <p className="font-bold text-black">{maxPeople}명</p>
        </div>
      </div>
    </div>
  );
};

export default Waiting;
