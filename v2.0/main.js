// =================================================
// VUE
var vue = new Vue({
  el: "#app-1",
  data: {
    // responsive: responsive,
    cheatsheet: cheatsheet,
    background: cheatsheet.background,
    border: cheatsheet.border,
    sizing: cheatsheet.sizing,
    interactivity: cheatsheet.interactivity,
    layout: cheatsheet.layout,
    typography: cheatsheet.typography,
    table: cheatsheet.others.table,
    effect: cheatsheet.others.effect,
    svg: cheatsheet.others.svg,
    spacing: cheatsheet.spacing,
    flexbox: cheatsheet.flexbox,
    // flexparent: cheatsheet.flexbox.parent,
    // flexchildren: cheatsheet.flexbox.children,
    // grid: cheatsheet.grid,
    transition: cheatsheet.transition,
    transform: cheatsheet.transform,
    accessibility: cheatsheet.others.accessibility,
  },
  computed: {
    cLayout: function () {
      var x = cheatsheet.layout;
      var keys = _.chunk(_.keys(x), 5);
      // var p0 = _.pick(x, keys[0]);
      var p0 = _.pick(x, [
        "Container",
        "Box-Sizing",
        "Float",
        "Clear",
        "Visible",
        // "z-index",
        // "Object-Fit",
        "Positions",
      ]);
      // var p1 = _.pick(x, keys[1]);
      var p1 = _.pick(x, [
        "Overflow",
        "overscroll-behavior",
        "Object-Fit",
        "Object-Positions",
      ]);
      // var p2 = _.pick(x, keys[2]);
      var p2 = _.pick(x, ["Display", "Positions-TRBL", "z-index"]);

      // return [p0, p1, p2, p3];
      return [p0, p1, p2];
    },
    cTypography: function () {
      var x = cheatsheet.typography;
      var keys = _.chunk(_.keys(x), 5);
      var p0 = _.pick(x, keys[0]);
      var p1 = _.pick(x, keys[1]);
      var p2 = _.pick(x, keys[2]);
      var p3 = _.pick(x, keys[3]);

      return [p0, p1, p2, p3];
    },
    cSizing: function () {
      var x = cheatsheet.sizing;
      var keys = _.chunk(_.keys(x), 3);
      var p0 = _.pick(x, keys[0]);
      var p1 = _.pick(x, keys[1]);
      return [p0, p1];
    },
    cGrid: function () {
      var x = cheatsheet.grid;
      var keys = _.chunk(_.keys(x), 4);
      var p0 = _.pick(x, keys[0]);
      var p1 = _.pick(x, keys[1]);
      return [p0, p1];
    },
    cBoxAlignment: function () {
      var x = cheatsheet.boxAlignment;
      var keys = _.chunk(_.keys(x), 5);
      var p0 = _.pick(x, keys[0]);
      var p1 = _.pick(x, keys[1]);
      return [p0, p1];
    },
    cBorder: function () {
      var x = cheatsheet.border;
      var keys = _.chunk(_.keys(x), 5);
      var p0 = _.pick(x, keys[0]);
      var p1 = _.pick(x, keys[1]);
      return [p0, p1];
    },
    cBackground: function () {
      var x = cheatsheet.background;
      var keys = _.chunk(_.keys(x), 5);
      var p0 = _.pick(x, keys[0]);
      var p1 = _.pick(x, keys[1]);
      return [p0, p1];
    },
  },
});

var responsiveApp = new Vue({
  el: "#app-responsive",
  data: {
    icons: responsiveIcons,
    responsive: responsive,
    colors: basic.colors,
    spacing: basic.spacing,
    pseudoClass: basic.pseudoClass,
    functions: basic.functions,
    variants: basic.variants,
    opacity: basic.opacity,
    colorsNum: basic.colorsNum,
  },
  computed: {
    i: function () {
      // $("#icons").text("<div>hello</div>");
      return 1;
    },
  },
});

$("#icons").html(responsiveIcons);
$("#tailwindIcon").html(tailwindIcon);
