import React from 'react'
import { Bar } from 'react-chartjs-2';
const Chart = ({ data, labels }) => {
    const chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Bar Chart',
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.6)', // Specify the bar color
            borderColor: 'rgba(54, 162, 235, 1)', // Specify the border color
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className=" flex justify-center">
        <h1> hello world</h1>
 <Bar data={chartData} />
    </div>
   
  )
}

export default Chart