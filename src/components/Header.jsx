import React from "react";
import Breakpoints from "./header/Breakpoints";
import Spacing from "./header/Spacing";
import Colors from "./header/Colors";

function Header({ title }) {
  return (
    <header class="grid grid-cols-1 gap-5 bg-purple-300 p-5 md:py-20">
      <Spacing />
      <Colors />
      <Breakpoints />
    </header>
  );
}

export default Header;
