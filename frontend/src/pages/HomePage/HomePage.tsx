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

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  console.log(mousePos);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // console.log(products)
  return isLoading ? (
    <Spinner />
  ) : error ? (
    <div>{getError(error as ApiError)}</div>
  ) : (
    <div className="w-11/12">
      <div
        className=" mt-5 flex
       h-screen flex-col items-center justify-center  rounded-3xl bg-[url('../public/images/neo-slavic-creatures.jpg')] bg-cover bg-center bg-no-repeat md:h-192 "
      >
        <div className=" flex flex-col items-center justify-center p-2">
          <span className=" md:text-md text-red-400  text-center font-montserrat text-xs font-semibold uppercase tracking-hero drop-shadow-hero">
            · Ilustrografia ·
          </span>
          <h1 className="  text-white my-2 text-center font-cormorant-infant text-6xl font-semibold italic drop-shadow-hero md:text-8xl">
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
        <div className="w-1/4">
          <img
            style={{
              transform: `translateX(${(mousePos.x - 1000) / 4}px) translateY(${
                (mousePos.y - 200) / 4
              }px)`,
            }}
            className=" dark:invert-90 "
            src="/images/addons/magic.png"
            alt=""
          />
        </div>
        <div className="flex w-2/4 flex-col items-center justify-center">
          <span className=" md:text-md text-red-400  mb-4 text-center font-montserrat text-xs font-semibold uppercase  tracking-hero drop-shadow-lg">
            · Ilustrografia ·
          </span>
          <h3 className=" text-eerie-black  dark:text-ivory drop-shadow-red-heading my-2  mb-4 text-center font-cormorant-infant text-3xl font-semibold italic dark:drop-shadow-xl md:text-6xl ">
            Greetings, Wanderer!
          </h3>
          <strong className=" text-eerie-black dark:text-ivory mb-5 text-center">
            No doubt you&apos;re pondering what extraordinary place you&apos;ve
            stumbled upon, aren&apos;t you?{" "}
          </strong>
          <span className=" text-eerie-black dark:text-ivory mb-8 text-center">
            Ilustrografia is a magical endeavor that intertwines the artful
            mystery of painting, the enthralling narrative power, and the
            enchanting force of photography. We set forth into the uncharted,
            crafting and uncovering realms eager to be explored. Our sole
            limitation is imagination, and when it comes to imagination, there
            are no boundaries.
          </span>
          <strong className="text-eerie-black dark:text-ivory drop-shadow-red-heading text-center font-cormorant-infant  text-2xl font-semibold italic dark:drop-shadow-lg">
            Will you muster the courage to venture with us?
          </strong>
        </div>
        <div className="w-1/4">
          <img
            style={{
              transform: `translateX(${(mousePos.x - 700) / -6}px) translateY(${
                (mousePos.y - 400) / -10
              }px)`,
            }}
            className=" dark:invert-90"
            src="/images/addons/brush.png"
            alt=""
          />
        </div>
      </div>
      {/* <ProjectGroup /> */}
      <div className="dark:bg-slate-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products.map((product: Product) => (
            <ProductMain key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default HomePage;
