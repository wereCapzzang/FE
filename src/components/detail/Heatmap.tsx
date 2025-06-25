const Heatmap = () => {
  //TODO 좌석 이미지 제공
  return (
    <div className="flex flex-col px-3 mt-5">
      <h3 className="font-semibold text-md">
        학생회관 정보 <span className="text-green-600 ">히트맵으로</span> 보기
      </h3>
      <p className="text-stone-500 text-xs">
        학생회관의 인원수, 좌석수를 분석해 좌석 현황을 제공해드립니다.
      </p>

      <div className="flex rounded-lg items-center w-full justify-center mt-3 ">
        <img src="/heatmap.png" alt="히트맵" width={250} height={80} />
      </div>
    </div>
  );
};

export default Heatmap;
