import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { ApiError } from "../types/ApiError";
import { Product } from "../types/Product";
import { getError } from "../utils/utils";
import ProductVariations from "./ProductVariations";
import Spinner from "./Spinner";
import { SerializedError } from "@reduxjs/toolkit";

type Props = {
  products: Product[] | undefined;
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError;
};

const ProductsSectionGrid = ({ products, isLoading, error }: Props) => {

  console.log(products)

  return (
    <div className=" flex flex-col items-center justify-center rounded-xl bg-moon-dust px-2 py-16 shadow-hero dark:bg-angel-space md:px-24 lg:px-16 xl:px-10 2xl:px-36  ">
      <div className="mb-8 flex w-1/2 flex-col items-center">
        <span className=" md:text-md mb-4  text-center font-montserrat text-xs font-semibold uppercase tracking-hero  text-red-magic drop-shadow-lg">
          · Ilustrografia ·
        </span>
        <h3 className=" my-2  mb-4 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-6xl ">
        {products && products[0].categories[0].name}
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
          products.map((product: Product) => (
            <ProductVariations key={product._id} product={product}  />
          ))
        )}
      </div>
    </div>
  );
};
export default ProductsSectionGrid;
