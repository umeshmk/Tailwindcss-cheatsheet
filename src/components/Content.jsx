import React, { useContext } from "react";
import Title from "./Title";
import { TailwindContext } from "../context/TailwindContext";

const Heading = ({ data }) => (
  <div class="flex flex-col flex-none bg-purple-100 py-6 px-1">
    {Object.keys(data).map((title) => (
      <div
        class="text-purple-600 text-sm uppercase font-semibold w-full p-2"
        key={title}
      >
        {title}
        {data[title].map((c, i) => (
          <div class="text-gray-600 font-mono  px-2 tracking-wide" key={i}>
            <div class="lowercase">.{c}</div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

function Content() {
  const { cheatsheet: ch, cheatsheetComputed: chc } =
    useContext(TailwindContext);
  console.log(chc);
  return (
    <div class="grid grid-cols-1 lg:flex lg:flex-wrap lg:justify-around   p-4 ">
      <div class="my-4">
        <Title title="flexbox" />
        <div class="flex flex-col">
          <Heading data={ch.flexbox} />
        </div>
      </div>

      <div class="my-4">
        <Title title="Grid" />
        <div class="flex flex-row overflow-x-scroll lg:overflow-hidden">
          <Heading data={chc.cGrid[0]} />
          <Heading data={chc.cGrid[1]} />
        </div>
      </div>
      <div class="my-4">
        <Title title="Box-alignment" />
        <div class="flex flex-row overflow-x-scroll lg:overflow-hidden">
          <Heading data={chc.cBoxAlignment[0]} />
          <Heading data={chc.cBoxAlignment[1]} />
        </div>
      </div>
      <div class="my-4">
        <Title title="Sizing" />
        <div class="flex flex-row overflow-x-scroll lg:overflow-hidden">
          <Heading data={chc.cSizing[0]} />
          <Heading data={chc.cSizing[1]} />
        </div>
      </div>

      <div class="my-4">
        <Title title="spacing" />
        <Heading data={ch.spacing} />
      </div>

      <div class="my-4">
        <Title title="Layout" />
        <div class="flex flex-row overflow-x-scroll lg:overflow-hidden">
          <Heading data={chc.cLayout[0]} />
          <Heading data={chc.cLayout[1]} />
          <Heading data={chc.cLayout[2]} />
        </div>
      </div>

      <div class="my-4">
        <Title title="Typography" />
        <div class="flex flex-row overflow-x-scroll lg:overflow-hidden">
          <Heading data={chc.cTypography[0]} />
          <Heading data={chc.cTypography[1]} />
          <Heading data={chc.cTypography[2]} />
          <Heading data={chc.cTypography[3]} />
        </div>
      </div>

      <div class="my-4">
        <Title title="Background" />
        <div class="flex flex-row overflow-x-scroll lg:overflow-hidden">
          <Heading data={chc.cBackground[0]} />
          <Heading data={chc.cBackground[1]} />
        </div>
      </div>

      <div class="my-4">
        <Title title="Border" />
        <div class="flex flex-row overflow-x-scroll lg:overflow-hidden">
          <Heading data={chc.cBorder[0]} />
          <Heading data={chc.cBorder[1]} />
        </div>
      </div>

      <div class="my-4">
        <Title title="transition" />
        <Heading data={ch.transition} />
      </div>
      <div class="my-4">
        <Title title="transform" />
        <Heading data={ch.transform} />
      </div>
      <div class="my-4">
        <Title title="effect" />
        <Heading data={ch.effect} />
      </div>
      <div class="my-4">
        <Title title="table" />
        <Heading data={ch.table} />
      </div>

      <div class="my-4">
        <Title title="Interactivity" />
        <Heading data={ch.interactivity} />
      </div>
      <div class="my-4">
        <Title title="svg" />
        <Heading data={ch.svg} />
      </div>
      <div class="my-4">
        <Title title="accessibility" />
        <Heading data={ch.accessibility} />
      </div>
    </div>
  );
}

export default Content;
