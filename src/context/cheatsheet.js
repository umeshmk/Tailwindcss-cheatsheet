import {pick as _pick, chunk as _chunk, keys as _keys} from 'lodash';
import flexboxAndGrid from './flexbox-and-grid.json';
import layout from './layout.json';
import others from './others.json';
import background from './background.json';
import border from './border.json';
import typography from './typography.json';
import filters from './filters.json';
import interactivity from './interactivity.json';

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
  interactivity: createColArray(interactivity),
  table: createColArray(others.table),
  effect: others.effect,
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
  transition: createColArray(others.transition),
  transform: createColArray(others.transform),
  filters: filters,
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
  get cEffect() {
    return createColArray(cheatsheet.effect);
  },
  get cFilters() {
    return createColArray(cheatsheet.filters);
  },
};
