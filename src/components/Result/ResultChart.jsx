import React from 'react';
import { LineChart } from 'recharts';


const resultData = [
    {
      "student": 1,
      "physics": 78,
      "math": 85,
      "chemistry": 74
    },
    {
      "student": 2,
      "physics": 92,
      "math": 88,
      "chemistry": 81
    },
    {
      "student": 3,
      "physics": 65,
      "math": 70,
      "chemistry": 69
    },
    {
      "student": 4,
      "physics": 88,
      "math": 90,
      "chemistry": 86
    },
    {
      "student": 5,
      "physics": 73,
      "math": 75,
      "chemistry": 70
    },
    {
      "student": 6,
      "physics": 95,
      "math": 98,
      "chemistry": 94
    },
    {
      "student": 7,
      "physics": 80,
      "math": 82,
      "chemistry": 79
    },
    {
      "student": 8,
      "physics": 60,
      "math": 65,
      "chemistry": 63
    },
    {
      "student": 9,
      "physics": 85,
      "math": 89,
      "chemistry": 83
    },
    {
      "student": 10,
      "physics": 77,
      "math": 73,
      "chemistry": 76
    }
  ]
  




const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} data={resultData} />
        </div>
    );
};

export default ResultChart;