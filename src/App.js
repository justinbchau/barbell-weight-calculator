import React, { useState } from 'react';

import WeightInput from './components/weightInput';
import DisplayWeight from './components/displayWeight';
import BarToggle from './components/barToggle';
import KiloToggle from './components/kiloToggle';

const App = () => {
  const POUNDS = [45, 35, 25, 15, 10, 5, 2.5];
  const KILOS = [20, 15, 10, 5, 2.5, 1.25];

  const [weight, setWeight] = useState(null);
  const [bar, setBar] = useState(null);
  const [total, setTotal] = useState(null);
  const [remaining, setRemaining] = useState(null);
  const [units, setUnits] = useState(POUNDS);
  const [metric, setMetric] = useState('lbs');

  const [mensBar, setMensBar] = useState(45);
  const [womensBar, setWomensBar] = useState(35);

  // Make a function that will convert Pounds to Kilos
  function convertWeight(u) {
    let units_;

    if (u === 'POUNDS') {
      units_ = POUNDS;
      setMetric('lbs');
      setMensBar(45);
      setWomensBar(35);
    }
    if (u === 'KILOS') {
      units_ = KILOS;
      setMetric('kg');
      setMensBar(20);
      setWomensBar(15);
    }
    if (bar && weight) {
      console.log('i am here');
      calcWeight(bar, weight, units_);
    }
    setUnits(units_);
  }

  // Function to calculate selected bar with inputted weight and send to DisplayWeight Component
  const calcWeight = (barWeight, userWeight, weightMetric) => {
    let plates = units;

    if (weightMetric) {
      plates = weightMetric;
    }

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
      <div className='absolute right-0 top-0'>
        <KiloToggle
          weight={weight}
          bar={bar}
          calcWeight={calcWeight}
          convertWeight={convertWeight}
        />
      </div>
      <h1 className='pt-20 text-3xl'>Barbell Buddy</h1>
      <BarToggle
        mensBar={mensBar}
        womensBar={womensBar}
        bar={bar}
        setBar={setBar}
        metric={metric}
      />
      <WeightInput
        bar={bar}
        calcWeight={calcWeight}
        weight={weight}
        setWeight={setWeight}
        metric={metric}
      />
      <div
        className={total ? 'transition duration-500 opacity-100' : 'opacity-0'}
      >
        {total && (
          <DisplayWeight units={units} total={total} remaining={remaining} />
        )}
      </div>
    </div>
  );
};

export default App;
