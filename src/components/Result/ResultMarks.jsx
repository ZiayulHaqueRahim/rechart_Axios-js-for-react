import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const ResultMarks = ({marksPromise}) => {

    const marksData = use(marksPromise);
    const processedData = marksData.data;
    console.log(processedData);
    
    //data process
    const chartData = processedData.map(studentMark =>{
            const student = {
                id: studentMark.student,
                physicsMark: studentMark.physics,
                chemistryMark: studentMark.chemistry,
                mathMark: studentMark.math,
            }
            return student;
    })
    
    console.log(chartData);
    
    return (
        <div>
            <h1 className='text-5xl text-center px-5 py-14' >Using Axios JS Loading data:</h1>
            <BarChart  width={700} height={500} data={chartData} >
                <XAxis dataKey='id'></XAxis>
                <YAxis/>
                <Bar dataKey='physicsMark' fill='red' />
                <Bar dataKey='chemistryMark' fill='green' />
                <Bar dataKey='mathMark' fill='black' />
                    <Tooltip cursor={false} />
                    <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
                    <Tooltip cursor={<customElements />} />
                </BarChart>
        </div>
    );
};

export default ResultMarks;