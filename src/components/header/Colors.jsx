import React, { useContext } from "react";
import Title from "../Title";
import { TailwindContext } from "../../context/TailwindContext";

function Colors({ title }) {
  const { basic } = useContext(TailwindContext);
  const { colors, colorsNum } = basic;

  let listColorSize = (color) => (
    <div class="grid grid-cols-1 gap-0  " key={color}>
      <div class={`text-center text-xs py-4 px-0 m-0 text-${color}-500 `}>
        {color}
      </div>

      {colorsNum.map((v) => {
        return (
          <div class=" " key={v}>
            <div class={"py-4 px-4 m-0 text-xs  bg-" + color + "-" + v}>
              <div class={`text-${color}-${v === 400 ? "6" : "4"}00 `}>{v}</div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div class="">
      <Title title="Colors" />

      <div class="col-span-full xl:col-span-8">
        <div class="grid grid-cols-4 gap-y-2 bg-purple-100 overflow-scroll  ">
          {colors.map((v) => {
            return listColorSize(v);
          })}
        </div>
      </div>
    </div>
  );
}

export default Colors;
