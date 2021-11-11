import React from "react";

function Nav() {
  return (
    <nav
      className="flex flex-row items-center justify-between px-4 py-5 text-gray-800 border "
    >
      <div className="flex flex-col">
        <div className="text-xl font-semibold text-red-700">
          <a href="https://anibalsanchez.github.io/Tailwindcss-cheatsheet/">
            Tailwind CSS
          </a>
        </div>
        <span className="text-sm font-thin">Cheatsheet v2.1</span>
      </div>
      <ul className="flex flex-row items-center text-sm">
        <li className="flex pr-5 text-sm font-thin underline lg:pr-10 lg:text-lg">
          <a href="v2.0/">v2</a>
        </li>
        <li className="flex pr-5 text-sm font-thin underline lg:pr-10 lg:text-lg">
          <a href="v1/">v1</a>
        </li>
        <li className="flex flex-col">
          <a href="https://github.com/anibalsanchez/Tailwindcss-cheatsheet">
            <i className="text-4xl text-red-700 fab fa-github"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;