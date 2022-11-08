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
  background: {title: 'Background', data: createColArray(background)},
  border: {title: 'Border', data: createColArray(border)},
  effect: {title: 'effect', data: createColArray(others.effect)},
  table: {title: 'table', data: createColArray(others.table)},
  svg: {title: 'svg', data: createColArray(others.svg)},
  interactivity: {title: 'Interactivity', data: createColArray(interactivity)},
  accessibility: {
    title: 'accessibility',
    data: createColArray(others.accessibility),
  },
  sizing: {title: 'Sizing', data: createColArray(others.sizing)},
  spacing: {title: 'spacing', data: createColArray(others.spacing)},
  typography: {title: 'Typography', data: createColArray(typography)},
  layout: {title: 'Layout', data: createColArray(layout)},
  flexbox: {title: 'flex', data: createColArray(flexboxAndGrid.flexbox)},
  grid: {title: 'Grid', data: createColArray(flexboxAndGrid.grid)},
  flexboxAndGrid: {
    title: 'Flex/Grid',
    data: createColArray(flexboxAndGrid.flexboxAndGrid),
  },
  transition: {
    title: 'transition & Animation',
    data: createColArray(others.transition),
  },
  transform: {title: 'transform', data: createColArray(others.transform)},
  filters: {title: 'filters', data: createColArray(filters)},
};

export let cheatsheetOrder = (() => {
  const order = (sm, lg) => {
    return {sm: sm, lg: lg ?? sm};
  };
  return {
    flexbox: order(1, 1),
    grid: order(2, 2),
    flexboxAndGrid: order(3, 4),
    background: order(4),
    border: order(5),
    sizing: order(6, 7),
    spacing: order(7, 3),
    typography: order(8),
    layout: order(9),
    interactivity: order(11),
    transition: order(12),
    transform: order(13),
    filters: order(14),
    effect: order(15, 16),
    table: order(16, 15),
    svg: order(16),
    accessibility: order(17),
  };
})();
