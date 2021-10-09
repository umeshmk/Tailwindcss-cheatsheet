import React from "react";
import { basic } from "./basic";
import { responsive } from "./responsive";
import { cheatsheet, cheatsheetComputed } from "./cheatsheet";
import { responsiveIcons, tailwindIcon } from "./icons";

export const data = {
  basic,
  responsive,
  cheatsheet,
  cheatsheetComputed,
  responsiveIcons,
  tailwindIcon,
};
export const TailwindContext = React.createContext(null);
