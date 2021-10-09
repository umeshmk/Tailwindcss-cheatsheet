import { pick as _pick, chunk as _chunk, keys as _keys } from "lodash";

export let cheatsheet = {
  background: {
    "bg-attachment": ["bg-fixed", "bg-local", "bg-scroll"],

    "bg-clip": [
      "bg-clip-border",
      "bg-clip-padding",
      "bg-clip-content",
      "bg-clip-text",
    ],
    "bg-color": [
      "bg-transparent",
      "bg-current",
      "bg-white",
      "bg-black",
      "bg-[ $color ]-[ 50-900 ]",
    ],
    "bg-opacity": ["bg-opacity-[ $OPACITY ]"],
    "bg-position": [
      "bg-{left|right|top|bottom}",
      "bg-center",
      "bg-{left|right}-{top|bottom}",
    ],

    "bg-image": [
      "bg-none",
      "bg-gradient-to-[ t|r|b|l ]",
      "bg-gradient-to-[ tl|tr|bl|br ]",
      //
    ],
    "gradient-Color-Stops": [
      "from-transparent",
      "from-current",
      "from-black",
      "from-white",
      "from-[ $color ]-[ 50-900 ]",
    ],
    "bg-repeat": [
      "bg-repeat",
      "bg-norepeat",
      "bg-repeat-[ x|y ]",
      "bg-repeat-round",
      "bg-repeat-space",
    ],
    "bg-size": ["bg-auto", "bg-cover", "bg-contain"],
  },
  border: {
    "[ border|divide|ring|ring-offset ]-color": [
      "[ border|divide|ring|ring-offset ]-transparent",
      "[ border|divide|ring|ring-offset ]-current",
      "[ border|divide|ring|ring-offset ]-white",
      "[ border|divide|ring|ring-offset ]-black",
      "[ border|divide|ring|ring-offset ]-{$color}-{50-900}",
    ],
    // "border-color": [
    //   "border-transparent",
    //   "border-current",
    //   "border-white",
    //   "border-black",
    //   "border-{$color}-{50-900}",
    // ],
    "[ border|divide ]-style": [
      "[ border|divide ]-solid",
      "[ border|divide ]-dotted",
      "[ border|divide ]-dashed",
      "[ border|divide ]-double",
      "[ border|divide ]-none",
    ],
    "border-width": [
      "border",
      "border-{0|2|4|8}",
      "border-{t|r|b|l}",
      "border-{t|r|b|l}-{0|2|4|8}",
    ],
    "border-opacity": ["border-opacity-[ $OPACITY ]"],
    "divide width": [
      "divide-[ x|y ]",
      "divide-[ x|y ]-reverse",
      "divide-[ x|y ]-[ 0|2|4|8 ]",
    ],
    "[ divide|ring ]-opacity": ["[ divide|ring ]-opacity-[ $OPACITY ]"],
    // "divide-style": [
    //   "divide-solid",
    //   "divide-dotted",
    //   "divide-dashed",
    //   "divide-double",
    //   "divide-none",
    // ],
    "ring-width": ["ring", "ring-inset", "ring-[ 0|1|2|4|8 ]"],
    "ring-offset-width": ["ring-offset-[ 0|1|2|4|8 ]"],

    "border-radius": [
      "rounded",
      "rounded-{sm|md|lg|xl}",
      "rounded-[2|3]xl",
      "rounded-{full|none}",
      "rounded-{t|r|b|l}",
      "rounded-{t|r|b|l}-{sm|md|lg|xl}",
      "rounded-{t|r|b|l}-[2|3]xl",
      "rounded-{t|r|b|l}-{full|none}",
      "rounded-{tr|tl|br|bl}",
      "rounded-{tr|tl|br|bl}-{sm|md|lg|xl}",
      "rounded-{tr|tl|br|bl}-[2|3]xl",
      "rounded-{tr|tl|br|bl}-{full|none}",
    ],
  },
  interactivity: {
    cursor: [
      "cursor-auto",
      "cursor-default",
      "cursor-pointer",
      "cursor-wait",
      "cursor-text",
      "cursor-move",
      "cursor-not-allowed",
    ],
    "user-select": ["select-none", "select-text", "select-all", "select-auto"],
    resize: ["resize", "resize-{x/y}", "resize-none"],
    "pointer-events": ["pointer-events-auto", "pointer-events-none"],
    outline: ["outline-none", "outline-white", "outline-black"],
    appearance: ["appearance-none"],
  },
  table: {
    collapse: ["border-collapse", "border-separate"],
    Layout: ["table-auto", "table-fixed"],
  },
  effect: {
    opacity: ["opacity-[ $OPACITY  ]"],
    "box-shadow": [
      "shadow",
      "shadow-[ sm|md|lg|xl|2xl ]",
      "shadow-inner",
      "shadow-none",
    ],
  },
  svg: {
    fill: ["fill-current"],
    stroke: ["stroke-current"],
    "stroke-width": ["stroke-[ 0|1|2 ]"],
  },
  accessibility: {
    "screen-reader": ["sr-only", "not-sr-only"],
  },
  sizing: {
    width: [
      "w-auto",
      "w-[ $SPACING  ]",
      "w-1/2",
      "w-{1-2}/3",
      "w-{1-3}/4",
      "w-{1-4}/5",
      "w-{1-5}/6",
      "w-{1-11}/12",
      "w-full",
      "w-screen",
      "w-min",
      "w-max",
    ],
    "min-width": ["min-w-0", "min-w-full", "min-w-min", "min-w-max"],
    "max-width": [
      "max-w-0",
      "max-w-none",
      "max-w-[ xs|sm|md|lg ]",
      "max-w-xl",
      "max-w-{2-7}xl",
      "max-w-full",
      "max-w-full",
      "max-w-min",
      "max-w-max",
      "max-w-prose",
      "max-w-screen-[ xs|sm|md|lg ]",
      "max-w-screen-[ xl|2xl ]",
    ],
    height: [
      "h-auto",
      "h-[ $SPACING  ]",
      "h-1/2",
      "h-{1-2}/3",
      "h-{1-3}/4",
      "h-{1-4}/5",
      "h-{1-5}/6",
      "h-full",
      "h-screen",
    ],
    "min-height": ["min-h-0", "min-h-full", "min-h-screen"],
    "max-height": [
      "max-h-[ $SPACING  ]",
      //
      "max-h-full",
      "max-h-screen",
    ],
  },
  spacing: {
    padding: [
      "p-[ $SPACING  ]",
      "p[ x|y ]-[ $SPACING  ]",
      "p[ t|r|b|l ]-[ $SPACING  ]",
    ],
    margin: [
      "m-auto",
      "-m-[ $SPACING  ]",
      "-m[ x|y ]-[ $SPACING  ]",
      "-m[ t|r|b|l ]-[ $SPACING  ]",
      "m-[ $SPACING  ]",
      "m[ x|y ]-[ $SPACING  ]",
      "m[ t|r|b|l ]-[ $SPACING  ]",
    ],
    spaceBetween: [
      "-space-[ x|y ]-[ $SPACING  ]",
      "space-[ x|y ]-[ $SPACING  ]",
      "space-[ x|y ]-reverse",
    ],
  },
  typography: {
    Family: ["font-sans", "font-serif", "font-mono"],
    size: [
      "text-xs",
      "text-sm",
      "text-base",
      "text-lg",
      "text-xl",
      "text-[ 2-9 ]xl",
    ],
    smoothing: ["antialiased", "subpixel-antialiased"],
    style: ["italic", "not-italic"],
    weight: [
      "font-thin",
      "font-extralight",
      "font-light",
      "font-normal",
      "font-medium",
      "font-semibold",
      "font-bold",
      "font-extrabold",
      "font-black",
    ],
    "font-variant-numeric": [
      "normal-nums",
      "ordinal",
      "slashed-zero",
      "lining-nums",
      "oldstyle-nums",
      "proportional-nums",
      "tabular-nums",
      "diagonal-fractions",
      "stacked-fractions",
    ],
    "letter-spacing": [
      "tracking-tighter",
      "tracking-tight",
      "tracking-normal",
      "tracking-wide",
      "tracking-wider",
      "tracking-widest",
    ],
    "line-height": [
      "leading-[ 3-10 ]",
      "leading-none",
      "leading-tight",
      "leading-snug",
      "leading-normal",
      "leading-relaxed",
      "leading-loose",
    ],
    "list-style-type": ["list-none", "list-disc", "list-decimal"],
    "list-style-positions": ["list-inside", "list-outside"],
    "[placeholder/text]-color": [
      "[placeholder/text]-transparent",
      "[placeholder/text]-current",
      "[placeholder/text]-[ white/black ]",
      "[placeholder/text]-[color}-[50-900}",
    ],
    "[placeholder|text]-opacity": ["[placeholder|text]-opacity-[ $OPACITY ]"],
    "vertical-align": [
      "align-baseline",
      "align-top",
      "align-middle",
      "align-bottom",
      "align-text-top",
      "align-text-bottom",
    ],
    "white-spacing": [
      "whitespacing-normal",
      "whitespacing-no-wrap",
      "whitespacing-pre",
      "whitespacing-pre-line",
      "whitespacing-pre-wrap",
    ],
    "text-align": ["text-left", "text-right", "text-center", "text-justify"],
    "text-decoration": ["underline", "no-underline", "line-through"],
    "text-overflow": ["truncate", "overflow-ellipsis", "overflow-clip"],
    transform: ["uppercase", "lowercase", "capitalize", "normal-case"],
    "word-break": ["break-normal", "break-words", "break-all"],
  },
  flexbox: {
    direction: ["flex-row", "flex-col", "flex-row-reverse", "flex-col-reverse"],
    wrap: ["flex-wrap", "flex-wrap-reverse", "flex-nowrap"],
    flex: ["flex-initial", "flex-1", "flex-auto", "flex-none"],
    "flex-grow": ["flex-grow", "flex-grow-0"],
    "flex-shrink": ["flex-shrink", "flex-shrink-0"],
    "flex-order": ["order-first", "order-last", "order-none", "order-{1-12}"],
  },
  layout: {
    Container: ["container"],
    "Box-Sizing": ["box-border", "box-content"],
    Float: ["float-right", "float-left", "float-none"],
    Clear: ["clear-left", "clear-right", "clear-both", "clear-none"],

    Visible: ["visible", "invisible"],
    "z-index": ["z-[ 0|10|20|30|40|50 ]", "z-auto"],
    Overflow: [
      "overflow-auto",
      "overflow-hidden",
      "overflow-visible",
      "overflow-scroll",
      "overflow-[ x|y ]-auto",
      "overflow-[ x|y ]-hidden",
      "overflow-[ x|y ]-visible",
      "overflow-[ x|y ]-scroll",
    ],
    "overscroll-behavior": [
      "overscroll-auto",
      "overscroll-contain",
      "overscroll-none",
      "overscroll-[ x|y ]-auto",
      "overscroll-[ x|y ]-contain",
      "overscroll-[ x|y ]-none",
    ],
    "Object-Fit": [
      "object-contain",
      "object-cover",
      "object-fill",
      "object-none",
      "object-scale-down",
    ],
    "Object-Positions": [
      "object-center",
      "object-[ top|bottom ]",
      "object-[ left|right ]",
      "object-[ left|right ]-[ top|bottom ]",
    ],

    Display: [
      "[ block|inline|inline-block ]",
      "[ flex|inline-flex ]",
      "[ grid|inline-grid ]",
      "table",
      "table-[ caption|cell ]",
      "table-[ row|column ]",
      "table-[ row|column ]-group",
      "table-[ header|footer ]-group",
      "flow-root",
      "contents",
      "hidden",
    ],
    Positions: ["static", "relative", "absolute", "fixed", "sticky"],

    "Positions-TRBL": [
      "[ top|right|bottom|left ]-[ $SPACING ]",
      "[ top|right|bottom|left ]-auto",
      "[ top|right|bottom|left ]-full",
      "inset-[$SPACING]",
      "inset-auto",
      "inset-full",
      "inset-1/[ 2|3|4 ]",
      "inset-2/[ 3|4 ]",
      "inset-3/4",
      "inset-[x|y]-[$SPACING]",
      "inset-[x|y]-auto",
      "inset-[x|y]-full",
      "inset-[x|y]-1/[ 2|3|4 ]",
      "inset-[x|y]-2/[ 3|4 ]",
      "inset-[x|y]-3/4",
    ],
  },
  grid: {
    "grid-template-columns": ["grid-cols-[1-12]", "grid-cols-none"],

    "grid-column-[ start|end ]": [
      "col-auto",
      "col-span-[ 1-12 ]",
      "col-span-full",
      "col-start-[ 1-13 ]",
      "col-start-auto",
      "col-end-[ 1-13 ]",
      "col-end-auto",
    ],

    "grid-template-rows": ["grid-rows-[ 1-6 ]", "grid-rows-none"],

    "grid-row-[ start|end ]": [
      "row-auto",
      "row-span-[ 1-6 ]",
      "row-span-full",
      "row-start-[ 1-7 ]",
      "row-start-auto",
      "row-end-[ 1-7 ]",
      "row-end-auto",
    ],

    "grid-auto-flow": [
      "grid-flow-row",
      "grid-flow-col",
      "grid-flow-row-dense",
      "grid-flow-col-dense",
    ],

    "grid-auto-columns": [
      "auto-cols-auto",
      "auto-cols-min",
      "auto-cols-max",
      "auto-cols-fr",
    ],

    "grid-auto-rows": [
      "auto-rows-auto",
      "auto-rows-min",
      "auto-rows-max",
      "auto-rows-fr",
    ],

    gap: ["gap-[ $SPACING ]", "gap-x-[ $SPACING ]", "gap-y-[ $SPACING ]"],
  },
  boxAlignment: {
    "justify-content": [
      "justify-start",
      "justify-center",
      "justify-end",
      "justify-between",
      "justify-around",
      "justify-evenly",
    ],

    "justify-items": [
      "justify-items-auto",
      "justify-items-start",
      "justify-items-end",
      "justify-items-center",
      "justify-items-stretch",
    ],

    "justify-self": [
      "justify-self-auto",
      "justify-self-start",
      "justify-self-end",
      "justify-self-center",
      "justify-self-stretch",
    ],

    "align-content": [
      "content-center",
      "content-start",
      "content-end",
      "content-between",
      "content-around",
      "content-evenly",
    ],

    "align-items": [
      "items-start",
      "items-end",
      "items-center",
      "items-baseline",
      "items-stretch",
    ],

    "align-self": [
      "self-auto",
      "self-start",
      "self-end",
      "self-center",
      "self-stretch",
    ],

    "place-content": [
      "place-content-center",
      "place-content-start",
      "place-content-end",
      "place-content-between",
      "place-content-around",
      "place-content-evenly",
      "place-content-stretch",
    ],

    "place-items": [
      "place-items-auto",
      "place-items-start",
      "place-items-end",
      "place-items-center",
      "place-items-stretch",
    ],

    "place-self": [
      "place-self-auto",
      "place-self-start",
      "place-self-end",
      "place-self-center",
      "place-self-stretch",
    ],
  },
  transition: {
    property: [
      "transition-none",
      "transition-all",
      "transition",
      "transition-colors",
      "transition-opacity",
      "transition-shadow",
      "transition-transform",
    ],
    duration: ["duration-[ 75|100|150|200|300|500|700|1000  ]"],
    "timing function": ["ease-linear", "ease-in", "ease-out", "ease-in-out"],
    delay: ["delay-[ 75|100|150|200|300|500|700|1000  ]"],
    animation: [
      "animate-none",
      "animate-spin",
      "animate-ping",
      "animate-pulse",
      "animate-bounce",
    ],
  },
  transform: {
    tranform: ["transform", "transform-gpu", "transform-none"],
    "transform-origin": [
      "origin-[ top|right|bottom|left ]",
      "origin-[ top|bottom ]-[ right|left ]",
      "origin-center",
    ],
    scale: [
      "scale-[ 0|50|75|90|95|100|105|110|125|150 ]",
      "scale-[ x|y ]-[ 0|50|75|90|95|100|105|110|125|150 ]",
    ],
    rotate: [
      "rotate-[ 0.1.2.3.6.12.45.90.180]",
      "-rotate-[ 1.2.3.6.12.45.90.180]",
    ],
    translate: [
      "{-}translate-[ x|y ]-[ $spacing ]",
      "{-}translate-[ x|y ]-1/2",
      "{-}translate-[ x|y ]-[ 1|2 ]/3",
      "{-}translate-[ x|y ]-[ 1|2|3 ]/4",
      "{-}translate-[ x|y ]-[ full| ]",
    ],
    skew: ["{-}skew-[ x|y ]-[ 0.1.2.3.6.12]"],
  },
};

export let cheatsheetComputed = {
  get cLayout() {
    var x = cheatsheet.layout;
    var keys = _chunk(_keys(x), 5);
    // var p0 = _pick(x, keys[0]);
    var p0 = _pick(x, [
      "Container",
      "Box-Sizing",
      "Float",
      "Clear",
      "Visible",
      // "z-index",
      // "Object-Fit",
      "Positions",
    ]);
    // var p1 = _pick(x, keys[1]);
    var p1 = _pick(x, [
      "Overflow",
      "overscroll-behavior",
      "Object-Fit",
      "Object-Positions",
    ]);
    // var p2 = _pick(x, keys[2]);
    var p2 = _pick(x, ["Display", "Positions-TRBL", "z-index"]);

    // return [p0, p1, p2, p3];
    return [p0, p1, p2];
  },
  get cTypography() {
    var x = cheatsheet.typography;
    var keys = _chunk(_keys(x), 5);
    var p0 = _pick(x, keys[0]);
    var p1 = _pick(x, keys[1]);
    var p2 = _pick(x, keys[2]);
    var p3 = _pick(x, keys[3]);

    return [p0, p1, p2, p3];
  },
  get cSizing() {
    var x = cheatsheet.sizing;
    var keys = _chunk(_keys(x), 3);
    var p0 = _pick(x, keys[0]);
    var p1 = _pick(x, keys[1]);
    return [p0, p1];
  },
  get cGrid() {
    var x = cheatsheet.grid;
    var keys = _chunk(_keys(x), 4);
    var p0 = _pick(x, keys[0]);
    var p1 = _pick(x, keys[1]);
    return [p0, p1];
  },
  get cBoxAlignment() {
    var x = cheatsheet.boxAlignment;
    var keys = _chunk(_keys(x), 5);
    var p0 = _pick(x, keys[0]);
    var p1 = _pick(x, keys[1]);
    return [p0, p1];
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
