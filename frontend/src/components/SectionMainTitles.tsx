type Props = {
  heading: string | undefined;
  main: string
  strong: string

};

const SectionMainTitles = ({heading, main, strong} : Props) => {
  return (
    <div className="mb-8 flex w-1/2 flex-col items-center">
          <span className=" md:text-md mb-4  text-center font-montserrat text-xs font-semibold uppercase tracking-hero  text-red-magic drop-shadow-lg">
          · Ilustrografia ·
        </span>
      <h3 className=" my-2  mb-4 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-5xl ">
        {heading}
      </h3>
      <span className=" mb-8 text-center text-eerie-black dark:text-ivory">
      {main}
    </span>
      <strong className="text-center font-cormorant-infant text-2xl font-semibold italic  text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-lg">
        {strong}
      </strong>
    </div>
  );
};
export default SectionMainTitles;
