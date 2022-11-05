import React from 'react';
import {basic} from './basic';
import {responsive} from './responsive';
import {cheatsheet} from './cheatsheet';
import {responsiveIcons} from './icons';

export const data = {
  basic,
  responsive,
  cheatsheet,
  responsiveIcons,
};
export const TailwindContext = React.createContext(null);
