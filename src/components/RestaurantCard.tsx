import { useNavigate } from 'react-router-dom';
import type { RestaurantInfo } from '../type';
import { useEffect, useState } from 'react';
import baseApi from '../api/base';

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
  const alarmArray: number[] = JSON.parse(
    localStorage.getItem('alarm') || '[]'
  );

  const [isAlarm, setIsAlarm] = useState<boolean>(
    alarmArray.includes(restaurant.id)
  );
  // TODO: 혼잡도 계산 로직을 여기에
  type CrowdedStatus = '혼잡' | '보통' | '여유';
  const crowded: CrowdedStatus = '여유';
  const navigate = useNavigate();

  const handleClickConfusion = () => {
    const query = new URLSearchParams({
      congestion: restaurant.congestion,
      maxPeople: String(restaurant.maxPeople),
    }).toString();

    navigate(`/${restaurant.id}?${query}`);
  };

  const statusColorMap: Record<CrowdedStatus, string> = {
    혼잡: 'text-[#ff4848] border-[#ff4848]',
    여유: 'text-[#95ca14] border-[#95ca14]',
    보통: 'text-[#ffb02e] border-[#ffb02e]',
  };

  /**
   * 알람을 설정한다.
   * @param restaurantId
   * @returns
   */
  const postAlarm = async (restaurantId: number) => {
    try {
      const response = await baseApi.post(`/api/pins/${restaurantId}`, {
        headers: {
          Cookie: `${document.cookie}`,
        },
      });
      return response.data;
    } catch (error: any) {
      alert('알람 요청 중 오류 발생');
    }
  };

  /**
   * 알람을 해제한다.
   * @param restaurantId
   * @returns
   */
  const deleteAlarm = async (restaurantId: number) => {
    try {
      const response = await baseApi.delete(`/api/pins/${restaurantId}`, {
        headers: {
          Cookie: `${document.cookie}`,
        },
      });
      return response.data;
    } catch (error: any) {
      alert('알람 해제 중 오류 발생');
    }
  };

  /**
   * 알람 바뀔 때마다 요청을 보낸다.
   */
  useEffect(() => {
    if (isAlarm) {
      postAlarm(restaurant.id);

      /**
       * 브라우저에서 삭제
       */
      const prev = JSON.parse(localStorage.getItem('alarm') || '[]');
      const newAlarmArray = [...prev, restaurant.id];
      localStorage.setItem('alarm', JSON.stringify(newAlarmArray));
    } else {
      deleteAlarm(restaurant.id);

      /**
       * 브라우저에 저장
       */
      const prev = JSON.parse(localStorage.getItem('alarm') || '[]');
      const newAlarmArray = prev.filter(
        (prev: number) => prev !== restaurant.id
      );
      localStorage.setItem('alarm', JSON.stringify(newAlarmArray));
    }
  }, [isAlarm]);

  const handleClickAlarm = () => {
    setIsAlarm(!isAlarm);
  };

  return (
    <div className="flex flex-col p-4 rounded-xl border border-stone-200">
      <div className="flex flex-row justify-between gap-3">
        <div className="flex gap-2">
          <h2 className="font-semibold">{restaurant?.name || '이름 없음'}</h2>
          <button
            className={`text-xs border rounded-sm px-2 py-0.5 ${
              statusColorMap[restaurant.congestion]
            }`}
          >
            {crowded}
          </button>
        </div>
        <button onClick={handleClickAlarm} className="">
          {isAlarm ? (
            <img src="/bell-green.svg" className="w-5 h-5 cursor-pointer" />
          ) : (
            <img src="/bell-grey.svg" className="w-5 h-5 cursor-pointer" />
          )}
        </button>
      </div>
      <div className="flex gap-2">
        <h2
          className={`text-lg font-semibold ${
            statusColorMap[restaurant.congestion]
          }`}
        >
          23
          <span className={` text-sm ${statusColorMap[restaurant.congestion]}`}>
            분 대기
          </span>
        </h2>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <img src="/people.svg" className="w-5 h-5" />
          <span className="text-sm text-stone-400">
            {mockRestaurant.maxPeople}
          </span>
        </div>

        <button
          onClick={handleClickConfusion}
          className="flex justify-center cursor-pointer items-center bg-green-600 text-white text-sm px-3 py-1 rounded rounded-lg"
        >
          혼잡도 보기
        </button>
      </div>

      <h2></h2>
    </div>
  );
};

export default RestaurantCard;
