import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, examsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Exam = {
    id: number,
    subject: string,
    class: string,
    teacher: string,
    date: string,
}

const columns = [
    {
        header: "Subject Name", accessor: "name"
    },
    {
        header: "Class", accessor: "class",
    },
    {
        header: "Teacher", accessor: "teacher", className: "hidden md:table-cell"
    },
    {
        header: "Date", accessor: "date", className: "hidden md:table-cell"
    },
    {
        header: "Actions", accessor: "actions"
    }
]

const ExamList = () => {

    const renderRow = (item: Exam) => {
        return <tr key={item.id} className='border-b- border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='flex gap-4 p-4 items-center'>{item.subject}</td>
            <td >{item.class}</td>
            <td className='hidden md:table-cell'>{item.teacher}</td>
            <td className='hidden md:table-cell'>{item.date}</td>
            <td>
                <div className='flex items-center gap-2'>                    
                {
                    role === "admin" &&
                    <>
                        <FormModal table='exam' type='delete' id={item.id} data={item}></FormModal>
                        <FormModal table='exam' type='update' id={item.id}></FormModal>
                    </>
                }
                </div>
            </td>
        </tr>
    }

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/** TOP */}
            <div className='flex items-center justify-between'>
                <h1 className='hidden md:block text-lg font-semibold'>ALL Exams</h1>
                <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                    <TableSearch></TableSearch>
                    <div className='flex items-center gap-4 slef-end'>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image src="/filter.png" alt='' width={14} height={14}></Image>
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image src="/sort.png" alt='' width={14} height={14}></Image>
                        </button>
                        {
                            role === "admin" &&
                            <FormModal table='exam' type='create'></FormModal>
                        }
                    </div>
                </div>
            </div>
            {/** LIST */}
            <div>
                <Table columns={columns} renderRow={renderRow} data={examsData}></Table>
            </div>
            {/** PAGINATION */}
            <Pagination></Pagination>
        </div>
    )
}

export default ExamList
