import React from 'react';

const KiloToggle = ({ convertWeight, calcWeight, bar, weight }) => {
  const handleClick = (e) => {
    convertWeight(e.target.value);
  };

  return (
    <div className='mt-5 mb-5'>
      <fieldset className='mb-2'>
        <legend className='mb-2'>Pounds or Kilos</legend>
        <input
          onClick={handleClick}
          id='pounds'
          type='radio'
          name='weight'
          value='POUNDS'
        />
        <label className='pr-3 pl-1' htmlFor='pounds'>
          Pounds
        </label>
        <input
          onClick={handleClick}
          id='kilos'
          type='radio'
          name='weight'
          value='KILOS'
        />
        <label className='pr-3 pl-1' htmlFor='kilos'>
          Kilos
        </label>
      </fieldset>
    </div>
  );
};

export default KiloToggle;
