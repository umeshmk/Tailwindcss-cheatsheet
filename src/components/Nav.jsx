import React from "react";

function Nav() {
  return (
    <nav
      className="
        flex flex-row
        items-center
        justify-between
        text-gray-800
         bg-purple-100        
        px-4
        py-5
      "
    >
      <div className="flex flex-col">
        <div className="text-red-700 font-semibold text-xl">
          <a href="https://umeshmk.github.io/Tailwindcss-cheatsheet/">
            Tailwind CSS
          </a>
        </div>
        <span className="text-sm  font-thin">Cheatsheet v2.1</span>
      </div>
      <ul className="flex flex-row items-center text-sm">
        <li className="flex pr-5 lg:pr-10 font-thin text-sm lg:text-lg underline">
          <a href="https://umeshmk.github.io/Tailwindcss-cheatsheet/v2.0/">
            v2
          </a>
        </li>
        <li className="flex pr-5 lg:pr-10 font-thin text-sm lg:text-lg underline">
          <a href="https://umeshmk.github.io/Tailwindcss-cheatsheet/v1/">v1</a>
        </li>
        <li className="flex flex-col">
          <a href="https://github.com/umeshmk/Tailwindcss-cheatsheet">
            {/* <span className="mr-3 p-1" id="githubIcon"></span>  */}
            <i className="fab fa-github text-red-700 text-4xl"></i>
            {/* <span className="hidden md:block text-gray-300 mt-1"> Github </span> */}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
