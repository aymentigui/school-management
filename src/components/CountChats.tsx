"use client"
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',  //bach maybanch m3a background
  },
  {
    name: 'Girls',
    count: 56,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 50,
    fill: '#C3EBFA',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CountChart = () => {

  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/** Title */}
      <div className='flex justify-between items-cente'>
        <h1 className='text-lg font-semibold'>Student</h1>
        <Image src="./moreDark.png" alt='' width={20} height={20} />
      </div>
      {/** CHART */}
      <div className='w-full h-[75%] relative'>
        <ResponsiveContainer>
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="./maleFemale.png" alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      </div>
      {/** BOTTOM */}
      <div className='flex justify-center gap-16'>
        <div className='flex flex-col gap-1'>
           <div className='w-5 h-5 bg-lamaSky rounded-full'/>
           <h1 className='font-bold'>1568</h1>
           <h2 className='text-xs text-gray-400'>Boys</h2>
        </div>
        <div className='flex flex-col gap-1'>
           <div className='w-5 h-5 bg-lamaYellow rounded-full'/>
           <h1 className='font-bold'>1568</h1>
           <h2 className='text-xs text-gray-400'>Girls</h2>
        </div>
      </div>
    </div>
  );
}

export default CountChart