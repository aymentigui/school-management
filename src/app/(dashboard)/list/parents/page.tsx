import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, parentsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Parent = {
    id: number,
    name: string,
    email?: string,
    students: string[],
    phone: string,
    adresse: string,
}

const columns = [
    {
        header: "info", accessor: "info"
    },
    {
        header: "Students Name", accessor: "students", className: "hidden md:table-cell"
    },
    {
        header: "Phone", accessor: "phone", className: "hidden md:table-cell"
    },
    {
        header: "Adresse", accessor: "adresse", className: "hidden lg:table-cell"
    },
    {
        header: "Actions", accessor: "actions"
    }
]

const ParenttList = () => {

    const renderRow = (item: Parent) => {
        return <tr key={item.id} className='border-b- border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='flex gap-4 p-4 items-center'>
                <div className='flex flex-col'>
                    <h3 className='font-semibold'>{item.name}</h3>
                    <p className='text-xs text-gray-500'>{item?.email}</p>
                </div>
            </td>
            <td className='hidden md:table-cell'>{item.students.join(", ")}</td>
            <td className='hidden md:table-cell'>{item.phone}</td>
            <td className='hidden lg:table-cell'>{item.adresse}</td>
            <td>
                <div className='flex items-center gap-2'>                    
                {
                    role === "admin" &&
                    <>
                        <FormModal table='parent' type='delete' id={item.id} data={item}></FormModal>
                        <FormModal table='parent' type='update' id={item.id}></FormModal>
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
                <h1 className='hidden md:block text-lg font-semibold'>ALL Parents</h1>
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
                            <FormModal table='parent' type='create'></FormModal>
                        }
                    </div>
                </div>
            </div>
            {/** LIST */}
            <div>
                <Table columns={columns} renderRow={renderRow} data={parentsData}></Table>
            </div>
            {/** PAGINATION */}
            <Pagination></Pagination>
        </div>
    )
}

export default ParenttList
