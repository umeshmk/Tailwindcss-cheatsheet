var responsive = {
  Mobile: ["<640px", "flex"],
  "Tablet (Portrait)": ["640px", "sm:flex"],
  "Tablet (Landscape)": ["768px", "md:flex"],
  Laptop: ["1024px", "lg:flex"],
  Desktop: ["1280px", "xl:flex"]
};

var basic = {
  spacing: [
    "0",
    "px",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "8",
    "10",
    "12",
    "16",
    "20",
    "24",
    "32",
    "40",
    "48",
    "56",
    "64"
  ],

  colors: [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink"
  ],

  pseudoClass: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "focus",
    "active",
    "visited",
    "disabled"
  ],
  functions: ["tailwind", "apply", "responsive", "variants", "screen"],
  variants: {
    "all-utility": ["responsive"],
    "background-color": ["hover", "focus"],
    "border-color": ["hover", "focus"],
    "box-shadow": ["hover", "focus"],
    "font-weight": ["hover", "focus"],
    opacity: ["hover", "focus"],
    outline: ["focus"],
    "text-color": ["hover", "focus"],
    "text-decoration": ["hover", "focus"]
  }
};

var cheatsheet = {
  background: {
    "bg-attachment": ["bg-fixed", "bg-local", "bg-scroll"],
    "bg-color": [
      "bg-transparent",
      "bg-white",
      "bg-black",
      "bg-{color}-{100-900}"
    ],
    "bg-position": [
      "bg-{left / right / top / bottom}",
      "bg-center",
      "bg-{left / right}-{top / bottom}"
    ],
    "bg-repeat": [
      "bg-repeat",
      "bg-norepeat",
      "bg-repeat-{x / y}",
      "bg-repeat-{round / space}"
    ],
    "bg-size": ["bg-auto", "bg-cover", "bg-contain"]
  },
  border: {
    "border-color": [
      "border-transparent",
      "border-white",
      "border-black",
      "border-{color}-{100-900}"
    ],
    "border-style": [
      "border-solid",
      "border-dotted",
      "border-dashed",
      "border-double",
      "border-none"
    ],
    "border-width": [
      "border-0",
      "border",
      "border-{2/4/8}",
      "border-{t/r/b/l}",
      "border-{t/r/b/l}-0",
      "border-{t/r/b/l}-{2/4/8}"
    ],
    "border-radius": [
      "rounded-{none/sm}",
      "rounded",
      "rounded-{lg/full}",
      "rounded-{t/r/b/l}-{none/sm}",
      "rounded-{t/r/b/l}",
      "rounded-{t/r/b/l}-{lg/full}",
      "rounded-{tr/tl/br/bl}-{none/sm}",
      "rounded-{tr/tl/br/bl}",
      "rounded-{tr/tl/br/bl}-{lg/full}"
    ]
  },
  interactivity: {
    cursor: [
      "cursor-auto",
      "cursor-default",
      "cursor-pointer",
      "cursor-wait",
      "cursor-text",
      "cursor-move",
      "cursor-not-allowed"
    ],
    "user-select": ["select-none", "select-text", "select-all", "select-auto"],
    resize: ["resize", "resize-{x/y}", "resize-none"],
    "pointer-events": ["pointer-events-auto", "pointer-events-none"],
    outline: ["outline-none"],
    appearance: ["appearance-none"]
  },
  others: {
    table: {
      collapse: ["border-collapse", "border-separate"],
      Layout: ["table-auto", "table-fixed"]
    },
    effect: {
      opacity: [
        "opacity-0",
        "opacity-25",
        "opacity-50",
        "opacity-75",
        "opacity-100"
      ],
      "box-shadow": [
        "shadow",
        "shadow-md",
        "shadow-lg",
        "shadow-xl",
        "shadow-2xl",
        "shadow-inner",
        "shadow-outline",
        "shadow-none"
      ]
    },
    svg: {
      fill: ["fill-current"],
      stroke: ["stroke-current"]
    }
  },
  sizing: {
    width: [
      "w-0",
      "w-px",
      "w-auto",
      "w-{0-64}",
      "w-1/2",
      "w-{1-2}/3",
      "w-{1-3}/4",
      "w-{1-4}/5",
      "w-{1-5}/6",
      "w-{1-11}/12",
      "w-full",
      "w-screen"
    ],
    "min-width": ["min-w-0", "min-w-full"],
    "max-width": [
      "max-w-xs",
      "max-w-sm",
      "max-w-md",
      "max-w-lg",
      "max-w-xl",
      "max-w-{2-6}xl",
      "max-w-full"
    ],
    height: ["h-{0-64}", "h-px", "h-auto", "h-full", "h-screen"],
    "min-height": ["min-h-0", "min-h-full", "min-h-screen"],
    "max-height": ["max-h-full", "max-h-screen"]
  },
  spacing: {
    padding: [
      "p-px",
      "p-{0-64}",
      "p{x/y}-px",
      "p{x/y}-{0-64}",
      "p{t/r/b/l}-px",
      "p{t/r/b/l}-{0-64}"
    ],
    margin: [
      "{-}m-px",
      "m-auto",
      "{-}m-{0-64}",
      "{-}m{x/y}-px",
      "{-}m{x/y}-{0-64}",
      "{-}m{t/r/b/l}-px",
      "{-}m{t/r/b/l}-{0-64}"
    ]
  },
  typography: {
    Family: ["font-sans", "font-serif", "font-mono"],
    size: [
      "text-xs",
      "text-sm",
      "text-base",
      "text-lg",
      "text-xl",
      "text-2xl",
      "text-3xl",
      "text-4xl",
      "text-5xl",
      "text-6xl"
    ],
    smoothing: ["antialiased", "subpixel-antialiased"],
    style: ["italic", "not-italic"],
    weight: [
      "font-hairline",
      "font-thin",
      "font-light",
      "font-normal",
      "font-medium",
      "font-semibold",
      "font-bold",
      "font-extrabold",
      "font-black"
    ],
    "letter-spacing": [
      "tracking-tighter",
      "tracking-tight",
      "tracking-normal",
      "tracking-wide",
      "tracking-wider",
      "tracking-widest"
    ],
    "line-height": [
      "leading-none",
      "leading-tight",
      "leading-snug",
      "leading-normal",
      "leading-relaxed",
      "leading-loose"
    ],
    "list-style-type": ["list-none", "list-disc", "list-decimal"],
    "list-style-positions": ["list-inside", "list-outside"],
    "[placeholder/text}-color": [
      "[placeholder/text}-transparent",
      "[placeholder/text}-white",
      "[placeholder/text}-black",
      "[placeholder/text}-[color}-[100-900}"
    ],
    "text-align": ["text-left", "text-right", "text-center", "text-justify"],
    "text-decoration": ["underline", "no-underline", "line-through"],
    transform: ["uppercase", "lowercase", "capitalize", "normal-case"],
    "vertical-align": [
      "align-baseline",
      "align-top",
      "align-middle",
      "align-bottom",
      "align-text-top",
      "align-text-bottom"
    ],
    "white-spacing": [
      "whitespacing-normal",
      "whitespacing-no-wrap",
      "whitespacing-pre",
      "whitespacing-pre-line",
      "whitespacing-pre-wrap"
    ],
    "word-break": ["break-normal", "break-words", "break-all", "truncate"]
  },
  flexbox: {
    parent: {
      direction: [
        "flex-row",
        "flex-col",
        "flex-row-reverse",
        "flex-col-reverse"
      ],
      wrap: ["flex-wrap", "flex-no-wrap", "flex-wrap-reverse"],
      "align-items": [
        "items-stretch",
        "items-start",
        "items-center",
        "items-end",
        "items-baseline"
      ],
      "align-content": [
        "content-start",
        "content-center",
        "content-end",
        "content-between",
        "content-around"
      ],
      "justify-content": [
        "justify-start",
        "justify-center",
        "justify-end",
        "justify-between",
        "justify-around"
      ]
    },
    children: {
      "align-self": [
        "self-auto",
        "self-start",
        "self-center",
        "self-end",
        "self-stretch"
      ],
      flex: ["flex-initial", "flex-1", "flex-auto", "flex-none"],
      "flex-grow": ["flex-grow", "flex-grow-0"],
      "flex-shrink": ["flex-shrink", "flex-shrink-0"],
      "flex-order": ["order-first", "order-last", "order-none", "order-{1-12}"]
    }
  },
  layout: {
    Container: ["container"],
    Display: [
      "block",
      "inline-block",
      "inline",
      "flex",
      "inline-flex",
      "table",
      "table-row",
      "table-cell",
      "hidden"
    ],
    Float: ["float-right", "float-left", "float-none", "clearfix"],
    Overflow: [
      "overflow-auto",
      "overflow-hidden",
      "overflow-visible",
      "overflow-scroll",
      "object-left-top",
      "overflow-x-auto",
      "overflow-y-auto",
      "overflow-x-hidden",
      "overflow-y-hidden",
      "overflow-x-visible",
      "overflow-y-visible",
      "overflow-x-scroll",
      "overflow-y-scroll",
      "scrolling-touch (webkit)",
      "scrolling-auto (webkit)"
    ],
    "Object-Fit": [
      "object-contain",
      "object-cover",
      "object-fill",
      "object-none"
    ],
    "Object-Positions": [
      "object-bottom",
      "object-center",
      "object-left",
      "object-left-bottom",
      "object-scale-down",
      "object-right",
      "object-right-bottom",
      "object-right-top",
      "object-top"
    ],
    Positions: ["static", "relative", "absolute", "fixed", "sticky"],
    "Positions-TRBL": [
      "[ top/right/bottom/left ]-0",
      "[ top/right/bottom/left ]-auto",
      "inset-0",
      "inset-auto",
      "inset-[x/y]-0",
      "inset-[x/y]-auto"
    ],
    Visible: ["visible", "invisible"],
    "z-index": ["z-0", "z-10", "z-20", "z-30", "z-40", "z-50", "z-auto"]
  }
};
