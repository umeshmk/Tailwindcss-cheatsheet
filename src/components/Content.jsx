import React, {useContext} from 'react';
import Title from './Title';
import {TailwindContext} from '../context/TailwindContext';

const Heading = ({data}) => (
  <div className="flex flex-col flex-none grow  bg-purple-100 py-6 px-1">
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
  const {cheatsheet} = useContext(TailwindContext);

  return (
    <div className="grid grid-cols-1 lg:flex lg:flex-wrap lg:justify-around   p-4 ">
      <div className="my-4">
        <Title title="spacing" />
        {cheatsheet.spacing.map((v, i) => (
          <Heading data={v} key={i} />
        ))}
      </div>
      <div className="my-4">
        <Title title="flex" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {cheatsheet.flexbox.map((v, i) => (
            <Heading data={v} key={i} />
          ))}
        </div>
      </div>
      <div className="my-4">
        <Title title="Grid" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {cheatsheet.grid.map((v, i) => (
            <Heading data={v} key={i} />
          ))}
        </div>
      </div>
      <div className="my-4">
        <Title title="Flex/Grid" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {cheatsheet.flexboxAndGrid.map((v, i) => (
            <Heading data={v} key={i} />
          ))}
        </div>
      </div>
      <div className="my-4">
        <Title title="Sizing" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {cheatsheet.sizing.map((v, i) => (
            <Heading data={v} key={i} />
          ))}
        </div>
      </div>

      <div className="my-4">
        <Title title="spacing" />
        {cheatsheet.spacing.map((v, i) => (
          <Heading data={v} key={i} />
        ))}
      </div>

      <div className="my-4">
        <Title title="Layout" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {cheatsheet.layout.map((v, i) => (
            <Heading data={v} key={i} />
          ))}
        </div>
      </div>

      <div className="my-4">
        <Title title="Typography" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {cheatsheet.typography.map((v, i) => (
            <Heading data={v} key={i} />
          ))}
        </div>
      </div>

      <div className="my-4">
        <Title title="Background" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {cheatsheet.background.map((v, i) => (
            <Heading data={v} key={i} />
          ))}
        </div>
      </div>

      <div className="my-4">
        <Title title="Border" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {cheatsheet.border.map((v, i) => (
            <Heading data={v} key={i} />
          ))}
        </div>
      </div>

      <div className="my-4">
        <Title title="transition & Animation" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {cheatsheet.transition.map((v, i) => (
            <Heading data={v} key={i} />
          ))}
        </div>
      </div>
      <div className="my-4">
        <Title title="transform" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {cheatsheet.transform.map((v, i) => (
            <Heading data={v} key={i} />
          ))}
        </div>
      </div>
      <div className="my-4">
        <Title title="effect" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {cheatsheet.effect.map((v, i) => (
            <Heading data={v} key={i} />
          ))}
        </div>
      </div>
      <div className="my-4">
        <Title title="table" />
        {cheatsheet.table.map((v, i) => (
          <Heading data={v} key={i} />
        ))}
      </div>
      <div className="my-4">
        <Title title="svg" />
        {cheatsheet.svg.map((v, i) => (
          <Heading data={v} key={i} />
        ))}
      </div>

      <div className="my-4">
        <Title title="Interactivity" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {cheatsheet.interactivity.map((v, i) => (
            <Heading data={v} key={i} />
          ))}
        </div>
      </div>
      <div className="my-4">
        <Title title="accessibility" />
        {cheatsheet.accessibility.map((v, i) => (
          <Heading data={v} key={i} />
        ))}
      </div>
      <div className="my-4">
        <Title title="filters" />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {cheatsheet.filters.map((v, i) => (
            <Heading data={v} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
