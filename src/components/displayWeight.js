import React from 'react';

const DisplayWeight = ({ total, remaining, units }) => {
  // Make hard coded weights dynamic so we can change it to kilos when necessary
  return (
    <div className='mt-10 flex justify-center'>
      <div className='bg-gray-400 shadow-md rounded px-8 py-8 pt-8'>
        <h1 className='text-2xl mb-2 underline'>Plates you need:</h1>
        <table className='table-auto'>
          <thead>
            <tr>
              {units.map((plate, index) => (
                <th key={index} className='px-4 py-2'>
                  {plate}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white'>
              {total.map((weight, index) => (
                <td key={index} className='border px-4 py-2'>
                  {weight}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        {remaining ? (
          <h1 className='mt-5 text-lg'>
            Remaining Weight: <strong>{remaining}lbs </strong>{' '}
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default DisplayWeight;
