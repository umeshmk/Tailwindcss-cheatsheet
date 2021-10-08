import React, { useContext } from "react";
import Title from "../Title";
import { TailwindContext } from "../../context/TailwindContext";

var jsx = (c) => (
  <div class="grid grid-cols-2 italic bg-purple-100 py-3 px-2 mb-6 tracking-wide">
    {c.map((v) => (
      <div class="" key={v}>
        {v}
      </div>
    ))}
  </div>
);

function Others() {
  const { basic } = useContext(TailwindContext);
  const { pseudoClass, functions, opacity, colorsNum } = basic;

  return (
    <div>
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
