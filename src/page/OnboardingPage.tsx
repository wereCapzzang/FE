import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import baseApi from '../api/base';

const OnboardingPage = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/main');
  };

  const getToken = async () => {
    try {
      const response = await baseApi.get(`/api/get-token`);

      localStorage.setItem('token', JSON.stringify(response.data));
      return response.data;
    } catch (error: any) {
      alert('알람 해제 중 오류 발생');
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div className="max-w-screen-sm  gap-10 flex-col min-h-screen items-center justify-center flex flex-col">
      <h1 className="text-xl flex items-center justify-center font-semibold">
        배고파,, 빠르게 먹을 수 있는 <br />
        교내 식당 없을까?
      </h1>
      <img src="/rice.svg" width={100} height={150} />

      <button
        onClick={handleClickButton}
        className="cursor-pointer text-green-600 w-60 h-10 text-white rounded rounded-lg font-bold bg-green-600"
      >
        시작하기
      </button>
    </div>
  );
};

export default OnboardingPage;
