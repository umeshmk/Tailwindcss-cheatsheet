import React from "react";

function Title({ title }) {
  return (
    <div>
      <h1 class=" inline-block text-xl text-white bg-purple-800 p-2 capitalize ">
        <span class="text-gray-100"># </span>
        {title}
      </h1>
    </div>
  );
}

export default Title;
