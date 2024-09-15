import React from 'react'

const Table = ({ columns, renderRow, data }:
    {
        columns: { header: string, accessor: string, className?: string }[],
        renderRow: (item: any) => React.ReactNode,
        data: any[]
    }
) => {
    return (
        <table className='w-full mt-4'>
            <thead>
                <tr className='text-left text-gray-500 text-sm'>
                    {columns.map(col => (<th className={col.className} key={col.accessor} >{col.header}</th>))}
                </tr>
            </thead>
            <tbody>
                {data.map(e => (renderRow(e)))}
            </tbody>
        </table>
    )
}

export default Table
