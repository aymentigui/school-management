"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';
import Image from 'next/image';

const schema = z.object({
    username: z.string().min(3, { message: 'username must be at least 3 charaters long !' })
        .max(20, { message: 'username must be at most 20 charaters !' }),
    email: z.string().email({ message: "invalid email adresse !" }),
    password: z.string().min(8, { message: 'username must be at least 8 charaters long !' }),
    firstname: z.string().min(1, { message: 'First name is required !' }),
    lastname: z.string().min(1, { message: 'Last name is required !' }),
    phone: z.string().min(1, { message: 'Phone is required !' }),
    adresse: z.string().min(1, { message: 'Adresse is required !' }),
    bloodType: z.string().min(1, { message: 'Bood type is required !' }),
    birthday: z.date({ message: 'Birthday is required !' }),
    sex: z.enum(["male", "female"], { message: "Sex is required" }),
    image: z.instanceof(File, { message: "image is required" }),
});

type Inputs = z.infer<typeof schema>

const StudentForm = ({ type, data }: { type: "create" | "update", data?: any }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <form action="" className='flex flex-col gap-6' onSubmit={onSubmit}>
            <h1 className='font-semibold text-xl'>Create new Student</h1>
            <span className='text-xs font-medium text-gray-400'>Authentification information</span>
            <div className='flex justify-between items-center'>
                <InputField type='text' label='Username' name='username' register={register} defaultValue={data?.username} error={errors?.username} ></InputField>
                <InputField type='Email' label='email' name='email' register={register} defaultValue={data?.email} error={errors?.email} ></InputField>
                <InputField type='password' label='Password' name='password' register={register} defaultValue={data?.password} error={errors?.password} ></InputField>
            </div>
            <span className='text-xs font-medium text-gray-400'>Personal information</span>
            <div className='flex justify-between flex-wrap gap-4'>
                <InputField type='text' label='First name' name='firstname' register={register} defaultValue={data?.firstname} error={errors?.firstname} ></InputField>
                <InputField type='text' label='Last name' name='lastname' register={register} defaultValue={data?.lastname} error={errors?.lastname} ></InputField>
                <InputField type='text' label='phone' name='phone' register={register} defaultValue={data?.phone} error={errors?.phone} ></InputField>
                <InputField type='text' label='Adresse' name='adresse' register={register} defaultValue={data?.adresse} error={errors?.adresse} ></InputField>
                <InputField type='text' label='bloodType' name='Blood Type' register={register} defaultValue={data?.bloodType} error={errors?.bloodType} ></InputField>
                <InputField type='date' label='Birthday' name='birthday' register={register} defaultValue={data?.birthday} error={errors?.birthday} ></InputField>
                <div className='flex flex-col gap-2 w-full md:w-1/4'>
                    <label className='text-xs text-gray-500'>S</label>
                    <select
                        className='ring-[1.5px] p-2 ring-gray-300 rounded-md text-xs w-full'
                        {...register("sex")}
                        defaultValue={data?.sex}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.sex?.message && <p className='text-red-500 text-xs'>{errors.sex?.message.toString()}</p>}
                </div>
                <div className='flex flex-col items-center justify-center gap-2 w-full md:w-1/4'>
                    <label htmlFor="image-upload" className='text-xs text-gray-500 flex items-center gap-2 cursor-pointer'>
                        <Image src="./upload.png" alt='' width={28} height={28}></Image>
                        <span>Upload image</span>
                    </label>
                    <input
                        id='image-upload'
                        type="file"
                        {...register("image")}
                        className='hidden'
                        defaultValue={data?.defaultValue} />
                    {errors.image?.message && <p className='text-red-500 text-xs'>{errors.image?.message.toString()}</p>}
                </div>
            </div>

            <button className='bg-blue-700 text-white p-2 rounded-md'>{type === "create" ? "Create" : "Updatae"}</button>
        </form>
    )
}

export default StudentForm
