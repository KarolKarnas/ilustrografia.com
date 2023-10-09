import { FaPaperPlane } from "react-icons/fa";
import ImageMouseMoving from "../../components/ImageMouseMoving";
import MainTitlesWrapper from "../../components/MainTitlesWrapper";
import MainHeading from "../../components/primitives/MainHeading";
import MainText from "../../components/primitives/MainText";
import MainStrongText from "../../components/primitives/MainStrongText";
import SocialLinks from "../../components/SocialLinks";

const ContactPage = () => {
  return (
    <div className="relative flex w-11/12 flex-col items-center justify-center md:flex-row md:gap-20">
      <div className="relative flex h-full w-4/12 ">
        <div className="absolute -left-[2rem] -top-[1rem] hidden md:flex md:w-1/3 md:items-center  md:justify-center ">
          <ImageMouseMoving
            src={"/images/contact/pencil-small.png"}
            reverse={false}
            text="Prints"
          />
        </div>
        <div className="absolute -right-4 top-4 hidden md:flex md:w-1/3 md:items-center  md:justify-center ">
          <ImageMouseMoving
            src={"/images/contact/book-translucent-small.png"}
            reverse={true}
            text="Slavic Legends"
          />
        </div>
        <div className="absolute -right-5 bottom-24 hidden md:flex md:w-1/2 md:items-center  md:justify-center ">
          <ImageMouseMoving
            src={"/images/contact/fantasy-label.png"}
            reverse={false}
            text="Slavic Legends"
          />
        </div>
        <img
          className=" dark:invert-90"
          src="/images/contact/brush-with-paint.png"
          alt=""
        />
      </div>

      <div className="flex w-full justify-start  md:w-1/2">
        <MainTitlesWrapper>
          <div className=" md:mb-10 xl:-mt-10 2xl:-mt-20 2xl:mb-20">
            <MainHeading>Do you have a question? </MainHeading>
          </div>

          <div className="flex w-full flex-col items-center gap-4 rounded-xl">
            <MainText>{`We are here to answer!`}</MainText>
          </div>

          <div className="z-10 mt-2 flex items-center text-red-magic">
            <FaPaperPlane className=" mr-2 text-sm md:mr-4   md:text-xl" />
            <a
              href="mailto:ilustrografia@gmail.com"
              className="font-cormorant-infant text-2xl font-semibold italic
             text-red-magic hover:text-eerie-black dark:hover:text-ivory md:text-3xl"
            >
              {" "}
              ilustrografia@gmail.com
            </a>
          </div>

          <div className="mt-8 md:mt-16 flex flex-col items-center justify-center gap-2">
            <MainStrongText>Social Media</MainStrongText>
            <div className="w-30 flex items-center gap-x-3">
              <SocialLinks />
            </div>
          </div>
        </MainTitlesWrapper>
      </div>

      <div className="absolute hidden  w-5/12 md:-right-[10rem] md:top-[5rem] md:flex md:items-center md:justify-center lg:-right-[15rem] lg:top-[4rem]  xl:top-[1rem] ">
        <ImageMouseMoving
          src={"/images/contact/hand-pointer.png"}
          reverse={true}
        />
      </div>
    </div>
  );
};
export default ContactPage;
