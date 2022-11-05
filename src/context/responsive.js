import {responsiveIcons} from './icons';
const {r1, r2, r3, r4, r5, r6} = responsiveIcons;

export let responsive = {
  Mobile: {size: '<640px', class: 'flex', icon: r1},
  'Tablet (Portrait)': {size: '640px', class: 'sm:flex', icon: r2},
  'Tablet (Landscape)': {size: '768px', class: 'md:flex', icon: r3},
  Laptop: {size: '1024px', class: 'lg:flex', icon: r4},
  Desktop: {size: '1280px', class: 'xl:flex', icon: r5},
  DesktopLarge: {size: '1536px', class: '2xl:flex', icon: r6},
};
