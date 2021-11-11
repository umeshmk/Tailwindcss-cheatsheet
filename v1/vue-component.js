var title = `
<h1 class="inline text-xl text-white bg-purple-800 p-2 capitalize">
<span class="text-gray-100"># </span>{{ title }}
</h1>
`;

Vue.component("vc-title", {
  data: function() {
    return {
      title: this.ptitle
    };
  },
  props: ["ptitle"],
  template: title
});

// =========================================

var heading = `
<div class="flex flex-col flex-none border py-6 px-1">
    <div class="text-purple-600 text-sm uppercase font-semibold w-full p-2"
        v-for="(i,ihead) in heading " >
        {{ ihead }}
        <div class="text-black text-base font-thin px-2 tracking-wide" v-for="j in i">
            <div class="lowercase">.{{ j }}</div>
        </div>
    </div>
</div>
`;

Vue.component("vc-heading", {
  data: function() {
    return {
      heading: this.pheading
    };
  },
  props: ["pheading"],
  template: heading
});

var reponsiveTemplate = `
<div class="flex pb-8 md:pb-6 ">
    <div class="flex-1 border uppercase md:p-3 "
        v-for="(i,ihead) in presponsive " >
        <div class="p-2 tracking-wide" v-for="(j,key) in i">
            <div class="text-s text-gray-700 italic lowercase" v-if="key == 0" >{{ j }}</div>
            <div class="text-black font-semibold pt-2 lowercase" v-if="key == 1" >.{{ j }}</div>
        </div>
    </div>
</div>
`;

Vue.component("vc-responsive", {
  props: ["presponsive"],
  template: reponsiveTemplate
});

var colorsTemplate = `
<div class="flex flex-col justify-between flex-wrap pt-4 ">
  <div class="flex flex-col items-center flex-wrap" v-for="c in pcolors">
    <div :class="'py-4 px-8 mx-1 rounded bg-' + c + '-' + pdepth" ></div>
      <div class="pt-1 font-bold text-sm text-gray-500" >
          {{ c+'-'+pdepth }}
      </div>
    </div>
  </div>
</div>
`;

Vue.component("vc-colors", {
  props: ["pcolors", "pdepth"],
  template: colorsTemplate
});

var sizeTemplate = `
<div class="flex flex-col items-start justify-center border p-6 ">
  <div class="flex flex-row items-center pt-1" v-for="s in psize">
    <div class="w-6 text-sm text-purple-800"> {{ s }} </div>
    <div :class="'bg-purple-300 h-2 w-' + s "></div>
  </div>
</div>
`;

Vue.component("vc-size", {
  props: ["psize"],
  template: sizeTemplate
});

// var pseudoTemplate = `
// <div class="flex flex-row justify-around w-full italic border py-3 px-2 mb-6 tracking-wide">
//   <div>
//     <div class=" " v-for="(c,index) in pclass">
//       <div class="" v-if="index < 4"> {{ c }} </div>
//     </div>
//   </div>
//   <div>
//     <div class="  " v-for="(c,index) in pclass">
//       <div class="" v-if="(index >= 4) && (index < 8)"> {{ c }} </div>
//     </div>
//   </div>
//   <div>
//     <div class="  " v-for="(c,index) in pclass">
//       <div class="" v-if="index >= 8"> {{ c }} </div>
//     </div>
//   </div>
// </div>
// `;

var pseudoTemplate = `
<div class="flex flex-row italic border py-3 px-2 mb-6 tracking-wide">
  <div>
    <div class=" " v-for="(c,index) in pclass">
      <div class=""> {{ c }} </div>
    </div>
  </div>
</div>
`;

Vue.component("vc-pseudo", {
  props: ["pclass"],
  template: pseudoTemplate
});

var functionTemplate = `
<div class="flex flex-col justify-between py-3 px-2 border ">
  <div  v-for="f in pfunc">
    <div class="font-semibold pt-1"><span class="text-purple-600">@</span>{{ f }} </div>
  </div>
</div>
`;

Vue.component("vc-function", {
  props: ["pfunc"],
  template: functionTemplate
});

var variantTemplate = `
<div class="flex flex-row justify-between  py-3 px-2 border tracking-wide">
  <div class="flex-1 mx-4" v-for="(variant, key) in pvariants">
    <div class="text-blue-600 uppercase text-xs"> {{ key }} </div>
    <div class="italic" v-for="v in variant">
      {{ v }}
    </div>
  </div>
</div>
`;

Vue.component("vc-variant", {
  props: ["pvariants"],
  template: variantTemplate
});
