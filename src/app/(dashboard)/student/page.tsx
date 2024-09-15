'use client'

import Anonncemetn from '@/components/Anonncemetn'
import BigCalendar from '@/components/BigCalendar'
import EventCalendar from '@/components/EventCalendar'

const StudentPage = () => {
    return (
        <div className='p-4 flex flex-col gap-4 xl:flex-row'>
            {/** LEFT */}
            <div className="w-full xl:w-2/3">
                <div className='h-full bg-white p-4 rounded-md'>
                    <h1 className='font-bold text-xl'>Schedule (A4)</h1>
                    <BigCalendar></BigCalendar>
                </div>
            </div>
            {/** RIght */}
            <div className="w-full xl:w-1/3 flex flex-col gap-8">
                <EventCalendar></EventCalendar>
                <Anonncemetn></Anonncemetn>
            </div>
        </div>
    )
}

export default StudentPage
