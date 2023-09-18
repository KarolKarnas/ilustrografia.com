import { Link } from "react-router-dom";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { Product } from "../../types/Product";
import ProductMain from "../../components/ProductMain";
import Spinner from "../../components/Spinner";
import SocialLinks from "../../components/SocialLinks";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import YouTubeEmbed from "../../components/YouTubeEmbed";
import { useGetNeoSlavicQuery } from "../../slices/ytApiSlice";
import Slider from "../../components/Slider";
import LatestVideos from "../../components/LatestVideos";
import Message from "../../components/Message";

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
    data: ytSearch,
    isLoading: ytSearchLoading,
    error: ytSearchError,
  } = useGetNeoSlavicQuery();

  // console.log(ytSearchError);

  // console.log(ytSearch);

  console.log(products);

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
    <div className="w-11/12">
      <h3 id="test"></h3>
      {/* <div className="flex w-3/4 justify-center">
        {ytSearchLoading ? (
          <Spinner />
        ) : (
          ytSearch &&  <Slider youtubeItems={ytSearch?.items} />
        )}
      </div> */}

      <div className="flex w-3/4 justify-center">
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
      <div
        className=" mt-5 flex
       h-screen flex-col items-center justify-center  rounded-3xl bg-[url('../public/images/neo-slavic-creatures.jpg')] bg-cover bg-center bg-no-repeat md:h-192 "
      >
        <div className=" flex flex-col items-center justify-center  p-2">
          <span className=" md:text-md text-center  font-montserrat text-xs font-semibold uppercase tracking-hero text-red-400 drop-shadow-hero">
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
        S
      </div>

      <div className="flex">
        <div className="w-1/4">
          <img
            id="magic"
            className=" dark:invert-90 "
            src="/images/addons/magic.png"
            alt=""
          />
        </div>
        <div className="flex w-2/4 flex-col items-center justify-center">
          <span className=" md:text-md mb-4  text-center font-montserrat text-xs font-semibold uppercase tracking-hero  text-red-400 drop-shadow-lg">
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
            alt=""
          />
        </div>
      </div>
      {/* <ProjectGroup /> */}
      <div className="grid grid-cols-1 dark:bg-slate-600 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products.map((product: Product) => (
            <ProductMain key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default HomePage;
