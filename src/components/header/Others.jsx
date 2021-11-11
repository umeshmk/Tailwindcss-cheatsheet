import React, { useContext } from "react";
import Title from "../Title";
import { TailwindContext } from "../../context/TailwindContext";

var jsx = (c) => (
  <div className="grid grid-cols-2 px-2 py-3 mb-6 italic tracking-wide border">
    {c.map((v) => (
      <div className="" key={v}>
        {v}
      </div>
    ))}
  </div>
);

function Others() {
  const { basic } = useContext(TailwindContext);
  const { pseudoClass, functions, opacity, colorsNum } = basic;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-2 2xl:grid-cols-4 2xl:gap-5">
      <div>
        <Title title="Pseudo-Class" />
        {jsx(pseudoClass)}
      </div>
      <div>
        <Title title="Opacity" />
        {jsx(opacity)}
      </div>
      <div>
        <Title title="Colors" />
        {jsx(colorsNum)}
      </div>
      <div>
        <Title title="Functions" />
        {jsx(functions)}
      </div>
    </div>
  );
}

export default Others;
