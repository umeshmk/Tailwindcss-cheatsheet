import React, { useContext } from "react";
import Title from "./Title";
import { TailwindContext } from "../context/TailwindContext";

const Heading = ({ data }) => (
  <div className="flex flex-col px-1 py-6 border">
    {Object.keys(data).map((title) => (
      <div
        // className="w-full p-2 text-sm font-semibold text-purple-500 uppercase"
        className="w-full p-2 text-sm font-semibold text-gray-600 uppercase"
        key={title}
      >
        {title}
        {data[title].map((c, i) => (
          <div className="px-2 font-normal text-gray-800 whitespace-nowrap" key={i}>
            <code className="lowercase ffamily-b">.{c}</code>
          </div>
        ))}
      </div>
    ))}
  </div>
);

function Content() {
  const { cheatsheet: ch, cheatsheetComputed: chc } =
    useContext(TailwindContext);

  return (
    <div className="grid grid-cols-1 p-4 lg:flex lg:flex-wrap lg:justify-between">
      <div className="my-4">
        <Title title="flexbox" />
        <div className="flex flex-col">
          <Heading data={ch.flexbox} />
        </div>
      </div>

      <div className="my-4">
        <Title title="Grid" />
        <div className="flex flex-row">
          <Heading data={chc.cGrid[0]} />
          <Heading data={chc.cGrid[1]} />
        </div>
      </div>
      <div className="my-4">
        <Title title="Box-alignment" />
        <div className="flex flex-row">
          <Heading data={chc.cBoxAlignment[0]} />
          <Heading data={chc.cBoxAlignment[1]} />
        </div>
      </div>
      <div className="my-4">
        <Title title="Sizing" />
        <div className="flex flex-row">
          <Heading data={chc.cSizing[0]} />
          <Heading data={chc.cSizing[1]} />
        </div>
      </div>

      <div className="my-4">
        <Title title="spacing" />
        <Heading data={ch.spacing} />
      </div>

      <div className="my-4">
        <Title title="Layout" />
        <div className="flex flex-row">
          <Heading data={chc.cLayout[0]} />
          <Heading data={chc.cLayout[1]} />
          <Heading data={chc.cLayout[2]} />
        </div>
      </div>

      <div className="my-4">
        <Title title="Typography" />
        <div className="flex flex-row">
          <Heading data={chc.cTypography[0]} />
          <Heading data={chc.cTypography[1]} />
          <Heading data={chc.cTypography[2]} />
          <Heading data={chc.cTypography[3]} />
        </div>
      </div>

      <div className="my-4">
        <Title title="Background" />
        <div className="flex flex-row">
          <Heading data={chc.cBackground[0]} />
          <Heading data={chc.cBackground[1]} />
        </div>
      </div>

      <div className="my-4">
        <Title title="Border" />
        <div className="flex flex-row">
          <Heading data={chc.cBorder[0]} />
          <Heading data={chc.cBorder[1]} />
        </div>
      </div>

      <div className="my-4">
        <Title title="transition" />
        <Heading data={ch.transition} />
      </div>
      <div className="my-4">
        <Title title="transform" />
        <Heading data={ch.transform} />
      </div>
      <div className="my-4">
        <Title title="effect" />
        <Heading data={ch.effect} />
      </div>
      <div className="my-4">
        <Title title="table" />
        <Heading data={ch.table} />
      </div>

      <div className="my-4">
        <Title title="Interactivity" />
        <Heading data={ch.interactivity} />
      </div>
      <div className="my-4">
        <Title title="svg" />
        <Heading data={ch.svg} />
      </div>
      <div className="my-4">
        <Title title="accessibility" />
        <Heading data={ch.accessibility} />
      </div>
    </div>
  );
}

export default Content;
