// import { Line } from 'react-chartjs-2';

// const stressLabels = {
//   0: 'Muy Bajo',
//   20: 'Bajo',
//   40: 'Medio',
//   60: 'Alto',
//   80: 'Muy Alto',
// };

// // Datos simulados para estrés
// var data = {
//   estres: [0, 56, 20, 36, 65, 40, 30, 10, 25, 30, 12, 60],
  
// };

// var meses = [
//   'Lunes',
//   'Martes',
//   'Miercoles',
//   'Jueves',
//   'Viernes',
//   'Sabado',
//   'Domingo',

// ];

// var midata = {
//   labels: meses,
//   datasets: [
//     {
//       label: 'Estrés',
//       data: data.estres,
//       tension: 0.5,
//       fill: true,
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       pointRadius: 5,
//       pointBorderColor: 'rgba(255, 99, 132)',
//       pointBackgroundColor: 'rgba(255, 99, 132)',
//     },
//   ],
// };

// var misoptions = {
//   scales: {
//     y: {
//       beginAtZero: true,
//       ticks: {
//         callback: (value) => stressLabels[value], // Utiliza el mapeo de etiquetas
//       },
//     },
//     x: {
//       ticks: { color: 'rgb(255, 99, 132)' },
//     },
//   },
// };

// export default function LinesChart() {
//   return <Line data={midata} options={misoptions} />;
// }
import { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';

const LinesChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetchStressData();
  }, []);

  const asyncFetchStressData = () => {
    // Datos de estrés con etiquetas
    const stressData = [
      { timePeriod: '2023-01-01', stressLevel: 'low level' },
      { timePeriod: '2023-01-02', stressLevel: 'mid level' },
      { timePeriod: '2023-01-03', stressLevel: 'high level' },
      // Agrega más datos aquí
    ];

    setData(stressData);
  };

  const config = {
    data,
    xField: 'timePeriod',
    yField: 'stressLevel', // El eje Y ahora representa las etiquetas de estrés
    xAxis: {
      title: { text: 'Fecha' },
    },
    yAxis: {
      title: { text: 'Stress Level' },
    },
  };

  return <Area {...config} />;
};

export default LinesChart;
