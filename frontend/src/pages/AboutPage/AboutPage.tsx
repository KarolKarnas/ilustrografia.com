import { FaDiceD20 } from "react-icons/fa6";
import IconDivider from "../../components/primitives/IconDivider";
import MainStrongText from "../../components/primitives/MainStrongText";
import ImageMouseMoving from "../../components/ImageMouseMoving";
import PageHeading from "../../components/primitives/PageHeading";
import Meta from "../../components/Meta";
import { FaAngleDoubleRight } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <Meta title="About · Ilustrografia · Illustration · Digital Painting · Fantasy · Legends" />
      <div className="flex w-11/12 flex-col items-center">
        <PageHeading>About</PageHeading>
        <IconDivider>
          <FaDiceD20 className="text-2xl" />
        </IconDivider>
        <div className="relative mb-16 mt-16 flex h-full flex-col justify-center gap-16 md:flex-row">
          <div
            className="absolute -left-[5rem] -top-[12em] -z-10 hidden w-[18rem] md:block
      "
          >
            <ImageMouseMoving
              src={"/images/about/vintage-lens.png"}
              reverse={true}
            />
          </div>

          <div className="absolute -bottom-[1rem] -right-[10rem] -z-10 hidden md:flex md:w-full md:items-center  md:justify-center ">
            <ImageMouseMoving
              src={"/images/about/brush-small.png"}
              reverse={false}
            />
          </div>

          <div
            className="absolute -right-[20rem] top-[15rem] -z-10 hidden w-[18rem] md:block
      "
          >
            <ImageMouseMoving
              src={"/images/contact/book-translucent-small.png"}
              reverse={true}
            />
          </div>

          <div className="flex w-full flex-col items-center gap-6 md:w-1/4 ">
            <img
              className="w-[24rem]"
              src="/images/about/karol-karnas-ilustrografia.jpg"
              alt=""
            />
            <MainStrongText>Karol Karnas</MainStrongText>

            <p className=" flex flex-col gap-2 text-center font-light text-eerie-black dark:text-ivory">
              <span className="italic">
                {`Administration and accounting. Computer wizardry, photon soul theft and modern goetia.`}
              </span>

              <span>
                {`
                The transient yet timeless elegance of coding is encapsulated within the lines of a program like no other mortal can create. Once a renowned battlefield wizard, feared in every tavern between the San and the Vistula rivers. The modern wizard may have left the battlefield, but in the realm of coding, his magic lives on, shaping the very fabric of the virtual world. In his spells, only humor proves mightier...`}
              </span>
            </p>

            <a target="_blank" rel="noreferrer" href="https://github.com/KarolKarnas">
              <button
                className={` w-42 " flex items-center gap-3 border border-red-600 bg-red-magic bg-opacity-60 px-6  py-4 text-2xs font-semibold  uppercase  tracking-widest text-red-50 transition-colors duration-300 hover:bg-red-magic   hover:bg-opacity-80  md:px-8
            `}
              >
                www <FaAngleDoubleRight />
              </button>
            </a>
          </div>

          <div className=" flex w-full flex-col items-center gap-6  md:w-1/4 ">
            <img
              className="w-[24rem]"
              src="/images/about/malgorzata-motyka-karnas-ilustrografia.jpg"
              alt=""
            />
            <MainStrongText>Małgorzata Motyka-Karnas</MainStrongText>

            <p className=" flex flex-col gap-2 text-center font-light text-eerie-black dark:text-ivory">
              <span className="italic">
                {`Woodcuts, copper engravings, and digital designs. Corporate soothsayer and animal whisperer. Numerology of the company.`}
              </span>

              <span>
                {`
            She's a creator of all kinds of prints, wielding the magic of digital brushes. She has the power to capture past and future events through her artwork – both real and entirely imagined. She's the signboard designer and guardian of the creative process. Privately, she's a cat enthusiast. During moonlit nights, she roams only the paths known to her. And you can pique her interest only with hot chocolate or fragrant coffee.`}
              </span>
            </p>

            <a target="_blank" rel="noreferrer" href="https://www.meggiem.art/">
              <button
                className={` w-42 " flex items-center gap-3 border border-red-600 bg-red-magic bg-opacity-60 px-6  py-4 text-2xs font-semibold  uppercase  tracking-widest text-red-50 transition-colors duration-300 hover:bg-red-magic   hover:bg-opacity-80  md:px-8
            `}
              >
                www <FaAngleDoubleRight />
              </button>
            </a>
          </div>
          <div className=" flex w-full flex-col items-center gap-6 md:w-1/4 ">
            <img
              className="w-[24rem]"
              src="/images/about/kamil-ulman-ilustrografia.jpg"
              alt=""
            />
            <MainStrongText>Kamil Ulman</MainStrongText>

            <p className=" flex flex-col gap-2 text-center font-light text-eerie-black dark:text-ivory">
              <span className="italic">
                {`Runic writing and scribe. Advanced graphomania. A cacophonous bard. Wandering, reading, and daring moonshining.`}
              </span>

              <span>
                {`
         A contemporary storyteller, an Aquarius, and a wanderer. Cloaked in eternal nostalgia, he conjures creatures and monsters from the depths of oblivion, and sometimes from non-existence. Written words are his weapon, ignorance his armor, and irony a faithful steed on which he traverses the world.`}
              </span>
            </p>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://pl.linkedin.com/in/kamil-ulman-4925b91b2"
            >
              <button
                className={` w-42 " flex items-center gap-3 border border-red-600 bg-red-magic bg-opacity-60 px-6  py-4 text-2xs font-semibold  uppercase  tracking-widest text-red-50 transition-colors duration-300 hover:bg-red-magic   hover:bg-opacity-80  md:px-8
            `}
              >
                www <FaAngleDoubleRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutPage;
