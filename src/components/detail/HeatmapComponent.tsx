interface StudentHeatmapComponentProps {
  waitingPeople: number;
  fullPeople: number;
}

export function StudentHeatmapComponent({
  waitingPeople,
  fullPeople,
}: StudentHeatmapComponentProps) {
  const progress = (waitingPeople / fullPeople) * 100;
  return (
    <div className="p-4">
      <h3 className="text-md font-semibold mb-4">
        학생회관 좌석 정보 <span className="text-green-600">히트맵</span>
      </h3>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 w-[80%] h-auto grid-rows-2 gap-2 p-5 border-l border-b border-gray-400">
          <div className="bg-[#FFF4F3] w-30 h-20 rounded-lg text-white font-semibold flex justify-center items-center text-[20px]"></div>
          <div className="bg-[#FFE4E1] w-30 h-20 rounded-lg  text-blue-400 font-semibold flex justify-center items-center text-[20px]"></div>
          <div className="bg-[#FF6D6D] w-30 h-20 rounded-lg text-blue-400 font-semibold flex justify-center items-center text-[20px]"></div>
          <div className="bg-[#F5F5F5] w-30 h-20 rounded-lg text-white font-semibold flex justify-center items-center text-[20px]"></div>
        </div>
      </div>

      <div className="flex w-full justify-center h-15">
        <img src="/door.svg" width={30} height={40} />
      </div>

      <div className="w-full flex items-center justify-center max-w-xs mx-auto mt-4">
        <div className="w-[95%] h-4 bg-stone-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FF6D6D] rounded-full transition-all duration-200 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className="text-[#FF6D6D]  font-bold flex justify-end mt-2">
        {waitingPeople} / {fullPeople}석
      </p>

      <div className="w-full  p-5 bg-red-200 rounded rounded-lg flex flex-row mt-2 justify-center gap-10">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">아지오</p>
          <p>10/39</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">나루또</p>
          <p>11/39</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">김밥천국</p>
          <p>
            <span className="text-red-600">18</span>/39
          </p>
        </div>
      </div>
    </div>
  );
}

export function GBHeatmapComponent({
  waitingPeople,
  fullPeople,
}: StudentHeatmapComponentProps) {
  const progress = (waitingPeople / fullPeople) * 100;

  return (
    <div className="p-4">
      <h3 className="text-md font-semibold mb-4">
        계절밥상 좌석 정보 <span className="text-green-600">히트맵</span>
      </h3>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 w-[80%] h-auto grid-rows-2 gap-2 p-5 border-l border-b border-gray-400">
          <div className="bg-[#FFF4F3] w-30 h-20 rounded-lg text-white font-semibold flex justify-center items-center text-[20px]"></div>
          <div className="bg-[#F5F5F5] w-30 h-20 rounded-lg text-white font-semibold flex justify-center items-center text-[20px]"></div>
          <div className="bg-[#FFE4E1] w-30 h-20 rounded-lg  text-blue-400 font-semibold flex justify-center items-center text-[20px]"></div>
          <div className="bg-[#FF6D6D] w-30 h-20 rounded-lg text-blue-400 font-semibold flex justify-center items-center text-[20px]"></div>
        </div>
      </div>

      <div className="flex w-full justify-center h-20">
        <img src="/door.svg" width={30} height={40} />
      </div>

      <div className="w-full flex items-center justify-center max-w-xs mx-auto mt-4">
        <div className="w-[95%] h-4 bg-stone-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FF6D6D] rounded-full transition-all duration-200 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className="text-[#FF6D6D]  font-bold flex justify-end mt-2">
        {waitingPeople} / {fullPeople}석
      </p>
    </div>
  );
}

export function JGHeatmapComponent({
  waitingPeople,
  fullPeople,
}: StudentHeatmapComponentProps) {
  const progress = (waitingPeople / fullPeople) * 100;

  return (
    <div className="p-4">
      <h3 className="text-md font-semibold mb-4">
        진관홀 좌석 정보 <span className="text-green-600">히트맵</span>
      </h3>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 w-[80%] h-auto grid-rows-2 gap-2 p-5 border-l border-b border-gray-400">
          <div className="bg-[#FFF4F3] w-30 h-20 rounded-lg text-white font-semibold flex justify-center items-center text-[20px]"></div>
          <div className="bg-[#FF6D6D] w-30 h-20 rounded-lg text-blue-400 font-semibold flex justify-center items-center text-[20px]"></div>
          <div className="bg-[#F5F5F5] w-30 h-20 rounded-lg text-white font-semibold flex justify-center items-center text-[20px]"></div>
          <div className="bg-[#FFE4E1] w-30 h-20 rounded-lg  text-blue-400 font-semibold flex justify-center items-center text-[20px]"></div>
        </div>
      </div>

      <div className="flex w-full justify-center h-20">
        <img src="/door.svg" width={30} height={40} />
      </div>

      <div className="w-full flex items-center justify-center max-w-xs mx-auto mt-4">
        <div className="w-[95%] h-4 bg-stone-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FF6D6D] rounded-full transition-all duration-200 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className="text-[#FF6D6D]  font-bold flex justify-end mt-2">
        {waitingPeople} / {fullPeople}석
      </p>
    </div>
  );
}
