import React from "react";

function Footer() {
  return (
    <footer
      className="
        flex flex-col
        w-full
        items-center
        italic
        font-mono
        text-xl
        md:text-2xl
        py-32
        font-thin
        bg-purple-200
        text-red-700
      "
    >
      <div>Made with</div>
      <div className="align-center bg-red-300 my-2 p-2 rounded-xl">❤</div>
      <a className="" href="https://github.com/umeshmk">
        Umesh Kadam
      </a>
    </footer>
  );
}

export default Footer;
