import React, {useContext} from 'react';
import Title from '../Title';
import {TailwindContext} from '../../context/TailwindContext';

function Colors() {
  const {basic} = useContext(TailwindContext);
  const {colors, colorsNum} = basic;

  let listColorSize = (color) => (
    <div className="mr-1 lg:m-0 border border-red-50 print:border-white grow" key={color}>
      <div className={`text-center text-xs print:text-sm py-4 px-0 m-0 text-${color}-600 `}>
        {color}
      </div>

      {colorsNum.map((v) => {
        return (
          <div className="" key={v}>
            <div
              className={
                'py-4 px-4 lg:px-3 m-0 text-xs print:text-sm text-center print:font-semibold bg-' +
                color +
                '-' +
                v
              }>
              <div className={`text-${color}-${v < 500 ? '700' : '200'} print:text-${color}-${v < 500 ? '950' : '50'} `}>
                {v}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="">
      <Title title="Colors" />
      <div className="">
        <div className="flex lg:justify-evenly overflow-x-scroll lg:overflow-x-auto bg-purple-100 print:bg-white print:border print:border-slate-300">
          {colors.map((v) => {
            return listColorSize(v);
          })}
        </div>
      </div>
    </div>
  );
}

export default Colors;
