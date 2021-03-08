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
    flexparent: cheatsheet.flexbox.parent,
    flexchildren: cheatsheet.flexbox.children
  },
  computed: {
    cLayout: function() {
      var x = cheatsheet.layout;
      var keys = _.chunk(_.keys(x), 4);
      var p0 = _.pick(x, keys[0]);
      var p1 = _.pick(x, keys[1]);
      var p2 = _.pick(x, keys[2]);

      return [p0, p1, p2];
    },
    cTypography: function() {
      var x = cheatsheet.typography;
      var keys = _.chunk(_.keys(x), 4);
      var p0 = _.pick(x, keys[0]);
      var p1 = _.pick(x, keys[1]);
      var p2 = _.pick(x, keys[2]);

      return [p0, p1, p2];
    },
    cSizing: function() {
      var x = cheatsheet.sizing;
      var keys = _.chunk(_.keys(x), 3);
      var p0 = _.pick(x, keys[0]);
      var p1 = _.pick(x, keys[1]);
      return [p0, p1];
    }
  }
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
    variants: basic.variants
  },
  computed: {
    i: function() {
      // $("#icons").text("<div>hello</div>");
      return 1;
    }
  }
});

$("#icons").html(responsiveIcons);
$("#tailwindIcon").html(tailwindIcon);
