import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Teacher = {
  id: number,
  teacherId: string,
  name: string,
  email?: string,
  photo: string,
  phone: string,
  subjects: string[],
  classes: string[],
  adresse: string,
}

const columns = [
  {
    header: "info", accessor: "info"
  },
  {
    header: "Teacher ID", accessor: "teacherid", className: "hidden md:table-cell"
  },
  {
    header: "Subjects", accessor: "subjects", className: "hidden md:table-cell"
  },
  {
    header: "Classes", accessor: "classes", className: "hidden md:table-cell"
  },
  {
    header: "Phone", accessor: "phone", className: "hidden lg:table-cell"
  },
  {
    header: "Adresse", accessor: "adresse", className: "hidden lg:table-cell"
  },
  {
    header: "Actions", accessor: "actions"
  }
]

const TeacherList = () => {

  const renderRow = (item: Teacher) => {
    return <tr key={item.id} className='border-b- border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
      <td className='flex gap-4 p-4 items-center'>
        <Image src={item.photo} alt='' width={40} height={40} className='md:hidden xl:block w-10 rounded-full object-cover'></Image>
        <div className='flex flex-col'>
          <h3 className='font-semibold'>{item.name}</h3>
          <p className='text-xs text-gray-500'>{item?.email}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.teacherId}</td>
      <td className='hidden md:table-cell'>{item.subjects.join(", ")}</td>
      <td className='hidden md:table-cell'>{item.classes.join(", ")}</td>
      <td className='hidden lg:table-cell'>{item.phone}</td>
      <td className='hidden lg:table-cell'>{item.adresse}</td>
      <td className='flex items-center gap-2'>
        <Link href={"list/techers/" + item.id}>
          <button className='w-7 h-7 flex justify-center items-center rounded-full bg-lamaSky'>
            <Image src="/view.png" alt='' width={16} height={16}></Image>
          </button>
        </Link>
        {
          role === "admin" &&
          <FormModal table='teacher' type='delete' id={item.id}></FormModal>
        }
      </td>
    </tr>
  }

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/** TOP */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>ALL TECHERS</h1>
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
              <FormModal table='teacher' type='create'></FormModal>
            }
          </div>
        </div>
      </div>
      {/** LIST */}
      <div>
        <Table columns={columns} renderRow={renderRow} data={teachersData}></Table>
      </div>
      {/** PAGINATION */}
      <Pagination></Pagination>
    </div>
  )
}

export default TeacherList
