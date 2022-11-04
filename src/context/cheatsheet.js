import {pick as _pick, chunk as _chunk, keys as _keys} from 'lodash';
import layout from './layout.json';
import others from './others.json';
import background from './background.json';
import border from './border.json';
import typography from './typography.json';
import flexboxAndGrid from './flexbox-and-grid.json';

const createColArray = (data) => {
  let maxCol = 1;
  Object.values(data).map((v) => {
    if (v.col > maxCol) maxCol = v.col;
  });

  // console.log('data', data);
  const finalArray = [];
  for (let i = 1; i <= maxCol; i++) {
    const colObj = {};
    Object.entries(data).map(([k, v]) => {
      if (v.col === i) colObj[k] = v.data;
    });
    // console.log(`col-${i}`, colObj);
    finalArray.push(colObj);
  }
  // console.log('final array', finalArray);
  return finalArray;
};

export let cheatsheet = {
  background: background,
  border: border,
  interactivity: {
    cursor: [
      'cursor-auto',
      'cursor-default',
      'cursor-pointer',
      'cursor-wait',
      'cursor-text',
      'cursor-move',
      'cursor-not-allowed',
    ],
    'user-select': ['select-none', 'select-text', 'select-all', 'select-auto'],
    resize: ['resize', 'resize-{x/y}', 'resize-none'],
    'pointer-events': ['pointer-events-auto', 'pointer-events-none'],
    outline: ['outline-none', 'outline-white', 'outline-black'],
    appearance: ['appearance-none'],
  },
  table: {
    collapse: ['border-collapse', 'border-separate'],
    Layout: ['table-auto', 'table-fixed'],
  },
  effect: {
    opacity: ['opacity-[ $OPACITY  ]'],
    'box-shadow': [
      'shadow',
      'shadow-[ sm|md|lg|xl|2xl ]',
      'shadow-inner',
      'shadow-none',
    ],
  },
  svg: {
    fill: ['fill-current'],
    stroke: ['stroke-current'],
    'stroke-width': ['stroke-[ 0|1|2 ]'],
  },
  accessibility: {
    'screen-reader': ['sr-only', 'not-sr-only'],
  },
  sizing: others.sizing,
  spacing: others.spacing,
  typography: typography,
  flexbox: flexboxAndGrid.flexbox,
  layout: layout,
  grid: flexboxAndGrid.grid,
  flexboxAndGrid: flexboxAndGrid.flexboxAndGrid,
  transition: {
    property: [
      'transition-none',
      'transition-all',
      'transition',
      'transition-colors',
      'transition-opacity',
      'transition-shadow',
      'transition-transform',
    ],
    duration: ['duration-[ 75|100|150|200|300|500|700|1000  ]'],
    'timing function': ['ease-linear', 'ease-in', 'ease-out', 'ease-in-out'],
    delay: ['delay-[ 75|100|150|200|300|500|700|1000  ]'],
    animation: [
      'animate-none',
      'animate-spin',
      'animate-ping',
      'animate-pulse',
      'animate-bounce',
    ],
  },
  transform: {
    tranform: ['transform', 'transform-gpu', 'transform-none'],
    'transform-origin': [
      'origin-[ top|right|bottom|left ]',
      'origin-[ top|bottom ]-[ right|left ]',
      'origin-center',
    ],
    scale: [
      'scale-[ 0|50|75|90|95|100|105|110|125|150 ]',
      'scale-[ x|y ]-[ 0|50|75|90|95|100|105|110|125|150 ]',
    ],
    rotate: [
      'rotate-[ 0.1.2.3.6.12.45.90.180]',
      '-rotate-[ 1.2.3.6.12.45.90.180]',
    ],
    translate: [
      '{-}translate-[ x|y ]-[ $spacing ]',
      '{-}translate-[ x|y ]-1/2',
      '{-}translate-[ x|y ]-[ 1|2 ]/3',
      '{-}translate-[ x|y ]-[ 1|2|3 ]/4',
      '{-}translate-[ x|y ]-[ full| ]',
    ],
    skew: ['{-}skew-[ x|y ]-[ 0.1.2.3.6.12]'],
  },
};

export let cheatsheetComputed = {
  get cLayout() {
    return createColArray(cheatsheet.layout);
  },
  get cTypography() {
    return createColArray(cheatsheet.typography);
  },
  get cSpacing() {
    return createColArray(cheatsheet.spacing);
  },
  get cSizing() {
    return createColArray(cheatsheet.sizing);
  },
  get cGrid() {
    return createColArray(cheatsheet.grid);
  },
  get cFlexbox() {
    return createColArray(cheatsheet.flexbox);
  },
  get cFlexboxAndGrid() {
    return createColArray(cheatsheet.flexboxAndGrid);
  },
  get cBorder() {
    return createColArray(cheatsheet.border);
  },
  get cBackground() {
    return createColArray(cheatsheet.background);
  },
};
