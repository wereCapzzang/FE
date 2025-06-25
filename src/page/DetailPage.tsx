import HeatMap from 'react-heatmap-grid';

const DetailPage = () => {
  return (
    <div>
      <HeatMap
        xLabels={['Mon', 'Tue', 'Wed']}
        yLabels={['Morning', 'Afternoon', 'Evening']}
        data={[
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ]}
      />
    </div>
  );
};

export default DetailPage;
