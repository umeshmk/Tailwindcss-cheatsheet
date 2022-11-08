import React from 'react';
import Breakpoints from './header/Breakpoints';
import Spacing from './header/Spacing';
import Colors from './header/Colors';
import Others from './header/Others';

function Header() {
  return (
    <header className="grid grid-cols-1 gap-5 bg-purple-200 p-5 lg:py-20">
      {/* MOBILE */}
      <div className="grid grid-cols-1 gap-10 mt-5 lg:hidden">
        <Spacing />
        <Colors />
        <Breakpoints />
        <Others type="PseudoClass" />
        <Others type="PseudoClassAria" />
        <Others type="PseudoClassmedia" />
        <Others type="Functions" />
        <Others type="Opacity" />
        <Others type="ColorsNum" />
      </div>

      {/* TABLET-LANDSCAPE */}
      <div className="hidden 2xl:hidden lg:grid lg:grid-cols-2 gap-10 mt-0 ">
        <div>
          <Spacing />
        </div>
        <div className="flex flex-col justify-between">
          <Breakpoints />
          <Others type="PseudoClass" />
          <Others type="PseudoClassmedia" />
        </div>
      </div>
      <div className="hidden 2xl:hidden lg:grid grid-cols-1 gap-10 mt-5 ">
        <div className="grid grid-cols-9 gap-10">
          <Others className="col-span-3" type="PseudoClassAria" />
          <Others className="col-span-2" type="Functions" />
          <Others className="col-span-2" type="Opacity" />
          <Others className="col-span-2" type="ColorsNum" />
        </div>
        <Colors />
      </div>

      {/* LARGE DESKTOP */}
      <div className="hidden  2xl:grid 2xl:grid-cols-2 gap-24 mt-0 ">
        <div>
          <Spacing />
        </div>
        <div className="flex flex-col justify-between">
          <Breakpoints />
          <Others type="PseudoClass" />
          <div className="grid grid-cols-4 gap-10">
            <Others type="PseudoClassmedia" />
            <Others type="Functions" />
            <Others type="Opacity" />
            <Others type="ColorsNum" />
          </div>
        </div>
      </div>
      <div className="hidden 2xl:grid grid-cols-1 gap-10 mt-5 ">
        <div className="grid grid-cols-7 gap-10"></div>
        <Colors />
      </div>
    </header>
  );
}

export default Header;
