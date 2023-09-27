import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "../../slices/productsApiSlice";

import Spinner from "../../components/Spinner";
import SocialLinks from "../../components/SocialLinks";
import Button from "../../components/Button";
import { useEffect } from "react";
import { useGetNeoSlavicQuery } from "../../slices/ytApiSlice";
import LatestVideos from "../../components/LatestVideos";
import Message from "../../components/Message";

import SectionMain from "../../components/SectionMain";
import SectionMainTitles from "../../components/SectionMainTitles";
import MainTitlesWrapper from "../../components/MainTitlesWrapper";
import IllustrationsGrid from "../../components/IllustrationsGrid";
import ProductsGrid from "../../components/ProductsGrid";
import IconDivider from "../../components/IconDivider";
import ImageMouseMoving from "../../components/ImageMouseMoving";
import MainHeading from "../../components/primitives/MainHeading";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import { FaDragon, FaPaintbrush } from "react-icons/fa6";
import { FaPaintBrush, FaShoppingBasket } from "react-icons/fa";
import MainText from "../../components/primitives/MainText";
import MainStrongText from "../../components/primitives/MainStrongText";


const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const {
    data: neoSlavicProducts,
    isLoading: isLoadingNeoSlavic,
    error: errorNeoSlavic,
  } = useGetProductsByCategoryQuery("neo-slavic-census");
  const {
    data: fantasyProducts,
    isLoading: isLoadingFantasy,
    error: errorFantasy,
  } = useGetProductsByCategoryQuery("fantasy-illustrations");

  const {
    data: ytSearch,
    isLoading: ytSearchLoading,
    error: ytSearchError,
  } = useGetNeoSlavicQuery(3);

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <div>{getError(error as ApiError)}</div>
  ) : (
    <div className="my-10 flex w-full flex-col gap-y-20 p-2 md:w-11/12">
      <div
        className=" md:h-196
       flex h-screen flex-col items-center  justify-center rounded-3xl bg-hero bg-cover bg-center bg-no-repeat shadow-hero lg:h-224"
      >
        <div className=" flex flex-col items-center justify-center  p-2">
          <span className=" md:text-md text-center  font-montserrat text-xs font-semibold uppercase tracking-hero text-red-magic drop-shadow-hero">
            · Ilustrografia ·
          </span>
          <h1 className="  my-2 text-center font-cormorant-infant text-5xl font-semibold italic text-white drop-shadow-hero md:text-8xl">
            Reality Full of Magic
          </h1>
          <div className="my-8 flex gap-8">
            <Button text={"shop"} color={"red"} link={"/shop"} />
            <Button text={"about us"} color={"white"} link={"/about-us"} />
          </div>
          <div className="flex items-center gap-x-2">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="hidden w-1/4 md:flex md:justify-center md:items-center">
          <ImageMouseMoving src={"/images/addons/magic.png"} />
        </div>
        <div className="flex w-full flex-col items-center justify-center px-2 md:w-2/4">
          <span className=" md:text-md mb-4  text-center font-montserrat text-xs font-semibold uppercase tracking-hero  text-red-magic drop-shadow-lg">
            · Ilustrografia ·
          </span>
          <h3 className=" my-2  mb-4 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-6xl ">
            Greetings, Wanderer!
          </h3>
          <strong className=" mb-5 text-center text-eerie-black dark:text-ivory">
            No doubt you&apos;re pondering what extraordinary place you&apos;ve
            stumbled upon, aren&apos;t you?{" "}
          </strong>
          <span className=" mb-8 text-center text-eerie-black dark:text-ivory">
            Ilustrografia is a magical endeavor that intertwines the artful
            mystery of painting, the enthralling narrative power, and the
            enchanting force of photography. We set forth into the uncharted,
            crafting and uncovering realms eager to be explored. Our sole
            limitation is imagination, and when it comes to imagination, there
            are no boundaries.
          </span>
          <strong className="text-center font-cormorant-infant text-2xl font-semibold italic  text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-lg">
            Will you muster the courage to venture with us?
          </strong>
        </div>
        <div className="hidden w-1/4 md:flex md:justify-center md:items-center">
          <ImageMouseMoving
             src={"/images/addons/brush.png"}
            reverse={true}
          />
        </div>
      </div>

      {/* Latest animations */}
      <div className="my-3 flex flex-col items-center  rounded-xl bg-moon-dust px-16 pb-32 pt-16 shadow-hero dark:bg-zinc-800">
        <div className="mb-8 flex w-1/2 flex-col items-center">
          <span className=" md:text-md mb-4  text-center font-montserrat text-xs font-semibold uppercase tracking-hero  text-red-magic drop-shadow-lg">
            · Ilustrografia ·
          </span>
          <h3 className=" my-2  mb-4 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-6xl ">
            Our latest animations!
          </h3>
          {/* <span className=" mb-8 text-center text-eerie-black dark:text-ivory">
            Our latest creative wonders are now live on YouTube, waiting to
            transport you to new worlds and evoke a sense of wonder. Don&apos;t
            miss out on the magic – click the link below to watch our latest
            YouTube videos and embark on an unforgettable visual journey with
            us. Subscribe to stay updated, and let your imagination run wild!
          </span> */}
          <strong className="text-center font-cormorant-infant text-2xl font-semibold italic  text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-lg">
            Have you ever experienced the magic of animated storytelling?
            Ilustrografia&apos;s animations are a journey into wonder. Will you
            join us?
          </strong>
        </div>

        {ytSearchLoading ? (
          <Spinner />
        ) : ytSearchError ? (
          <Message
            variant="bad"
            message={getError(ytSearchError as ApiError)}
            // message={ytSearchError.data.message}
          />
        ) : (
          ytSearch && <LatestVideos youtubeItems={ytSearch.items} />
        )}
      </div>
      {/* Neo Slavic Illustration */}
      {/* <SectionMain color="second">
        <MainTitlesWrapper>
          <HeadingAccent>· Ilustrografia ·</HeadingAccent>
          <MainHeading>
            {neoSlavicProducts && neoSlavicProducts[0].categories[0].name}
          </MainHeading>
          <IconDivider>
            <FaPaintbrush />
          </IconDivider>
          <MainText>
            Step into a world of art and enchantment with Ilustrografia
          </MainText>
          <MainStrongText>Illustrations and Stories:</MainStrongText>
        </MainTitlesWrapper>

        <IllustrationsGrid products={neoSlavicProducts} />

        <Button
          text={`About ${
            neoSlavicProducts && neoSlavicProducts[0].categories[0].name
          }`}
          color={"black"}
          link={`/projects/${
            neoSlavicProducts && neoSlavicProducts[0].categories[0].slug
          }`}
        />
      </SectionMain> */}

      {/* Neo Slavic Project */}
      <SectionMain url="neo-slavic">
        <MainTitlesWrapper>
          <HeadingAccent>· Ilustrografia ·</HeadingAccent>
          <MainHeading>
            {`${neoSlavicProducts && neoSlavicProducts[0].categories[0].name}`}
          </MainHeading>
          <IconDivider>
            <FaDragon />
          </IconDivider>
          <div className="mb-5 flex w-full flex-col items-center gap-4 rounded-xl bg-black bg-opacity-30 px-20 py-10">
            <MainText>
              {`A unique illustrated guide that will introduce you to completely forgotten or hitherto completely unknown inhabitants of our Slavic lands. You could say it's something like a bestiary, but some of the personalities included in this List would strongly object to being called "beasts.`}
            </MainText>

            <Button
              text={`About ${
                neoSlavicProducts && neoSlavicProducts[0].categories[0].name
              }`}
              color={"black"}
              link={`/projects/${
                neoSlavicProducts && neoSlavicProducts[0].categories[0].slug
              }`}
            />
          </div>
          <MainStrongText>Illustrations and Stories:</MainStrongText>
        </MainTitlesWrapper>

        <IllustrationsGrid products={neoSlavicProducts} colNum={4} />

        <MainTitlesWrapper>
          <IconDivider>
            <FaPaintBrush />
          </IconDivider>

          <MainStrongText>{`Explore our Neo-Slavic prints today:`}</MainStrongText>
        </MainTitlesWrapper>

        <ProductsGrid products={neoSlavicProducts} hideVariations={false} />
      </SectionMain>

      <div className="flex my-16">
        <div className="hidden w-1/4 md:flex md:justify-center md:items-center">
          <ImageMouseMoving src={"/images/addons/quotation-mark-1.png"} />
        </div>
        <div className="flex w-full flex-col items-center justify-center px-2 md:w-2/4">
          <p className=" my-2  mb-4 text-center font-cormorant-infant  font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-3xl ">
            {`  It is important that we have some secret, some mysteries, some personal and unrecognizable element in our lives. If anyone has not experienced that, he really hasn't experienced anything essential. For me, the world has always been infinite and ungraspable from the very beginning`}
          </p>

          <strong className="text-center font-cormorant-infant text-xl font-light italic  text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-lg">
            Carl Gustav Jung
          </strong>
        </div>
        <div className="hidden w-1/4 md:flex md:justify-center md:items-center">
          <ImageMouseMoving
          
            src={"/images/addons/quotation-mark-2.png"}
            reverse={true}
          />
        </div>
      </div>

      {/* Fantasy Illustrations Project */}
      <SectionMain url="fantasy-illustrations">
        <MainTitlesWrapper>
          <HeadingAccent>· Ilustrografia ·</HeadingAccent>
          <MainHeading>
            {`${
              fantasyProducts && fantasyProducts[0].categories[0].name
            } Products`}
          </MainHeading>
          <IconDivider>
            <FaPaintBrush />
          </IconDivider>
          <div className="mb-5 flex w-full flex-col items-center gap-4 rounded-xl bg-black bg-opacity-30 px-20 py-10">
            <MainText>
              {`Projects full of magic and mystery. Worlds both known and unknown. Characters sublime, majestic, and enigmatic.`}
            </MainText>

            <Button
              text={`About ${
                fantasyProducts && fantasyProducts[0].categories[0].name
              }`}
              color={"black"}
              link={`/projects/${
                fantasyProducts && fantasyProducts[0].categories[0].slug
              }`}
            />
          </div>
          <MainStrongText>{`Illustrations and Stories:
         `}</MainStrongText>
        </MainTitlesWrapper>
        <IllustrationsGrid products={fantasyProducts} colNum={3} />

        <MainTitlesWrapper>
          <IconDivider>
            <FaPaintBrush />
          </IconDivider>

          <MainStrongText>{`Unveil the magic:`}</MainStrongText>
        </MainTitlesWrapper>

        <ProductsGrid
          products={fantasyProducts}
          hideVariations={false}
          colNum={3}
        />
      </SectionMain>

      {/* Fantasy Illustrations */}
      {/* <SectionMain color="second">
        <SectionMainTitles
          heading={fantasyProducts && fantasyProducts[0].categories[0].name}
          main={
            "   Step into a world of art and enchantment with Ilustrografia"
          }
          strong=" Unveil the magic Illustrations and Stories:"
        />

        <IllustrationsGrid products={fantasyProducts} colNum={3} />
      </SectionMain> */}

      {/* <ProductsSectionGrid
        products={neoSlavicProducts}
        isLoading={isLoadingNeoSlavic}
        error={errorNeoSlavic}
      />

      <ProductsSectionGrid
        products={fantasyProducts}
        isLoading={isLoadingNeoSlavic}
        error={errorNeoSlavic}
      /> */}
    </div>
  );
};
export default HomePage;
