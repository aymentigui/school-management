"use client"

import Image from 'next/image';
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: 'Lundi',
        present: 4000,
        absent: 100,
    },
    {
        name: 'Mardi',
        present: 4100,
        absent: 0,
    },
    {
        name: 'Mercredi',
        present: 3900,
        absent: 200,
    },
    {
        name: 'Jeudi',
        present: 3010,
        absent: 1000,
    },
    {
        name: 'Vendredi',
        present: 2010,
        absent: 2000,
    },
];


const AttendanceCharts = () => {
    return (
        <div className='bg-white rounded-lg h-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart width={500} height={300} data={data} barSize={20}  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
                    <XAxis dataKey="name" tick={{fill:"#d1d5db"}} tickLine={false} />
                    <YAxis  tickLine={false} tick={{fill:"#d1d5db"}}/>
                    <Tooltip />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Bar radius={[10,10,0,0]} legendType='circle' dataKey="present" fill="#FAE27C" />
                    <Bar  radius={[10,10,0,0]} legendType='circle' dataKey="absent" fill="#C3EBFA" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceCharts
