"use client"

import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useState } from 'react'
/* import TeacherForm from './forms/TeacherForm'
import StudentForm from './forms/StudentForn' */

const TeacherForm= dynamic(()=>import('./Form/TeacherForm'), {loading:()=> <h1>loading ....</h1>})
const StudentForn= dynamic(()=>import("./Form/StudentForn"), {loading:()=> <h1>loading ....</h1>})

const FormModal = ({ table, type, data, id }:
    {
        table: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "event" | "attendance" | "announcement",
        type: "create" | "update" | "delete",
        data?: any,
        id?: number
    }) => {

    const [open, setOpen] = useState(false)
    const forms:{[key:string]:(type : "create"| "update", data?:any)=>JSX.Element}={
        teacher:(type,data)=> <TeacherForm type={type} data={data}></TeacherForm>,
        student:(type,data)=> <StudentForn type={type} data={data}></StudentForn>
    }

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7"
    const color = type === "create" ? "bg-lamaYellow" : type === "update" ? "bg-lamaSky" : "bg-lamaPurple"
    const image = type === "create" ? "/plus.png" : type === "update" ? "/edit.png" : "/delete.png"

    const Form=()=>{
        return type==="delete" &&  id ?
        <form action="" className='p-4 flex flex-col gap-4'>
            <span className='text-center font-medium'>All data will be lost. Are you sure you want to delete this {table}?</span>
            <button className='bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center'>Delete</button>
        </form>
        : type==="create" || type==="update" ? forms[table](type,data)
        : ""
    }

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className={size + " " + color + " flex items-center justify-center rounded-full"}>
                <Image src={image} alt='' width={15} height={15}></Image>
            </button>
            {open &&
                <div className='w-screen h-screen absolute left-0 right-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center'>
                    <div className='relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]  bg-white rounded-md p-4'>
                        {Form()}
                        <div onClick={()=>setOpen(false)} className='absolute top-4 right-4 cursor-pointer'>
                            <Image src="/close.png" alt='' width={14} height={14}></Image>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default FormModal
