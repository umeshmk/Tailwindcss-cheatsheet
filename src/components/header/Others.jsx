import React, {useContext} from 'react';
import Title from '../Title';
import {TailwindContext} from '../../context/TailwindContext';

const Tags = ({arr}) => (
  <div className="flex flex-wrap gap- italic bg-purple-50 g-white py-3 px-2 mb-6 tracking-wide">
    {arr.map((v) => (
      <div
        className="border-purple-300 border-r-2 py-px p-2 mb-2 last:border-0"
        key={v}>
        <span className="ffamily-b text-red-800 font-normal">{v}</span>
      </div>
    ))}
  </div>
);

function Others() {
  const {basic} = useContext(TailwindContext);
  const {
    pseudoClass,
    pseudoClassAria,
    pseudoClassmedia,
    functions,
    opacity,
    colorsNum,
  } = basic;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-2 2xl:grid-cols-4 2xl:gap-5">
      <div>
        <Title title="Pseudo Class" />
        <Tags arr={pseudoClass} />
      </div>
      <div>
        <Title title="Pseudo Class - Media" />
        <Tags arr={pseudoClassmedia} />
      </div>
      <div>
        <Title title="Pseudo Class - Aria" />
        <Tags arr={pseudoClassAria} />
      </div>
      <div>
        <Title title="Opacity" />
        <Tags arr={opacity} />
      </div>
      {/* <div>
        <Title title="Colors" />
        <Tags arr={colorsNum} />
      </div> */}
      <div>
        <Title title="Functions & Directives" />
        <Tags arr={functions} />
      </div>
    </div>
  );
}

export default Others;
