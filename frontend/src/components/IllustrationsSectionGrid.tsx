import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { ApiError } from "../types/ApiError";
import { Product } from "../types/Product";
import { getError } from "../utils/utils";
import ProductVariations from "./ProductVariations";
import Spinner from "./Spinner";
import { SerializedError } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

type Props = {
  products: Product[] | undefined;
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError;
};

const IllustrationsSectionGrid = ({ products, isLoading, error }: Props) => {
  return (
    <div className=" flex flex-col items-center justify-center rounded-xl bg-moon-dust px-2 py-16 shadow-hero dark:bg-angel-space md:px-24 lg:px-16 xl:px-10 2xl:px-36  ">
      <div className="mb-8 flex w-1/2 flex-col items-center">
        <h3 className=" my-2  mb-4 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-6xl ">
          Other illustrations from {products && products[0].categories[0].name}
        </h3>
        <span className=" mb-8 text-center text-eerie-black dark:text-ivory">
          Step into a world of art and enchantment with Ilustrografia
        </span>
        <strong className="text-center font-cormorant-infant text-2xl font-semibold italic  text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-lg">
          Discover the enchantment. Explore our prints today
        </strong>
      </div>

      <div className=" grid grid-cols-1 gap-16 lg:grid-cols-2 xl:grid-cols-3 ">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <div>{getError(error as ApiError)}</div>
        ) : (
          products &&
          products.map((product, index) => (
            <Link key={index} to={`/illustrations/${product.slug}`}>
              <img src={product.images[0]} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default IllustrationsSectionGrid;
