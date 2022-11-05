import React, {useContext} from 'react';
import Title from './Title';
import {TailwindContext} from '../context/TailwindContext';

const Heading = ({data}) => (
  <div className="flex flex-col flex-none bg-purple-100 py-6 px-1">
    {Object.keys(data).map((title) => (
      <div
        // className="text-purple-500 text-sm uppercase font-semibold w-full p-2"
        className="text-gray-600 text-sm uppercase font-semibold w-full p-2"
        key={title}>
        {title}
        {data[title].map((c, i) => (
          <div className="text-red-800 font-normal px-2 " key={i}>
            <code className="ffamily-b lowercase">.{c}</code>
          </div>
        ))}
      </div>
    ))}
  </div>
);

function Content() {
  const {cheatsheet: ch, cheatsheetComputed: chc} = useContext(TailwindContext);

  return (
    <div className="grid grid-cols-1 lg:flex lg:flex-wrap lg:justify-around   p-4 ">
      <div className="my-4">
        <Title title="flex" />
        <div className="flex flex-col">
          {chc.cFlexbox.map((v) => (
            <Heading data={v} />
          ))}
        </div>
      </div>
      <div className="my-4">
        <Title title="Grid" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {chc.cGrid.map((v) => (
            <Heading data={v} />
          ))}
        </div>
      </div>
      <div className="my-4">
        <Title title="Flex/Grid" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {chc.cFlexboxAndGrid.map((v) => (
            <Heading data={v} />
          ))}
        </div>
      </div>
      <div className="my-4">
        <Title title="Sizing" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {chc.cSizing.map((v) => (
            <Heading data={v} />
          ))}
        </div>
      </div>

      <div className="my-4">
        <Title title="spacing" />
        {chc.cSpacing.map((v) => (
          <Heading data={v} />
        ))}
      </div>

      <div className="my-4">
        <Title title="Layout" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {chc.cLayout.map((v) => (
            <Heading data={v} />
          ))}
        </div>
      </div>

      <div className="my-4">
        <Title title="Typography" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {chc.cTypography.map((v) => (
            <Heading data={v} />
          ))}
        </div>
      </div>

      <div className="my-4">
        <Title title="Background" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {chc.cBackground.map((v) => (
            <Heading data={v} />
          ))}
        </div>
      </div>

      <div className="my-4">
        <Title title="Border" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {chc.cBorder.map((v) => (
            <Heading data={v} />
          ))}
        </div>
      </div>

      <div className="my-4">
        <Title title="transition & Animation" />
        {ch.transition.map((v) => (
          <Heading data={v} />
        ))}
      </div>
      <div className="my-4">
        <Title title="transform" />
        <Heading data={ch.transform} />
      </div>
      <div className="my-4">
        <Title title="effect" />
        {chc.cEffect.map((v) => (
          <Heading data={v} />
        ))}
      </div>
      <div className="my-4">
        <Title title="table" />
        {ch.table.map((v) => (
          <Heading data={v} />
        ))}
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
      <div className="my-4">
        <Title title="filters" />
        {chc.cFilters.map((v) => (
          <Heading data={v} />
        ))}
      </div>
    </div>
  );
}

export default Content;
