import React, {useContext} from 'react';
import Title from '../Title';
import {TailwindContext} from '../../context/TailwindContext';

const Tags = ({arr}) => (
  <div className="flex flex-wrap gap- italic bg-purple-50 g-white py-3 px-2  tracking-wide">
    {arr.map((v) => (
      <div
        className="border-purple-300 border-r-2 py-px p-2 mb-1 last:border-0"
        key={v}>
        <span className="ffamily-b text-red-800 font-normal">{v}</span>
      </div>
    ))}
  </div>
);

const View = (title, data) => (
  <div>
    <Title title={title} />
    <Tags arr={data} />
  </div>
);

function Others({className, type}) {
  const {basic} = useContext(TailwindContext);
  const {
    pseudoClass,
    pseudoClassAria,
    pseudoClassmedia,
    functions,
    opacity,
    colorsNum,
  } = basic;

  const data = {
    PseudoClass: View('Pseudo Class', pseudoClass),
    PseudoClassAria: View('Pseudo Class - Aria', pseudoClassAria),
    PseudoClassmedia: View('Pseudo Class - Media', pseudoClassmedia),
    Opacity: View('Opacity', opacity),
    ColorsNum: View('Colors', colorsNum),
    Functions: View('Functions & Directives', functions),
  };
  return <div className={`${className}`}>{data[type]}</div>;
}

export default Others;
