import React, { useContext } from "react";
import Title from "../Title";
import { TailwindContext } from "../../context/TailwindContext";

function Spacing({ title }) {
  const { basic } = useContext(TailwindContext);

  return (
    <div class="">
      <Title title="Spacing" />
      <div class="flex flex-col items-start justify-center bg-purple-100 p-6 overflow-x-scroll lg:overflow-hidden">
        {basic.spacing.map((v) => {
          return (
            <div class="flex flex-row items-center pt-1" key={v}>
              <div class="w-6 text-sm text-purple-800"> {v} </div>
              <div class={"bg-purple-300 h-2 w-" + v}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Spacing;
