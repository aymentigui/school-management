import Image from 'next/image'
import React from 'react'

const anonncement = [
    {
        id: 1,
        title: "Lorma sadlan lsalsdm",
        date: "2024/02/15",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been since "
    },
    {
        id: 2,
        title: "Lorma sadlan lsalsdm",
        date: "2024/02/15",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been since "
    },
    {
        id: 3,
        title: "Lorma sadlan lsalsdm",
        date: "2024/02/15",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been since "
    }
]

const Anonncemetn = () => {
    return (
        <div className='bg-white p-4 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-bold my-4'>Annoncement</h1>
                <span className='text-xs text-gray-400'>View all</span>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                {anonncement.map(a => (
                    <div className='odd:bg-lamaSkyLight even:bg-lamaYellowLight rounded-md p-4' key={a.id}>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold'>{a.title}</h1>
                            <span className='text-xs text-gray-400 bg-white p-1 rounded-md '>{a.date}</span>
                        </div>
                        <p className='text-sm text-gray-400 mt-2'>{a.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Anonncemetn
