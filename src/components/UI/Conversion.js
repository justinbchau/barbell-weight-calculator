import React from 'react';

const Conversion = ({ convertWeight }) => {
  const handleClick = (e) => {
    convertWeight(e.target.value);
  };
  return (
    <div className='flex flex-col'>
      <fieldset className='mt-2 mb-2'>
        <input
          onClick={handleClick}
          id='pounds'
          type='radio'
          name='weight'
          value='POUNDS'
        />
        <label className='p-2' htmlFor='pounds'>
          Pounds
        </label>
      </fieldset>
      <fieldset>
        <input
          onClick={handleClick}
          id='kilos'
          type='radio'
          name='weight'
          value='KILOS'
        />
        <label className='p-2' htmlFor='kilos'>
          Kilos
        </label>
      </fieldset>
    </div>
  );
};

export default Conversion;