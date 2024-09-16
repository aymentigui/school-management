"use client"

import Image from 'next/image'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Janvier',
        income: 4000,
        expense: 2400,

    },
    {
        name: 'Février',
        income: 3000,
        expense: 1398,

    },
    {
        name: 'Mars',
        income: 2000,
        expense: 9800,

    },
    {
        name: 'Avril',
        income: 2780,
        expense: 3908,

    },
    {
        name: 'May',
        income: 1890,
        expense: 4800,

    },
    {
        name: 'Juin',
        income: 2390,
        expense: 3800,
    },
    {
        name: 'Juillet',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Aout',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Septembre',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Octobre',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Novembre',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Décembte',
        income: 3490,
        expense: 4300,
    },
];


const FinanceCharts = () => {
    return (
        <div className='bg-white rounded-xl h-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-xl'>Finance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20}></Image>
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
                    <XAxis tick={{fill:"#d1d5db"}} tickLine={false}  dataKey="name" tickMargin={10} />
                    <YAxis tick={{fill:"#d1d5db"}} tickLine={false}  tickMargin={10} />
                    <Tooltip />
                    <Legend align='center' verticalAlign='top' wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }} />
                    <Line type="monotone" dataKey="income" stroke="#FAE27C" strokeWidth={5} />
                    <Line type="monotone" dataKey="expense" stroke="#C3EBFA" strokeWidth={5}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )


}

export default FinanceCharts
