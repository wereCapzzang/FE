import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
    ],
    datasets: [
      {
        label: '대기 시간(분)',
        data: [2, 3, 5, 10, 17, 15, 12, 10, 5, 9, 14, 8],
        fill: true,
        borderColor: '#6AC1E8',
        backgroundColor: 'rgba(85, 184, 255, 0.2)',
        tension: 0.4,
        pointRadius: 2,
        borderWidth: 1,
        pointBackgroundColor: '#6AC1E8',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 3,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col px-3 mt-10 mb-3">
      <h2 className="text-md font-semibold mb-2">시간대별 대기 시간</h2>
      <div className="flex w-full flex-col h-55 rounded-xl border border-gray-300 p-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
