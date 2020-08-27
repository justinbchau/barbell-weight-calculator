import React from 'react';

const weightInput = ({ weight, setWeight, bar, calcWeight, metric }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (bar === null) {
      throwError();
    } else if (weight === null) {
      throwError();
    } else {
      calcWeight(bar, weight);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setWeight(e.target.value);
  };

  const throwError = () => {
    alert('Input a weight');
  };

  return (
    <div className='flex justify-center'>
      <form
        className='mt-15 bg-gray-400 shadow-md rounded px-8 py-8 pt-8'
        action=''
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div className='px-4 pb-4'>
          <label className='text-sm block font-bold  pb-2' htmlFor='weight'>
            Weight Needed:
          </label>
          <div className='flex items-center'>
            <input
              type='text'
              name='weight'
              className='shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300'
            />

            <p className='ml-2'>{metric}</p>
          </div>
          <input
            className='mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
            value='Submit'
          />
        </div>
      </form>
    </div>
  );
};

export default weightInput;
