import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData = [
    {
      "student": 1,
      "physics": 78,
      "math": 35,
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
      "chemistry": 89
    },
    {
      "student": 4,
      "physics": 88,
      "math": 90,
      "chemistry": 86
    },
    {
      "student": 5,
      "physics": 53,
      "math": 75,
      "chemistry": 70
    },
    {
      "student": 6,
      "physics": 75,
      "math": 98,
      "chemistry": 94
    },
    {
      "student": 7,
      "physics": 80,
      "math": 82,
      "chemistry": 39
    },
    {
      "student": 8,
      "physics": 40,
      "math": 55,
      "chemistry": 73
    },
    {
      "student": 9,
      "physics": 85,
      "math": 49,
      "chemistry": 83
    },
    {
      "student": 10,
      "physics": 47,
      "math": 73,
      "chemistry": 96
    }
  ]
  




const ResultChart = () => {
    return (
        <div>
             <h1 className='text-5xl  px-5 py-14' >Using Rechart  Loading data:</h1>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey="student" />
                <YAxis/>
                <Line  dataKey="math" stroke='red' />
                <Line  dataKey="physics" stroke='blue' />
                <Line  dataKey="chemistry" stroke='orange' />
                
               
            </LineChart>
        </div>
    );
};

export default ResultChart;