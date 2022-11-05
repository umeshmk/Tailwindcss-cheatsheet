import React, {useContext, useEffect} from 'react';
import Title from '../Title';
import {TailwindContext} from '../../context/TailwindContext';

function Breakpoints() {
  const {responsive} = useContext(TailwindContext);

  return (
    <div className="">
      <Title title="Breakpoints" />
      <div className="grid text-center overflow-x-scroll lg:overflow-hidden">
        <div className="grid grid-cols-1 gap-y-   bg-purple-50 text-blue-500 py-4 ">
          {Object.values(responsive).map((v) => {
            return (
              <div className="grid grid-cols-3 py-2" key={v.size}>
                <div className="bg-purple-30 border-b- border-purple-200 ">
                  {v.icon}
                </div>
                <div className="text-gray-700 italic border-x-2 border-purple-300 ">
                  {v.size}
                </div>
                <div className="ffamily-b text-red-800 font-normal">
                  .{v.class}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Breakpoints;
