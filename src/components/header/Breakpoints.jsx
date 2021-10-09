import React, { useContext, useEffect } from "react";
import Title from "../Title";
import { TailwindContext } from "../../context/TailwindContext";

let responsiveJsx = (res) => (
  <div class="flex pb-8 md:pb-6 ">
    {Object.values(res).map((v) => {
      return (
        <div class="flex-1 bg-purple-100 uppercase md:p-3 " key={v}>
          {v.map((j, key) => {
            return (
              <div class="p-2 tracking-wide lowercase" key={key}>
                <div
                  class={
                    key === 0
                      ? "text-gray-700 italic"
                      : "text-black font-semibold pt-2"
                  }
                >
                  {j}
                </div>
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
);

function Breakpoints({ title }) {
  const { responsive, responsiveIcons } = useContext(TailwindContext);
  const ref = React.createRef(null);

  useEffect(() => {
    ref.current.innerHTML = responsiveIcons;
  }, []);

  return (
    <div class="">
      <Title title="Breakpoints" />
      <div class="grid text-center overflow-x-scroll lg:overflow-hidden">
        <div
          class="grid grid-cols-6  bg-purple-800 text-blue-200 py-6 "
          ref={ref}
        ></div>
        {responsiveJsx(responsive)}
      </div>
    </div>
  );
}

export default Breakpoints;
