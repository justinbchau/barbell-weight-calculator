import React from 'react';

const DisplayWeight = ({ total, remaining }) => {
  // Make hard coded weights dynamic so we can change it to kilos when necessary
  return (
    <div className='mt-10 flex justify-center'>
      <div className='bg-gray-400 shadow-md rounded px-8 py-8 pt-8'>
        <h1 className='text-2xl mb-2 underline'>Plates you need:</h1>
        <table className='table-auto'>
          <thead>
            <tr>
              <th className='px-4 py-2'>45</th>
              <th className='px-4 py-2'>35</th>
              <th className='px-4 py-2'>25</th>
              <th className='px-4 py-2'>15</th>
              <th className='px-4 py-2'>10</th>
              <th className='px-4 py-2'>5</th>
              <th className='px-4 py-2'>2.5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {total.map((weight, index) => (
                <td key={index} className='border px-4 py-2'>
                  {weight}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <h1 className='mt-5 text-lg'>
          Remaining Weight: <strong>{remaining}lbs </strong>{' '}
        </h1>
      </div>
    </div>
  );
};

export default DisplayWeight;
