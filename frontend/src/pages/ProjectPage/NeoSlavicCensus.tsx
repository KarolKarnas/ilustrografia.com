import { FaDragon } from "react-icons/fa6";
import Button from "../../components/Button";
import ImageMouseMoving from "../../components/ImageMouseMoving";
import IconDivider from "../../components/primitives/IconDivider";
import MainHeading from "../../components/primitives/MainHeading";
import MainStrongText from "../../components/primitives/MainStrongText";

const NeoSlavicCensus = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-10">
      <div className=" absolute -left-20 top-48 hidden w-1/2 md:flex md:items-center md:justify-center">
        <ImageMouseMoving
          src={"/images/neo-slavic-census-about/basilisk-translucent.png"}
          reverse={true}
        />
      </div>

      <div className="absolute  -right-36 top-36 hidden w-1/2 md:flex md:items-center md:justify-center">
        <ImageMouseMoving
          src={"/images/neo-slavic-census-about/book-translucent.png"}
        />
      </div>

      <div className="absolute -right-[28rem] top-128 hidden w-1/2 md:flex md:items-center  md:justify-center ">
        <ImageMouseMoving
          src={"/images/neo-slavic-census-about/basilisk-tail-translucent.png"}
          reverse={true}
        />
      </div>

      <div className="absolute top-16 hidden w-1/2 md:flex md:items-center md:justify-center ">
        <h1 className="my-2 text-center font-cormorant-infant text-5xl font-semibold italic text-white drop-shadow-2xl md:text-9xl">
          Neo-slavic
        </h1>
      </div>
      <div className="absolute top-[34rem] hidden w-1/2 md:flex md:items-center md:justify-center ">
        <h2 className="my-2 text-center font-cormorant-infant text-5xl font-semibold italic text-white drop-shadow-2xl md:text-9xl">
          Census
        </h2>
      </div>

      <div className="bg-slavic-gradient dark:bg-black-slavic-gradient  flex h-full w-11/12 flex-col items-center justify-start">
        <img
          className=" mt-16  rounded-full shadow-hero"
          src="/images/neo-slavic-census-about/neo-slavic-census.jpg"
          alt=""
        />

        <div className="z-10 flex w-1/3 flex-col items-center justify-center">
          <div className="my-8 flex gap-8">
            <Button text={"shop"} color={"red"} link={"/shop"} />
            <Button
              text={"illustrations"}
              color={"white"}
              link={"/illustrations"}
            />
          </div>

          <p className="flex flex-col items-center justify-center gap-4  text-center  font-cormorant-infant text-xl font-semibold italic text-eerie-black drop-shadow-lg dark:text-ivory">
            <span>
              The stoic Carpathian mountains stand in silence, their majestic
              presence awe-inspiring, much like they did for our forefathers.
              The rhythmic roar of the Baltic Sea waves, as they crash with
              foamy grace against rugged cliffs, carries an ageless and
              unwavering melody.
            </span>
            <span>And what lies between them?</span>
          </p>

          <img
            className="my-6 h-16 dark:invert-90"
            src=" /images/neo-slavic-census-about/logo-neo-slavic-census.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex w-2/5 flex-col items-center justify-center font-light">
        <MainHeading>Slava!</MainHeading>
        <MainStrongText>
          {" "}
          How many millennia have these Slavic lands borne!
        </MainStrongText>
        <IconDivider>
          <FaDragon />
        </IconDivider>
        <p className="dark:text-ivory block ">
          <span className="text-5xl text-ivory mr-2 lea  bg-red-magic float-left px-5 mt-2 py-2 font-fondamento">T</span>hese endless wildernesses, where the densely arched crowns of trees
          once confidently reached towards the Great Sun, have contracted
          incomprehensibly. The few human settlements, which timidly huddled
          behind their fences, living by the cycle of day and night, spring and
          winter, have expanded, grown upward, and harnessed the laws of Nature.
          Now, not only do rivers rush toward the sea, forming the arteries of
          these lands, but they are also adorned with the black veins of
          solidified roads, which have interlinked into a network and diminished
          the world. Heavy machines, lifeless creatures obedient to human will,
          speed along them. And the sky? It appears almost the same. The night
          is adorned with unchanging stars and the wandering moon on the same
          path. The day is still azure as before, and variously shaped clouds
          roll across its surface. However, the firmament no longer belongs
          solely to winged beings who jealously guarded the gift of flight.
          Humans have detached themselves from the earth, ascended, and laid
          claim to the celestial vault as well.
        </p>
        <div className="py-5">
          <MainStrongText> Man has become everywhere</MainStrongText>
        </div>
        <p className="flex flex-col justify-center gap-3 dark:text-ivory">
          <span>
          <span className="text-5xl text-red-magic mr-2 lea  float-left font-fondamento">M</span>an has become fearless. He is the ruler of these lands. The
            harshest winters no longer daunt him, nor do scorching summer
            heatwaves. He effortlessly dispels the darkness of night and has the
            power to overshadow the brightness of noon. He reigns over all the
            wildlife and rules over nature with an iron-fisted tyranny. How
            greatly this man has spread his dominion! To such an extent that it
            would seem he has ceased to notice his fellow inhabitants of Mother
            Earth. And I am not only speaking of our lesser brethren. For
            once-wild, formidable, and numerous animals are no longer as wild or
            formidable, and their numbers have dwindled, confined to uninhabited
            lands and protected reserves of the Slavic realm. But we will not
            speak of them here. We will speak of other beings, those whom no one
            has cared for in a long time, those who bear many names, and of whom
            most Slavs no longer wish to take notice.
          </span>
          <span>Who are we talking about?</span>
        </p>
      </div>
    </div>
  );
};
export default NeoSlavicCensus;
