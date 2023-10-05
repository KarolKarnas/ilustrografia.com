import { FaDragon } from "react-icons/fa6";
import Button from "../../components/Button";
import ImageMouseMoving from "../../components/ImageMouseMoving";
import IconDivider from "../../components/primitives/IconDivider";
import MainHeading from "../../components/primitives/MainHeading";
import MainStrongText from "../../components/primitives/MainStrongText";
import { useGetProductsByCategoryQuery } from "../../slices/productsApiSlice";

import SectionMain from "../../components/SectionMain";
import MainTitlesWrapper from "../../components/MainTitlesWrapper";

import ProductsGrid from "../../components/ProductsGrid";
import IllustrationsGrid from "../../components/IllustrationsGrid";

const FantasyIllustrations = () => {
  const {
    data: fantasyProducts,
    isLoading: isLoadingFantasy,
    error: errorFantasy,
  } = useGetProductsByCategoryQuery("fantasy-illustrations");

  return (
    <div className="flex w-11/12 flex-col items-center justify-center">
      <section className="relative flex flex-col items-center justify-center">
        <div className=" fixed -left-[15rem] top-[5rem] -z-10 hidden w-1/2 md:flex md:items-center  md:justify-center ">
          <ImageMouseMoving
            src={"/images/fantasy-illustrations-about/pencil.png"}
            reverse={true}
          />
        </div>
        <div className="  fixed -left-[12rem] top-[35rem] -z-10 hidden w-1/4 md:flex md:items-center md:justify-center ">
          <ImageMouseMoving src={"/images/addons/magic.png"} reverse={false} />
        </div>

        <div className="fixed  -right-[22rem] top-[4rem] -z-10 hidden w-1/2 md:flex md:items-center md:justify-center ">
          <ImageMouseMoving
            src={"/images/fantasy-illustrations-about/potions.png"}
          />
        </div>

        <div className="fixed -right-[8rem] top-[40rem] -z-10 hidden w-1/4  md:flex md:items-center md:justify-center">
          <ImageMouseMoving src={"/images/addons/brush.png"} reverse={true} />
        </div>

        <div className="absolute top-8 flex items-center justify-center md:top-8 ">
          <h1 className="my-2 whitespace-nowrap text-center font-cormorant-infant text-6xl font-semibold italic text-white drop-shadow-2xl md:text-9xl">
            Fantasy
          </h1>
        </div>
        <div className="absolute top-[20rem] flex items-center justify-center sm:top-[40rem] ">
          <h2 className="my-2 text-center font-cormorant-infant text-6xl font-semibold italic text-white drop-shadow-2xl md:text-9xl">
            Illustrations
          </h2>
        </div>
        {/* Gradient Background */}
        <div className="bg-fantasy-gradient -z-20  flex h-full flex-col items-center justify-start dark:bg-black-slavic-gradient">
          <img
            className=" mt-16 w-11/12 rounded-full  shadow-hero md:w-auto"
            src="/images/fantasy-illustrations-about/fantasy-illustrations-keyleth.jpg"
            alt=""
          />
          <div className="z-10 mb-8 mt-12 flex w-10/12 flex-col items-center justify-center md:w-1/3">
            {/* <div className="my-8 flex flex-col items-center gap-4 md:flex-row md:gap-8">
              <Button text={"shop"} color={"red"} link={"/shop"} />
              <Button
                text={"illustrations"}
                color={"white"}
                link={"/illustrations"}
              />
            </div> */}
            <p className="flex flex-col items-center justify-center gap-5  text-center  font-cormorant-infant text-xl font-semibold italic text-eerie-black drop-shadow-lg dark:text-ivory">
              <span>
                Welcome to the world of fantasy illustrations, where limitless
                imagination takes flight. These captivating artworks transport
                us to enchanted realms where majestic mountains stand like
                ancient guardians and the sea&apos;s rhythmic waves dance against
                rugged cliffs. Discover hidden treasures and mythical beings
                within these pages.
              </span>
              <span>
                What hidden treasures and fantastical beings lie within these
                realms?{" "}
              </span>
            </p>
            <img
              className="my-6 h-16 dark:invert-90"
              src=" /images/neo-slavic-census-about/logo-neo-slavic-census.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <div className="my-6 flex w-full flex-col items-center justify-center font-light md:my-16 md:w-7/12 xl:w-6/12">
        <MainHeading>Fantasy Illustrations</MainHeading>
        {/* <MainStrongText>
          {" "}
          How many millennia have these Slavic lands borne!
        </MainStrongText> */}
        <div className="py-4">
          <IconDivider>
            <FaDragon />
          </IconDivider>
        </div>
        <p className="mb-4 block w-11/12 sm:w-1/2 text-center dark:text-ivory ">
          We are delighted that you&apos;re here! Allow us to introduce you to a
          realm brimming with magic and passion. This realm is our imagination -
          devoted entirely to the canon of fantasy. It manifests itself in the
          form of illustrations, which have been created for many years.
        </p>{" "}
        <p className="mb-4 block w-11/12 sm:w-1/2 text-center dark:text-ivory  ">
          Step into our imagination and journey through other worlds!{" "}
        </p>
          <strong className="block w-11/12 text-lg sm:w-1/2 text-center dark:text-ivory ">
            And if you happen to fancy one, you can bring it into your own home.
            How? Take a look at our store!
          </strong>
        <div className="my-8 flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <Button text={"shop"} color={"red"} link={"/shop"} />
          <Button
            text={"illustrations"}
            color={"black"}
            link={"/illustrations"}
          />
        </div>
        {/* <img
          className=" my-8 rounded-full shadow-hero md:my-16  md:w-auto"
          src="/images/neo-slavic-census-about/neo-slavic-census-book.jpg"
          alt=""
        /> */}
      </div>

      <div className="z-10 flex flex-col items-center justify-center gap-[5rem] md:gap-[8rem]">
        <SectionMain>
          <MainTitlesWrapper>
            <MainStrongText>Fantasy Illustrations:</MainStrongText>
          </MainTitlesWrapper>

          <IllustrationsGrid
            products={fantasyProducts}
            colNum={3}
            isLoading={isLoadingFantasy}
            error={errorFantasy}
            aspectRatio="4/5"
          />
        </SectionMain>

        <SectionMain color="second">
          <MainTitlesWrapper>
            <MainStrongText>Fantasy Illustration Products:</MainStrongText>
          </MainTitlesWrapper>
          <ProductsGrid
            products={fantasyProducts}
            hideVariations={false}
            isLoading={isLoadingFantasy}
            error={errorFantasy}
            colNum={3}
          />
        </SectionMain>
      </div>
    </div>
  );
};
export default FantasyIllustrations;
