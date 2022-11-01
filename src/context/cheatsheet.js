import {pick as _pick, chunk as _chunk, keys as _keys} from 'lodash';
import layout from './layout.json';
import others from './others.json';
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
  background: {
    'bg-attachment': ['bg-fixed', 'bg-local', 'bg-scroll'],

    'bg-clip': [
      'bg-clip-border',
      'bg-clip-padding',
      'bg-clip-content',
      'bg-clip-text',
    ],
    'bg-color': [
      'bg-transparent',
      'bg-current',
      'bg-white',
      'bg-black',
      'bg-[ $color ]-[ 50-900 ]',
    ],
    'bg-opacity': ['bg-opacity-[ $OPACITY ]'],
    'bg-position': [
      'bg-{left|right|top|bottom}',
      'bg-center',
      'bg-{left|right}-{top|bottom}',
    ],

    'bg-image': [
      'bg-none',
      'bg-gradient-to-[ t|r|b|l ]',
      'bg-gradient-to-[ tl|tr|bl|br ]',
      //
    ],
    'gradient-Color-Stops': [
      'from-transparent',
      'from-current',
      'from-black',
      'from-white',
      'from-[ $color ]-[ 50-900 ]',
    ],
    'bg-repeat': [
      'bg-repeat',
      'bg-norepeat',
      'bg-repeat-[ x|y ]',
      'bg-repeat-round',
      'bg-repeat-space',
    ],
    'bg-size': ['bg-auto', 'bg-cover', 'bg-contain'],
  },
  border: {
    '[ border|divide|ring|ring-offset ]-color': [
      '[ border|divide|ring|ring-offset ]-transparent',
      '[ border|divide|ring|ring-offset ]-current',
      '[ border|divide|ring|ring-offset ]-white',
      '[ border|divide|ring|ring-offset ]-black',
      '[ border|divide|ring|ring-offset ]-{$color}-{50-900}',
    ],
    // "border-color": [
    //   "border-transparent",
    //   "border-current",
    //   "border-white",
    //   "border-black",
    //   "border-{$color}-{50-900}",
    // ],
    '[ border|divide ]-style': [
      '[ border|divide ]-solid',
      '[ border|divide ]-dotted',
      '[ border|divide ]-dashed',
      '[ border|divide ]-double',
      '[ border|divide ]-none',
    ],
    'border-width': [
      'border',
      'border-{0|2|4|8}',
      'border-{t|r|b|l}',
      'border-{t|r|b|l}-{0|2|4|8}',
    ],
    'border-opacity': ['border-opacity-[ $OPACITY ]'],
    'divide width': [
      'divide-[ x|y ]',
      'divide-[ x|y ]-reverse',
      'divide-[ x|y ]-[ 0|2|4|8 ]',
    ],
    '[ divide|ring ]-opacity': ['[ divide|ring ]-opacity-[ $OPACITY ]'],
    // "divide-style": [
    //   "divide-solid",
    //   "divide-dotted",
    //   "divide-dashed",
    //   "divide-double",
    //   "divide-none",
    // ],
    'ring-width': ['ring', 'ring-inset', 'ring-[ 0|1|2|4|8 ]'],
    'ring-offset-width': ['ring-offset-[ 0|1|2|4|8 ]'],

    'border-radius': [
      'rounded',
      'rounded-{sm|md|lg|xl}',
      'rounded-[2|3]xl',
      'rounded-{full|none}',
      'rounded-{t|r|b|l}',
      'rounded-{t|r|b|l}-{sm|md|lg|xl}',
      'rounded-{t|r|b|l}-[2|3]xl',
      'rounded-{t|r|b|l}-{full|none}',
      'rounded-{tr|tl|br|bl}',
      'rounded-{tr|tl|br|bl}-{sm|md|lg|xl}',
      'rounded-{tr|tl|br|bl}-[2|3]xl',
      'rounded-{tr|tl|br|bl}-{full|none}',
    ],
  },
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
    var x = cheatsheet.border;
    var keys = _chunk(_keys(x), 5);
    var p0 = _pick(x, keys[0]);
    var p1 = _pick(x, keys[1]);
    return [p0, p1];
  },
  get cBackground() {
    var x = cheatsheet.background;
    var keys = _chunk(_keys(x), 5);
    var p0 = _pick(x, keys[0]);
    var p1 = _pick(x, keys[1]);
    return [p0, p1];
  },
};
