import Anonncemetn from '@/components/Anonncemetn'
import AttendanceCharts from '@/components/AttendanceCharts'
import CountChart from '@/components/CountChats'
import EventCalendar from '@/components/EventCalendar'
import FinanceCharts from '@/components/FinanceCharts'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
    return (
        <div className='p-4 flex flex-col gap-4 md:flex-row'>
            {/** LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/** User Card */}
                <div className='flex gap-4 justify-between flex-wrap'>
                    <UserCard type='student'></UserCard>
                    <UserCard type='teacher'></UserCard>
                    <UserCard type='parent'></UserCard>
                    <UserCard type='staff'></UserCard>
                </div>
                {/** Middle CHart */}
                <div className='flex gap-4 flex-col lg:flex-row'>
                    {/** Count CHart */}
                    <div className='w-full lg:w-1/3 h-[450px]'>
                        <CountChart></CountChart>
                    </div>
                    {/** Attendance CHart */}
                    <div className='w-full lg:w-2/3 h-[450px]'>
                        <AttendanceCharts></AttendanceCharts>
                    </div>
                </div>
                {/** BOTTOM CHart */}
                <div className='w-full h-[500px]'>
                     <FinanceCharts></FinanceCharts>
                </div>
            </div>
            {/** RIght */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar></EventCalendar>
                <Anonncemetn></Anonncemetn>
            </div>
        </div>
    )
}

export default AdminPage
