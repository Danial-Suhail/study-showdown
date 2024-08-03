import React from 'react';

const CustomRow = ({ data }) => {
    return (
        <tr>
            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{data.column1}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{data.column1}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{data.column1}</td>
        </tr>
    )
}

export default CustomRow;