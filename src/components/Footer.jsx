import React from "react";

function Footer() {
  return (
    <footer
      class="
        flex flex-col
        w-full
        items-center
        italic
        text-xl
        md:text-2xl
        py-32
        font-thin
        bg-purple-200
      "
    >
      <div>Made with</div>
      <div class="align-center bg-red-300 p-2 rounded-xl">❤</div>
      <a class="text-blue-900 pt-3 underline" href="https://github.com/umeshmk">
        Umesh Kadam
      </a>
    </footer>
  );
}

export default Footer;
