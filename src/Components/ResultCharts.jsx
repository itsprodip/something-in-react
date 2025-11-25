import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
 const result = [
   {
     id: 1,
     name: "Rahim",
     bangla: 78,
     english: 82,
     math: 75,
   },
   {
     id: 2,
     name: "Karim",
     bangla: 85,
     english: 74,
     math: 80,
   },
   {
     id: 3,
     name: "Afsana",
     bangla: 92,
     english: 88,
     math: 95,
   },
   {
     id: 4,
     name: "Hasan",
     bangla: 67,
     english: 70,
     math: 72,
   },
   {
     id: 5,
     name: "Mitu",
     bangla: 88,
     english: 90,
     math: 84,
   },
   {
     id: 6,
     name: "Salma",
     bangla: 74,
     english: 68,
     math: 70,
   },
   {
     id: 7,
     name: "Rafi",
     bangla: 95,
     english: 91,
     math: 89,
   },
   {
     id: 8,
     name: "Jannat",
     bangla: 80,
     english: 77,
     math: 73,
   },
   {
     id: 9,
     name: "Siam",
     bangla: 71,
     english: 75,
     math: 69,
   },
   {
     id: 10,
     name: "Nadia",
     bangla: 89,
     english: 84,
     math: 90,
   },
 ];

const ResultCharts = () => {
   
    return (
        <div>
            <LineChart className='m-20' width={500} height={300} data={result}>
                
            <Line dataKey={"bangla"} stroke='red'>
                
                <XAxis datakey={"name"}></XAxis>
                <YAxis dataKey={"bangla"}></YAxis>
            </Line>
        

            </LineChart>
        </div>
    );
};


export default ResultCharts;