import React from 'react'

const Leaderboard = ({ data }) => {
    return (
        <div className='overflow-x-auto'>
            <div className='max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg'>
    
            <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Column 1</th>
                        <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Column 2</th>
                        <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Column 3</th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    {data.map((item, index) => (
                        <CustomRow key={index} data={item} />
                    ))}
    
                </tbody>
            </table>
            </div>
        </div>
            
      )
}

export default Leaderboard;