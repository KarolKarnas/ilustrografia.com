import { FaDiceD20 } from "react-icons/fa6";
import IconDivider from "../../components/primitives/IconDivider";
import MainStrongText from "../../components/primitives/MainStrongText";
import Button from "../../components/Button";
import ImageMouseMoving from "../../components/ImageMouseMoving";
import PageHeading from "../../components/primitives/PageHeading";
import Meta from "../../components/Meta";

const AboutPage = () => {
  return (
    <>
    <Meta title="About · Ilustrografia · Illustration · Digital Painting · Fantasy · Legends" />
    <div className="flex w-11/12 flex-col items-center">
      <PageHeading>About</PageHeading>
      <IconDivider>
        <FaDiceD20 className="text-2xl" />
      </IconDivider>
      <div className="relative mb-16 mt-16 flex h-full flex-col justify-center md:flex-row gap-16">

      <div
          className="-z-10 absolute -left-[5rem] -top-[12em] hidden w-[18rem] md:block
      "
        >
          <ImageMouseMoving
            src={"/images/about/vintage-lens.png"}
            reverse={true}
          />
        </div>


        <div className="-z-10 absolute -bottom-[1rem] -right-[10rem] hidden md:flex md:w-full md:items-center  md:justify-center ">
          <ImageMouseMoving
            src={"/images/about/brush-small.png"}
            reverse={false}
          />
        </div>


        <div
          className="-z-10 absolute -right-[20rem] top-[15rem] hidden w-[18rem] md:block
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
              {`Administration and accounting. Photon soul theft, modern goetia, elixirotherapy, and computer wizardry.`}
            </span>

            <span>
              {`
                The fleeting yet eternal beauty of nature is captured within the frames of a photograph like no other mortal can achieve. Once a renowned battlefield wizard, feared in every tavern between the San and the Vistula rivers. He may have stashed away his staff, but the battles are far from over. For he has waged many victorious wars against paperwork, permits, and all manner of bureaucracy. In his spells, only humor proves mightier...`}
            </span>
          </p>

          <Button
            blank={true}
            color="red"
            text="www"
            link="https://www.lensman.pl/"
          ></Button>
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

          <Button
            blank={true}
            color="red"
            text="www"
            link="https://www.meggiem.art/"
          ></Button>
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

          <Button
            blank={true}
            color="red"
            text="www"
            link="https://pl.linkedin.com/in/kamil-ulman-4925b91b2"
          ></Button>
        </div>
      </div>
    </div>
    </>
  );
};
export default AboutPage;
