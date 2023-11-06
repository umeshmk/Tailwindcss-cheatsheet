import React, {useContext} from 'react';
import Title from '../Title';
import {TailwindContext} from '../../context/TailwindContext';

function Spacing({title}) {
  const {basic} = useContext(TailwindContext);

  return (
    <div className="">
      <Title title="Spacing" />
      <div className="flex flex-col items-start justify-center bg-purple-50 p-6 overflow-x-scroll lg:overflow-hidden print:bg-white print:border print:border-slate-300">
        {basic.spacing.map((v) => {
          return (
            <div className="flex flex-row items-center pt-1" key={v[0]}>
              <div className="w-10 text-sm text-gray-800"> {v[0]} </div>
              <div className="w-10 text-sm text-gray-800 text-center"> {v[1]} </div>
              <div className="w-10 mr-5 text-sm text-gray-800 text-right"> {v[2]} </div>
              <div className={'bg-purple-300 h-2 w-' + v[0]}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Spacing;
