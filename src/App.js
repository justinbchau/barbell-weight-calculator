import React, { useState } from 'react';

import WeightInput from './components/weightInput';
import DisplayWeight from './components/displayWeight';
import BarToggle from './components/barToggle';

const App = () => {
  const [weight, setWeight] = useState(null);
  const [bar, setBar] = useState(null);
  const [total, setTotal] = useState(null);
  const [remaining, setRemaining] = useState(null);

  // Function to calculate selected bar with inputted weight and send to DisplayWeight Component
  const calcWeight = (barWeight, userWeight) => {
    let plates = [45, 35, 25, 15, 10, 5, 2.5];
    let calculated = [];

    let remainingWeight = userWeight - barWeight;
    setTotal(remainingWeight);

    for (let i = 0; i < plates.length; i++) {
      let count = Math.floor(remainingWeight / plates[i]);
      if (count % 2 !== 0) {
        count -= 1;
      }

      remainingWeight -= plates[i] * count;

      calculated.push(count);
    }
    setRemaining(remainingWeight);
    setTotal(calculated);
  };

  return (
    <div className='block text-center'>
      <h1 className='mt-20 text-2xl'>Barbell Buddy</h1>
      <BarToggle bar={bar} setBar={setBar} />
      <WeightInput
        bar={bar}
        calcWeight={calcWeight}
        weight={weight}
        setWeight={setWeight}
      />
      {total && <DisplayWeight total={total} remaining={remaining} />}
    </div>
  );
};

export default App;
