import React from 'react';

const BarToggle = ({ bar, setBar }) => {
  const handleClick = (e) => {
    setBar(e.target.value);
  };

  return (
    <div className='mt-5 mb-5'>
      <fieldset className='mb-2'>
        <legend className='mb-2'>Choose your Bar</legend>
        <input
          onChange={handleClick}
          id='mens-bar'
          type='radio'
          name='bar'
          value={45}
        />
        <label className='pr-3 pl-1' htmlFor='mens-bar'>
          Mens
        </label>
        <input
          onChange={handleClick}
          id='womens-bar'
          type='radio'
          name='bar'
          value={35}
        />
        <label className='pr-3 pl-1' htmlFor='womens-bar'>
          Womens
        </label>
      </fieldset>
      {/* <h1>{bar}</h1> */}
    </div>
  );
};

export default BarToggle;
