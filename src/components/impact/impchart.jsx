import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ImpactChart = ({ data }) => {
  console.log("📊 Data received by ImpactChart:", data);

  if (!data || data.length === 0) {
    return <p>Chart: No data</p>;
  }

  const chartData = {
    labels: data.map(item => item.type),
    datasets: [
      {
        label: 'Impact Count',
        data: data.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Impact by Category' }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default ImpactChart;
