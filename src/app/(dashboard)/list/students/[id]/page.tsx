"use client"
import Anonncemetn from '@/components/Anonncemetn'
import BigCalendar from '@/components/BigCalendar'
import PerformanceChat from '@/components/PerformanceChat'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SungleStudentPage = () => {
    return (
        <div className='flex-1 flex flex-col xl:flex-row gap-4'>
            {/** LEFT */}
            <div className='w-full xl:w-2/3'>
                {/* TOP */}
                <div className='flex flex-col lg:flex-row gap-4'>
                    {/* USER INFO CARD */}
                    <div className='bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4'>
                        <div className='w-1/3'>
                            <Image src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200" alt='' width={144} height={144} className='w-36 h-36 rounded-full object-cover'></Image>
                        </div>
                        <div className='w-2/3 flex flex-col justify-between gap-4'>
                            <h1 className='text-xl font-semibold'>Aymen TIgui</h1>
                            <p className='text-gray-500 text-xs'>Howa askldma laslsdi jsjisd  aèaèq dkspiw  mcopas òèomsd qmdlsapèèèd s asld aslls </p>
                            <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                                <div className='w-full md:w-1/3 flex items-center gap-2 lg:text-[10px] font-medium'>
                                    <Image src="/blood.png" alt='' width={14} height={14}></Image>
                                    <span>O+</span>
                                </div>
                                <div className='w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3 font-medium'>
                                    <Image src="/date.png" alt='' width={14} height={14}></Image>
                                    <span>07 2025</span>
                                </div>
                                <div className='w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3 font-medium'>
                                    <Image src="/mail.png" alt='' width={14} height={14}></Image>
                                    <span>Thitigui@gmail.com</span>
                                </div>
                                <div className='w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3 font-medium'>
                                    <Image src="/phone.png" alt='' width={14} height={14}></Image>
                                    <span>0578954552</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SMALL CARD */}
                    <div className='flex-1 flex gap-4 justify-between flex-wrap'>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleAttendance.png" alt='' width={24} height={24} className='w-6 h-6'></Image>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-xl font-semibold'>90%</h1>
                                <span className='text-sm text-gray-400'>Attendance</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleLesson.png" alt='' width={24} height={24} className='w-6 h-6'></Image>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-xl font-semibold'>15</h1>
                                <span className='text-sm text-gray-400'>Lessons</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleBranch.png" alt='' width={24} height={24} className='w-6 h-6'></Image>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-xl font-semibold'>6th</h1>
                                <span className='text-sm text-gray-400'>Grade</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleClass.png" alt='' width={24} height={24} className='w-6 h-6'></Image>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-xl font-semibold'>6A</h1>
                                <span className='text-sm text-gray-400'>Classes</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BOTTOM */}
                <div className='mt-4 bg-white rounded-md p-4 h-[80%]'>
                    <h1 className='font-semibold text-xl'>Students Schedule</h1>
                    <BigCalendar></BigCalendar>
                </div>
            </div>
            {/** RIGHT */}
            <div className='w-full xl:w-1/3 flex flex-col gap-4'>
                <div className='bg-white rounded-md p-4'>
                    <h1 className='text-xl font-semibold'>Shortcuts</h1>
                    <div className='mt-4 flex gap-4 flex-wrap text-xs text-blue-700'>
                        <Link className='p-3 rounded-md bg-lamaSky' href="/" >Students Lessons</Link>
                        <Link className='p-3 rounded-md bg-lamaPurple' href="/" >Students Teachers</Link>
                        <Link className='p-3 rounded-md bg-lamaYellow' href="/" >Students exams</Link>
                        <Link className='p-3 rounded-md bg-lamaSkyLight' href="/" >Students Assignments</Link>
                        <Link className='p-3 rounded-md bg-lamaPurpleLight  ' href="/" >Students Results</Link>
                    </div>
                </div>
                <PerformanceChat></PerformanceChat>
                <Anonncemetn></Anonncemetn>
            </div>
        </div>
    )
}

export default SungleStudentPage
