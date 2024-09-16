"use client"
import Image from 'next/image';
import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 92, fill: "#C3EBFA" },
    { name: 'Group B', value: 8, fill: "#CFCEFF" },
];


const PerformanceChat = () => {
    return (
        <div className='bg-white p-4 rounded-md h-80 relative'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-xl'>Performance</h1>
                <Image src="./moreDark.png" alt='' width={16} height={16}></Image>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        fill="#8884d8"
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className='absolute top-1/2 left-1/2 transform text-center -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-3xl font-bold'>9.2</h1>
                <p className='text-xs text-gray-400'>Of 10 max LTS</p>
            </div>
            <h2 className='absolute font-medium bottom-16 left-0 right-0 m-auto text-center'>1st Semestre and 2nd </h2>
        </div>
    )
}


export default PerformanceChat
