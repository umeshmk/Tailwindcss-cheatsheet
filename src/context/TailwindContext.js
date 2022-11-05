import React from 'react';
import {basic} from './basic';
import {responsive} from './responsive';
import {cheatsheet} from './cheatsheet';
import {responsiveIcons, tailwindIcon} from './icons';

export const data = {
  basic,
  responsive,
  cheatsheet,
  responsiveIcons,
  tailwindIcon,
};
export const TailwindContext = React.createContext(null);
