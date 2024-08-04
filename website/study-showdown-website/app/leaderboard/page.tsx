import React from 'react';

const Leaderboard = () => {
  const rows = [
    { position: 1, name: 'John Doe', email: 'john@example.com', points: 95 },
    { position: 2, name: 'Jane Smith', email: 'jane@example.com', points: 89 },
    { position: 3, name: 'Alice Johnson', email: 'alice@example.com', points: 82 },
    { position: 4, name: 'Bob Brown', email: 'bob@example.com', points: 76 },
    { position: 5, name: 'Charlie Davis', email: 'charlie@example.com', points: 70 },
  ];

  return (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#f30303_20%,#2005f2_100%)] text-white justify-center">

    <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold font-custom md:drop-shadow-[8px_0_0_rgba(0,0,0,1)] sm:drop-shadow-[6px_0_0_rgba(0,0,0,1)] drop-shadow-[4px_0_0_rgba(0,0,0,1)] text-center my-8">Leaderboard</h1>

    <div className="overflow-x-auto w-[800px] mx-auto my-auto justify-center">
      <table className="min-w-full divide-y-2 divide-white">
        <thead className="">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xl font-custom text-white uppercase tracking-wider">
              Position
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xl font-custom text-white uppercase tracking-wider">
              Name / Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xl font-custom text-white uppercase tracking-wider">
              Points
            </th>
            
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-white">
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                
                <div className="text-xl text-white font-custom">{row.position}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-white">{row.name}</div>
                <div className="text-sm text-white">{row.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-md text-white">{row.points}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Leaderboard;