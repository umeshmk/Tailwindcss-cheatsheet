import React from 'react';

function Title({title}) {
  return (
    <div>
      <h1 className=" inline-block text-xl text-red-900 bg-red-100 font-bold p-2 pr-3 capitalize ">
        <span className="text-red-600 font-normal"># </span>
        {title}
      </h1>
    </div>
  );
}

export default Title;
