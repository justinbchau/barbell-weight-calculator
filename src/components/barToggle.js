import React from 'react';

const BarToggle = ({ bar, setBar, metric, mensBar, womensBar }) => {
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
          value={mensBar}
        />
        <label className='pr-3 pl-1' htmlFor='mens-bar'>
          Mens ({mensBar}
          {metric})
        </label>
        <input
          onChange={handleClick}
          id='womens-bar'
          type='radio'
          name='bar'
          value={womensBar}
        />
        <label className='pr-3 pl-1' htmlFor='womens-bar'>
          Womens ({womensBar}
          {metric})
        </label>
      </fieldset>
    </div>
  );
};

export default BarToggle;
