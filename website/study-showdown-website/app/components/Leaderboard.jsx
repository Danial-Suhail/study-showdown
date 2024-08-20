import React from 'react';

const Leaderboard = ({ data }) => {
    return (
        <div className='overflow-x-auto w-[800px] mx-auto my-auto justify-center'>
            <table className='min-w-full divide-y-2 divide-white'>
                <thead>
                    <tr>
                        <th className='px-6 py-3 text-left text-xl font-custom text-white uppercase tracking-wider'>Position</th>
                        <th className='px-6 py-3 text-left text-xl font-custom text-white uppercase tracking-wider'>Name / Email</th>
                        <th className='px-6 py-3 text-left text-xl font-custom text-white uppercase tracking-wider'>Points</th>
                    </tr>
                </thead>
                <tbody className='divide-y-2 divide-white'>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className='px-6 py-4 whitespace-nowrap opacity-80 hover:opacity-100 hover:bg-white hover:bg-opacity-20 ease-in-out duration-500'>
                                <div className='text-xl text-white font-custom'>{index + 1}</div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap opacity-80 hover:opacity-100 hover:bg-white hover:bg-opacity-20 ease-in-out duration-500'>
                                <div className='text-sm font-medium text-white'>{item.userName}</div>
                                <div className='text-sm text-white'>{item.userEmail}</div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap opacity-80 hover:opacity-100 hover:bg-white hover:bg-opacity-20 ease-in-out duration-500'>
                                <div className='text-md text-white'>{item.recentScore}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
