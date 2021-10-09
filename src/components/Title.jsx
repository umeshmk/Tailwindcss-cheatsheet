import React from "react";

function Title({ title }) {
  return (
    <div>
      <h1 className=" inline-block text-xl text-gray-800 bg-purple-100 font-bold p-2 capitalize ">
        <span className="text-red-700 font-normal"># </span>
        {title}
      </h1>
    </div>
  );
}

export default Title;
