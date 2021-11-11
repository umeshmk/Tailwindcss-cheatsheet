import React from "react";

function Footer() {
  return (
    <footer
      className="flex flex-col items-center w-full py-32 font-mono text-xl italic font-thin text-red-700 border md:text-2xl"
    >
      <div>Tweaked By</div>
      <a class="pt-3 mb-6 text-blue-900 underline" href="https://github.com/anibalsanchez/Tailwindcss-cheatsheet">
        Anibal Sanchez
      </a>
      <div>Originally Made By</div>
      <a class="pt-3 text-blue-900 underline" href="https://github.com/umeshmk/Tailwindcss-cheatsheet">
        Umesh Kadam
      </a>
    </footer>
  );
}

export default Footer;
