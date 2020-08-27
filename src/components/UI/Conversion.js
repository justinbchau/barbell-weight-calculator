import React from 'react';

const Conversion = ({ convertWeight, isOpen, setIsOpen }) => {
  const handleClick = (e) => {
    convertWeight(e.target.value);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <div className='flex flex-col'>
      <div>
        <fieldset className='mt-2 mb-2'>
          <input
            onClick={handleClick}
            id='pounds'
            type='radio'
            name='weight'
            value='POUNDS'
            defaultChecked
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
    </div>
  );
};

export default Conversion;
