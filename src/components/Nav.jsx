import React from 'react';

function Nav() {
  return (
    <nav
      className="
        flex flex-row
        items-center
        justify-between
        text-gray-800
        bg-purple-50        
        px-4
        py-5
      ">
      <div className="flex flex-col">
        <div className="text-red-700 font-semibold text-xl">
          <a href="https://umeshmk.github.io/Tailwindcss-cheatsheet/">
            Tailwind CSS
          </a>
        </div>
        <span className="text-sm  font-thin">Cheatsheet v3</span>
      </div>
      <ul className="flex flex-row items-center text-sm">
        <li className="flex pr-5 lg:pr-10 font-thin text-sm lg:text-lg underline">
          <a href="v2.1/">v2.1</a>
        </li>
        <li className="flex flex-col">
          <a href="https://github.com/umeshmk/Tailwindcss-cheatsheet">
            <i className="fab fa-github text-red-700 text-4xl"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
