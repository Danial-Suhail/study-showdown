import React from 'react'
import Leaderboard from '././components/Leaderboard';

const data = [
    { column1: 'Row 1 Data 1', column2: 'Row 1 Data 2', column3: 'Row 1 Data 3' },
    { column1: 'Row 2 Data 1', column2: 'Row 2 Data 2', column3: 'Row 2 Data 3' }
];

const columns = [
    { name: 'Column 1', key: 'column1' },
    { name: 'Column 2', key: 'column2' },
    { name: 'Column 3', key: 'column3' }
];

export default function page() {
  return (
    <div>page</div>
  )
}

