import React from "react";

function Title({ title }) {
  return (
    <div>
      <h1 className="inline-block p-2 text-xl font-bold text-gray-800 capitalize border ">
        <span className="font-normal text-red-700"># </span>
        {title}
      </h1>
    </div>
  );
}

export default Title;
