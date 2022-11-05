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
  background: createColArray(background),
  border: createColArray(border),
  interactivity: createColArray(interactivity),
  table: createColArray(others.table),
  effect: createColArray(others.effect),
  svg: createColArray(others.svg),
  accessibility: createColArray(others.accessibility),
  sizing: createColArray(others.sizing),
  spacing: createColArray(others.spacing),
  typography: createColArray(typography),
  layout: createColArray(layout),
  flexbox: createColArray(flexboxAndGrid.flexbox),
  grid: createColArray(flexboxAndGrid.grid),
  flexboxAndGrid: createColArray(flexboxAndGrid.flexboxAndGrid),
  transition: createColArray(others.transition),
  transform: createColArray(others.transform),
  filters: createColArray(filters),
};
