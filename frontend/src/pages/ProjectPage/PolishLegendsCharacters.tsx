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
import Meta from "../../components/Meta";

const PolishLegendsCharacters = () => {
  const {
    data: polishProducts,
    isLoading: isLoadingPolish,
    error: errorPolish,
  } = useGetProductsByCategoryQuery("polish-legends");

  return (
    <>
      <Meta title="Project · Polish Legends Characters · Ilustrografia · Illustration · Digital Painting · Fantasy · Legends" />
      <div className="flex w-11/12 flex-col items-center justify-center">
        <section className="relative flex flex-col items-center justify-center">
          <div className=" fixed -left-[15rem] top-[5rem] -z-10 hidden w-1/2 md:flex md:items-center  md:justify-center ">
            <ImageMouseMoving
              src={"/images/polish-legends-about/sword.png"}
              reverse={true}
            />
          </div>
          <div className="  fixed -left-[5rem] top-[35rem] -z-10 hidden w-1/4 md:flex md:items-center md:justify-center ">
            <ImageMouseMoving
              src={"/images/polish-legends-about/mermaid-tail.png"}
              reverse={false}
            />
          </div>
          <div className="fixed  -right-[7rem] top-[4rem] -z-10 hidden w-1/3 md:flex md:items-center md:justify-center ">
            <ImageMouseMoving src={"/images/polish-legends-about/crown.png"} />
          </div>

          <div className="fixed -right-[8rem] top-[40rem] -z-10 hidden w-1/4  md:flex md:items-center md:justify-center">
            <ImageMouseMoving src={"/images/addons/brush.png"} reverse={true} />
          </div>

          <div className="absolute top-8 flex items-center justify-center md:top-8 ">
            <h1 className="my-2 whitespace-nowrap text-center font-cormorant-infant text-6xl font-semibold italic text-white drop-shadow-2xl md:text-9xl">
              Polish Legends
            </h1>
          </div>
          <div className="absolute top-[20rem] flex items-center justify-center sm:top-[40rem] ">
            <h2 className="my-2 text-center font-cormorant-infant text-6xl font-semibold italic text-white drop-shadow-2xl md:text-9xl">
              Characters
            </h2>
          </div>
          <div className="-z-20 flex  h-full flex-col items-center justify-start bg-polish-gradient dark:bg-black-slavic-gradient">
            <img
              className=" mt-16 w-11/12 rounded-full  shadow-hero md:w-auto"
              src="/images/polish-legends-about/lech-polish-legend.jpg"
              alt=""
            />
            <div className="z-10 mb-8 mt-12 flex w-10/12 flex-col items-center justify-center md:w-1/3">
              <p className="flex flex-col items-center justify-center gap-5  text-center  font-cormorant-infant text-xl font-semibold italic text-eerie-black drop-shadow-lg dark:text-ivory">
                <span>
                  Step into the enchanting realm of Polish legends and folklore,
                  where rich tales and mystical characters come to life through
                  captivating illustrations. Within these pages, you&apos;ll
                  find yourself transported to a world of ancient forests,
                  majestic castles, and mythical creatures.
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
          <MainHeading>Polish Legends Characters</MainHeading>
          <div className="py-4">
            <IconDivider>
              <FaDragon />
            </IconDivider>
          </div>
          <p className="mb-4 block w-11/12 text-center dark:text-ivory sm:w-1/2 ">
            As you explore this collection of Polish legends, be prepared to
            encounter hidden treasures and meet fantastical beings from the
            depths of Slavic mythology.
          </p>{" "}
          <p className="mb-4 block w-11/12 text-center dark:text-ivory sm:w-1/2  ">
            These illustrations are a window into a world of magic and wonder,
            where heroes and monsters, gods and spirits, all converge in epic
            stories.
          </p>
          <strong className="block w-11/12 text-center text-lg dark:text-ivory sm:w-1/2 ">
            We are delighted to have you here, and we invite you to journey
            through our vivid interpretations of these legendary characters. Let
            your imagination roam free as you immerse yourself in the magic of
            Polish folklore. If you find a character or scene that resonates
            with you, consider bringing it into your own space. How? Explore our
            store to find your own piece of this mythical world.
          </strong>
          <div className="my-8 flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Button text={"shop"} color={"red"} link={"/shop"} />
            <Button
              text={"illustrations"}
              color={"black"}
              link={"/illustrations"}
            />
          </div>
        </div>

        <div className="z-10 flex flex-col items-center justify-center gap-[5rem] md:gap-[8rem]">
          <SectionMain>
            <MainTitlesWrapper>
              <MainStrongText>Polish Legends Characters:</MainStrongText>
            </MainTitlesWrapper>

            <IllustrationsGrid
              products={polishProducts}
              colNum={3}
              isLoading={isLoadingPolish}
              error={errorPolish}
              aspectRatio="4/5"
            />
          </SectionMain>
          <SectionMain color="second">
            <MainTitlesWrapper>
              <MainStrongText>
                Polish Legends Characters Products:
              </MainStrongText>
            </MainTitlesWrapper>
            <ProductsGrid
              products={polishProducts}
              hideVariations={false}
              isLoading={isLoadingPolish}
              error={errorPolish}
              colNum={3}
            />
          </SectionMain>
        </div>
      </div>
    </>
  );
};
export default PolishLegendsCharacters;
