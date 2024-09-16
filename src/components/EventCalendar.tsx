"use client"
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events=[
    {
        id: 1,
        title: "Lorma sadlan lsalsdm",
        time:"12:00 PM - 2:00 PM",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been since "
    },
    {
        id: 3,
        title: "Lorma sadlan lsalsdm",
        time:"12:00 PM - 2:00 PM",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been since "
    },
    {
        id: 2,
        title: "Lorma sadlan lsalsdm",
        time:"12:00 PM - 2:00 PM",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been since "
    }
]

const poppins = Poppins({
    weight: ['400', '700'], // Définir les poids de la police que vous souhaitez
    subsets: ['latin'], // Charger le sous-ensemble latin
    style: ['normal', 'italic'], // Choisir les styles
  })
  
const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white p-4 rounded-xl'>
            <Calendar onChange={onChange} value={value} className={poppins.className}/>
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-semibold my-4'>Events</h1>
                <Image src="./moreDark.png" alt='' width={20} height={20}></Image>
            </div>
            <div className='flex flex-col gap-4'>
                {events.map(e=>(
                    <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-lamaSky even:border-lamaYellow' key={e.id}>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold text-gray-600'>{e.title}</h1>
                            <span className='text-gray-500 text-xs'>{e.time}</span>
                        </div>
                        <p className='mt-2 text-gray-500 text-sm'>{e.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar
