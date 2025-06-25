import { useNavigate } from 'react-router-dom';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/');
  };

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
