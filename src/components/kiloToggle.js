import React, { useState } from 'react';
import Conversion from './UI/Conversion';

const KiloToggle = ({ convertWeight }) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col mt-5 items-end relative'>
      <div className='block mr-5'>
        <button onClick={clickToggle}>
          <svg viewBox='0 0 20 20' fill='currentColor' className='cog w-6 h-6'>
            <path
              fillRule='evenodd'
              d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div
        className={`border border-gray-300 shadow rounded transition duration-300 mr-3 p-1 lg:p-5 bg-gray-400 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Conversion
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          convertWeight={convertWeight}
        />
      </div>
    </div>
  );
};

export default KiloToggle;
