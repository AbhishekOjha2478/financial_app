import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RevenueForecastGraph = ({ data }) => {
  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
    </LineChart>
  );
};

const Graph = () => {
  const [timeframe, setTimeframe] = useState('all');

  const allData = [
    { timestamp: '2020-10-04', revenue: 1000 },
    { timestamp: '2021-10-02', revenue: 1200 },
    { timestamp: '2022-04-01', revenue: 1500 },
    { timestamp: '2022-11-06', revenue: 1100 },
    { timestamp: '2023-05-02', revenue: 2200 },
    { timestamp: '2023-07-24', revenue: 1200 },
    { timestamp: '2023-08-17', revenue: 1700 },
    { timestamp: '2023-08-20', revenue: 1000 },   
    { timestamp: '2023-08-23', revenue: 2600 }   
  ];

  const filterDataBasedOnTimeframe = (timeframe, allData) => {
    const today = new Date();
    const cutoffDate = new Date();
  
    switch (timeframe) {
      case 'week':
        cutoffDate.setDate(today.getDate() - 7);
        break;
      case 'month':
        cutoffDate.setMonth(today.getMonth() - 1);
        break;
      case 'year':
        cutoffDate.setFullYear(today.getFullYear() - 1);
        break;
      default:
        // 'all' timeframe
        cutoffDate.setTime(0); // Set to an earlier date (e.g., 1970) to include all data
        break;
    }
  
    const filteredData = allData.filter((dataPoint) => new Date(dataPoint.timestamp) > cutoffDate);
    return filteredData;
  };


  const handleTimeframeChange = (selectedTimeframe) => {
    setTimeframe(selectedTimeframe);
  };

  const filteredData = filterDataBasedOnTimeframe(timeframe,allData);

  return (
    <div className="Graph">
      <h1>Revenue Forecast Graph</h1>
      <div>
        <button onClick={() => handleTimeframeChange('week')}>Week</button>
        <button onClick={() => handleTimeframeChange('month')}>Month</button>
        <button onClick={() => handleTimeframeChange('year')}>Year</button>
        <button onClick={() => handleTimeframeChange('all')}>All</button>
      </div>
      <RevenueForecastGraph data={filteredData} />
    </div>
  );
};

export default Graph;
