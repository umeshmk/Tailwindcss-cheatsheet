import React from 'react';
import Breakpoints from './header/Breakpoints';
import Spacing from './header/Spacing';
import Colors from './header/Colors';
import Others from './header/Others';

// function Header() {
//   return (
//     <header className="grid grid-cols-1 gap-5 bg-purple-200 p-5 lg:py-20">
//       <div className="grid grid-cols-1 gap-10 mt-5 lg:grid-cols-2  lg:gap-3 2xl:gap-10 ">
//         <Spacing />
//         <div className="2xl:grid 2xl:gap-10">
//           <Colors />
//           <div className="hidden 2xl:block">{/* <Breakpoints /> */}</div>
//         </div>
//       </div>
//       <div className="mt-5 lg:mx-auto 2xl:hidden">
//         <Breakpoints />
//       </div>
//       <Others />
//     </header>
//   );
// }

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
      {/* <div className="hidden lg:grid grid-cols-1 gap-10 mt-3 ">
        <Colors />
      </div> */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-10 mt-0 ">
        <div>
          <Spacing />
          {/* <Breakpoints /> */}
        </div>
        <div className="flex flex-col justify-between">
          <Breakpoints />
          <Others type="PseudoClass" />
          {/* <Others  type="PseudoClassAria" /> */}
          <Others type="PseudoClassmedia" />
          {/* <Others type="ColorsNum" /> */}
          {/* <Others type="Functions" /> */}
          {/* <Others type="Opacity" /> */}
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-1 gap-10 mt-5 ">
        <div className="grid grid-cols-7 gap-10">
          {/* <Others className="col-span-3" type="PseudoClassmedia" /> */}
          <Others className="col-span-3" type="PseudoClassAria" />
          <Others className="col-span-2" type="Functions" />
          <Others className="col-span-2" type="Opacity" />
        </div>
        <Colors />
      </div>
    </header>
  );
}

export default Header;

// PseudoClass
// PseudoClassAria
// PseudoClassmedia
// Functions
// Opacity
// ColorsNum
