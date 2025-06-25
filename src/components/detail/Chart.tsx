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

interface ChartProps {
  name: string;
}

const Chart = ({ name }: ChartProps) => {
  const Studentdata = {
    labels: [
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
        data: [20, 30, 100, 170, 150, 50, 0, 0, 50, 90, 140, 80],
        fill: true,
        borderColor: '#6AC1E8',
        backgroundColor: 'rgba(85, 184, 255, 0.2)',
        tension: 0.4,
        pointRadius: 4,
        borderWidth: 2,
        pointBackgroundColor: '#6AC1E8',
      },
    ],
  };

  const GBdata = {
    labels: [
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
        data: [20, 30, 30, 80, 150, 130, 50, 80, 30, 50, 90, 140, 80],
        fill: true,
        borderColor: '#6AC1E8',
        backgroundColor: 'rgba(85, 184, 255, 0.2)',
        tension: 0.4,
        pointRadius: 4,
        borderWidth: 2,
        pointBackgroundColor: '#6AC1E8',
      },
    ],
  };

  const JGdata = {
    labels: [
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
        data: [10, 20, 30, 160, 120, 80, 50, 80, 30, 50, 70, 130, 80],
        fill: true,
        borderColor: '#6AC1E8',
        backgroundColor: 'rgba(85, 184, 255, 0.2)',
        tension: 0.4,
        pointRadius: 4,
        borderWidth: 2,
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
        {name === '학생회관' && <Line data={Studentdata} options={options} />}
        {name === '계절밥상' && <Line data={GBdata} options={options} />}
        {name === '진관홀' && <Line data={JGdata} options={options} />}
      </div>
    </div>
  );
};

export default Chart;
