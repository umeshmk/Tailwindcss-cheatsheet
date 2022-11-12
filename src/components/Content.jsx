import React, {useContext, useEffect, useRef} from 'react';
import Title from './Title';
import {TailwindContext} from '../context/TailwindContext';
import {cheatsheetOrder} from '../context/cheatsheet';

const Heading = ({data}) => (
  <div className="flex flex-col flex-none grow  bg-purple-50 py-6 px-1">
    {Object.keys(data).map((title) => (
      <div
        className="text-gray-60 text-purple-900  text-red-800 text-sm w-full p-2"
        key={title}>
        <span className="lowercase font-bold" data-id="sub-heading">
          {title}
        </span>
        {data[title].map((c, i) => (
          <div className="text-red-800 text-sky-60 font-normal px-2 " key={i}>
            <code className="ffamily-b lowercase">{c}</code>
          </div>
        ))}
      </div>
    ))}
  </div>
);

function Content() {
  const {cheatsheet} = useContext(TailwindContext);

  const Loop = ({className, screen}) =>
    Object.entries(cheatsheet).map(([key, v]) => (
      <div
        className={`my-4 grow lg:grow-0 ${className} `}
        key={v.title}
        style={{
          order: cheatsheetOrder[key][screen],
        }}>
        <Title title={v.title} />
        <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
          {v.data.map((v2, i) => (
            <Heading data={v2} key={i} />
          ))}
        </div>
      </div>
    ));

  const ref = useRef();

  useEffect(async () => {
    if (ref.current) {
      // CODE TEXT
      const codeEls = ref.current.querySelectorAll('code');
      for (let i = 0; i < codeEls.length; i++) {
        let text = codeEls[i].innerText;
        const bracketsRegex = /\[(.*?)\]/g;
        const bracketsArr = text.match(bracketsRegex);

        if (bracketsArr && bracketsArr.length > 0) {
          bracketsArr.map((v) => {
            v = v.slice(1, -1);
            text = text.replaceAll(
              `${v}`,
              `<span class="text-sky-600">${v}</span>`
            );
          });
        }

        codeEls[i].innerHTML = text
          .replaceAll('|', '<span class="text-red-800">|</span>')
          .replaceAll(
            '$spacing',
            '<span class="text-green-700">$spacing</span>'
          )
          .replaceAll('$color', '<span class="text-green-700">$color</span>');
      }

      // SUB HEADINGS
      const Els = ref.current.querySelectorAll('[data-id="sub-heading"]');
      for (let i = 0; i < Els.length; i++) {
        let text = Els[i].innerText;
        const bracketsRegex = /\[(.*?)\]/g;
        const bracketsArr = text.match(bracketsRegex);

        if (bracketsArr && bracketsArr.length > 0) {
          bracketsArr.map((v) => {
            v = v.slice(1, -1);
            text = text.replaceAll(
              `${v}`,
              `<span class="text-sky-600 font-norma ">${v}</span>`
            );
          });
        }

        Els[i].innerHTML = text;
      }
    }
  }, []);

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 lg:flex lg:flex-wrap lg:justify-around lg:gap-2 lg:gap-y-10 p-4 pt-20 py-20 ">
        <Loop className="lg:hidden" screen={'sm'} />
        <Loop className="hidden lg:block xl:hidden" screen={'lg'} />
        <Loop className="hidden xl:block 2xl:hidden " screen={'xl'} />
        <Loop className="hidden 2xl:block " screen={'2xl'} />
      </div>
    </div>
  );

  //   <div className="grid grid-cols-1 lg:flex lg:flex-wrap lg:justify-around   p-4 ">
  //     <div className="my-4">
  //       <Title title="flex" />
  //       <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
  //         {cheatsheet.flexbox.map((v, i) => (
  //           <Heading data={v} key={i} />
  //         ))}
  //       </div>
  //     </div>
  //     <div className="my-4">
  //       <Title title="Grid" />
  //       <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
  //         {cheatsheet.grid.map((v, i) => (
  //           <Heading data={v} key={i} />
  //         ))}
  //       </div>
  //     </div>
  //     <div className="my-4">
  //       <Title title="Flex/Grid" />
  //       <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
  //         {cheatsheet.flexboxAndGrid.map((v, i) => (
  //           <Heading data={v} key={i} />
  //         ))}
  //       </div>
  //     </div>
  //     <div className="my-4">
  //       <Title title="Sizing" />
  //       <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
  //         {cheatsheet.sizing.map((v, i) => (
  //           <Heading data={v} key={i} />
  //         ))}
  //       </div>
  //     </div>

  //     <div className="my-4">
  //       <Title title="spacing" />
  //       {cheatsheet.spacing.map((v, i) => (
  //         <Heading data={v} key={i} />
  //       ))}
  //     </div>

  //     <div className="my-4">
  //       <Title title="Layout" />
  //       <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
  //         {cheatsheet.layout.map((v, i) => (
  //           <Heading data={v} key={i} />
  //         ))}
  //       </div>
  //     </div>

  //     <div className="my-4">
  //       <Title title="Typography" />
  //       <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
  //         {cheatsheet.typography.map((v, i) => (
  //           <Heading data={v} key={i} />
  //         ))}
  //       </div>
  //     </div>

  //     <div className="my-4">
  //       <Title title="Background" />
  //       <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
  //         {cheatsheet.background.map((v, i) => (
  //           <Heading data={v} key={i} />
  //         ))}
  //       </div>
  //     </div>

  //     <div className="my-4">
  //       <Title title="Border" />
  //       <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
  //         {cheatsheet.border.map((v, i) => (
  //           <Heading data={v} key={i} />
  //         ))}
  //       </div>
  //     </div>

  //     <div className="my-4">
  //       <Title title="transition & Animation" />
  //       <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
  //         {cheatsheet.transition.map((v, i) => (
  //           <Heading data={v} key={i} />
  //         ))}
  //       </div>
  //     </div>
  //     <div className="my-4">
  //       <Title title="transform" />
  //       <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
  //         {cheatsheet.transform.map((v, i) => (
  //           <Heading data={v} key={i} />
  //         ))}
  //       </div>
  //     </div>
  //     <div className="my-4">
  //       <Title title="effect" />
  //       <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
  //         {cheatsheet.effect.map((v, i) => (
  //           <Heading data={v} key={i} />
  //         ))}
  //       </div>
  //     </div>
  //     <div className="my-4">
  //       <Title title="table" />
  //       {cheatsheet.table.map((v, i) => (
  //         <Heading data={v} key={i} />
  //       ))}
  //     </div>
  //     <div className="my-4">
  //       <Title title="svg" />
  //       {cheatsheet.svg.map((v, i) => (
  //         <Heading data={v} key={i} />
  //       ))}
  //     </div>

  //     <div className="my-4">
  //       <Title title="Interactivity" />
  //       <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
  //         {cheatsheet.interactivity.map((v, i) => (
  //           <Heading data={v} key={i} />
  //         ))}
  //       </div>
  //     </div>
  //     <div className="my-4">
  //       <Title title="accessibility" />
  //       {cheatsheet.accessibility.map((v, i) => (
  //         <Heading data={v} key={i} />
  //       ))}
  //     </div>
  //     <div className="my-4">
  //       <Title title="filters" />
  //       <div className="flex flex-row overflow-x-scroll lg:overflow-hidden">
  //         {cheatsheet.filters.map((v, i) => (
  //           <Heading data={v} key={i} />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Content;
