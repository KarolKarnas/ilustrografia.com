import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "../../slices/productsApiSlice";
import { Product } from "../../types/Product";
import ProductMain from "../../components/ProductMain";
import Spinner from "../../components/Spinner";
import SocialLinks from "../../components/SocialLinks";
import Button from "../../components/Button";
import { useEffect } from "react";
import { useGetNeoSlavicQuery } from "../../slices/ytApiSlice";
import LatestVideos from "../../components/LatestVideos";
import Message from "../../components/Message";
import ProductVariations from "../../components/ProductVariations";
import ProductsSectionGrid from "../../components/ProductsSectionGrid";
import IllustrationsSectionGrid from "../../components/IllustrationsSectionGrid";

const useMouseMove = (onMouseMove: (event: MouseEvent) => void) => {
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseMove]);
};

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

  console.log(neoSlavicProducts);

  const {
    data: ytSearch,
    isLoading: ytSearchLoading,
    error: ytSearchError,
  } = useGetNeoSlavicQuery(3);

  useMouseMove((e) => {
    const magic = document.getElementById("magic");
    const brush = document.getElementById("brush");

    if (magic) {
      magic.style.transform = `translateX(${
        (e.clientX - 1000) / 4
      }px) translateY(${(e.clientY - 200) / 4}px)`;
    }
    if (brush) {
      brush.style.transform = `translateX(${
        (e.clientX - 700) / -6
      }px) translateY(${(e.clientY - 400) / -10}px)`;
    }
  });

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <div>{getError(error as ApiError)}</div>
  ) : (
    <div className="my-10 flex w-full flex-col gap-y-20 p-2 md:w-11/12">

      <div
        className=" mt-5 flex
       h-screen flex-col items-center justify-center  rounded-3xl bg-[url('../public/images/neo-slavic-creatures.jpg')] bg-cover bg-center bg-no-repeat shadow-hero md:h-192"
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
      P</div>
      <div className="flex">
        <div className="w-1/4">
          <img
            id="magic"
            className=" dark:invert-90 "
            src="/images/addons/magic.png"
            alt="magic energy"
          />
        </div>
        <div className="flex w-2/4 flex-col items-center justify-center">
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
        <div className="w-1/4">
          <img
            id="brush"
            className=" dark:invert-90"
            src="/images/addons/brush.png"
            alt="brush with paint dots"
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
            Our newest animations!
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

        {/* {ytSearchLoading ? (
          <Spinner />
        ) : ytSearchError ? (
          <Message
            variant="bad"
            message={getError(ytSearchError as ApiError)}
            // message={ytSearchError.data.message}
          />
        ) : (
          ytSearch && <LatestVideos youtubeItems={ytSearch.items} />
        )} */}
      </div>

      <IllustrationsSectionGrid products={neoSlavicProducts} colNum={4} />


      <ProductsSectionGrid products={neoSlavicProducts} isLoading={isLoadingNeoSlavic} error={errorNeoSlavic}/>

      <ProductsSectionGrid products={fantasyProducts} isLoading={isLoadingNeoSlavic} error={errorNeoSlavic}/>

      {/* Product grid */}


    </div>
  );
};
export default HomePage;


// <div className=" flex flex-col items-center justify-center rounded-xl bg-moon-dust px-2 py-16 shadow-hero dark:bg-angel-space md:px-24 lg:px-16 xl:px-10 2xl:px-36  ">
// <div className="mb-8 flex w-1/2 flex-col items-center">
//   <span className=" md:text-md mb-4  text-center font-montserrat text-xs font-semibold uppercase tracking-hero  text-red-magic drop-shadow-lg">
//     · Ilustrografia ·
//   </span>
//   <h3 className=" my-2  mb-4 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-6xl ">
//     Explore Our Enchanting Prints!
//   </h3>
//   <span className=" mb-8 text-center text-eerie-black dark:text-ivory">
//     Step into a world of art and enchantment with Ilustrografia&apos;s
//     unique prints. Each one is more than just an image; it&apos;s a
//     gateway to a realm of imagination and wonder. From Basilisks to
//     Spring Nymphs and Forest Bobos, our prints add a touch of magic to
//     your everyday life. Hang them on your walls and unlock extraordinary
//     abilities. Crush walnuts effortlessly, master local topography, or
//     even disrupt picnics with mischievous charm. Our prints aren&apos;t
//     just art; they&apos;re keys to new experiences. Choose from our
//     premium Fine Art Prints (Giclée), textured Canvas prints, or
//     eco-friendly Poster prints. Whichever you select, you&apos;re
//     investing in perfection that will last for generations.
//   </span>
//   <strong className="text-center font-cormorant-infant text-2xl font-semibold italic  text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-lg">
//     Discover the enchantment. Explore our prints today
//   </strong>
// </div>

// <div className=" grid grid-cols-1 gap-16 lg:grid-cols-2 xl:grid-cols-3 ">
//   {products &&
//     products.map((product: Product) => (
//       <ProductVariations key={product._id} product={product} />
//     ))}
// </div>
// </div>