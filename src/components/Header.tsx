import { useEffect, useState } from 'react';

const Header = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const phrases = ['배고플 땐 밥톨', '세종대 웨이팅 없는 맛집 찾기'];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <header className="w-full p-4 h-10 flex gap-3 items-center">
        <img src="/rice.png" alt="logo" className="w-6 h-6" />
        <h3 className="text-lg text-green-600 font-semibold">밥톨</h3>
      </header>

      <div className="w-full h-40 flex justify-center items-center gap-5">
        <h2
          className={`font-bold text-[20px] transition-opacity duration-500 ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {phrases[index].includes('밥톨') ? (
            <>
              배고플 땐{' '}
              <span className="text-green-600 animate-bounce">밥톨</span>
            </>
          ) : (
            <>
              세종대{' '}
              <span className="text-green-600 font-semibold">웨이팅 없는</span>{' '}
              맛집 찾기
            </>
          )}
        </h2>
        <img src="/rice.svg" alt="logo" className="w-20 h-20" />
      </div>
    </>
  );
};

export default Header;
