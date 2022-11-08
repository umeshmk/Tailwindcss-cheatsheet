import React, {useContext} from 'react';
import Title from '../Title';
import {TailwindContext} from '../../context/TailwindContext';

function Colors({title}) {
  const {basic} = useContext(TailwindContext);
  const {colors, colorsNum} = basic;

  let listColorSize = (color) => (
    <div className="mr-1 lg:m-0 border border-red-50 grow" key={color}>
      <div className={`text-center text-xs py-4 px-0 m-0 text-${color}-500 `}>
        {color}
      </div>

      {colorsNum.map((v) => {
        return (
          <div className="" key={v}>
            <div
              className={
                'py-4 px-4 lg:px-3 m-0 text-xs text-center  bg-' +
                color +
                '-' +
                v
              }>
              <div className={`text-${color}-${v === 400 ? '6' : '4'}00 `}>
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
        <div className="flex lg:justify-evenly overflow-x-scroll lg:overflow-x-auto bg-purple-100 ">
          {colors.map((v) => {
            return listColorSize(v);
          })}
        </div>
      </div>
    </div>
  );
}

export default Colors;
