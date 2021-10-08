import React from "react";

function Nav() {
  return (
    <nav
      class="
        flex flex-row
        items-center
        justify-between
        text-white
        bg-purple-900
        px-4
        py-1
      "
    >
      <div class="flex flex-col">
        {/* <div
          class="hidden md:flex mr-3 bg-blue-100 p-1"
          id="tailwindIcon"
        ></div> */}
        <div class="md:hidde font-extrabold text-xl">
          <a href="https://umeshmk.github.io/Tailwindcss-cheatsheet/">
            Tailwindcss
          </a>
        </div>
        <span class="text-sm text-gray-300 font-thin">cheatsheet v-2.0</span>
      </div>
      <ul class="flex flex-row items-center text-sm">
        <li class="flex pr-10 font-thin text-xl underline">
          <a href="https://umeshmk.github.io/Tailwindcss-cheatsheet/v1/">
            v-1.0
          </a>
        </li>
        <li class="flex flex-col">
          <a href="https://github.com/umeshmk/Tailwindcss-cheatsheet">
            {/* <span class="mr-3 p-1" id="githubIcon"></span>  */}
            <i class="fab fa-github text-4xl"></i>
            <span class="hidden md:block text-gray-300 mt-1"> Github </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
