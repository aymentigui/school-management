import React from 'react'

const Pagination = () => {
    return (
        <div className='p-4 flex justify-between items-center text-blue-700'>
            <button className='p-2 rounded-md bg-lamaYellow text-xs text-w font-semibold disabled:opacity-20 disabled:cursor-n'>Précédent</button>
            <div className='flex items-center gap-2 text-sm'>
                <button className='p-2 w-7  rounded-md bg-lamaSky'>1</button>
                <button className='p-2 w-7 rounded-md bg-lamaSky'>2</button>
                <button className='p-2 w-7 rounded-md bg-lamaSky'>...</button>
                <button className='p-2 w-7 rounded-md bg-lamaSky'>3</button>
            </div>
            <button className='p-2 rounded-md bg-lamaYellow text-xs font-semibold disabled:opacity-20 disabled:cursor-n'>Suivant</button>
        </div>
    )
}

export default Pagination
