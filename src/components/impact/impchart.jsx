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
import React from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ImpactChart = ({ data }) => {
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
        borderRadius: 6,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,  
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          }
        }
      },
      title: {
        display: true,
        text: 'Impact by Category',
        font: {
          size: 18,
        }
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          }
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
          }
        }
      }
    }
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '1000px',
      margin: '0 auto',
      height: '600px',
      padding: '1rem'
    }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ImpactChart;
