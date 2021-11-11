import React from "react";
import Breakpoints from "./header/Breakpoints";
import Spacing from "./header/Spacing";
import Colors from "./header/Colors";
import Others from "./header/Others";

function Header({ title }) {
  return (
    <header className="grid grid-cols-1 gap-5 p-5 border lg:py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-3 2xl:gap-10 ">
        <Spacing />
        <div className="2xl:grid 2xl:gap-10">
          <Colors />
          <div className="hidden 2xl:block">
            <Breakpoints />
          </div>
        </div>
      </div>
      <div className="lg:mx-auto 2xl:hidden">
        <Breakpoints />
      </div>
      <Others />
      {/* <Spacing />
      <Colors />
      <Breakpoints />
      <Others /> */}
    </header>
  );
}

export default Header;
