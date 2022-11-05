import React, {useContext} from 'react';
import Title from '../Title';
import {TailwindContext} from '../../context/TailwindContext';

function Spacing({title}) {
  const {basic} = useContext(TailwindContext);

  return (
    <div className="">
      <Title title="Spacing" />
      <div className="flex flex-col items-start justify-center bg-purple-50 p-6 overflow-x-scroll lg:overflow-hidden">
        {basic.spacing.map((v) => {
          return (
            <div className="flex flex-row items-center pt-1" key={v}>
              <div className="w-10 text-sm text-gray-800"> {v} </div>
              <div className={'bg-purple-300 h-2 w-' + v}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Spacing;
