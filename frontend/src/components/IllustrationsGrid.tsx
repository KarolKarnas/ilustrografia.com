import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { getError } from "../utils/utils";
import { ApiError } from "../types/ApiError";
import { Product } from "../types/Product";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

type IllustrationsGridProps = {
  products: Product[] | undefined;
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError;
  colNum?: number;
  aspectRatio?: string;
};

const IllustrationsGrid = ({
  products,
  isLoading,
  error,
  colNum,
  aspectRatio,
}: IllustrationsGridProps) => {
  return (
    <div
      role="group"
      aria-label="Image Gallery"
      className={`${
        colNum === 3
          ? "xl:grid-cols-3"
          : colNum === 5
          ? "xl:grid-cols-5"
          : colNum === 2
          ? "xl:grid-cols-2"
          : "xl:grid-cols-4"
      } grid grid-cols-1 gap-8 lg:grid-cols-2 `}
    >
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <div>{getError(error as ApiError)}</div>
      ) : (
        products &&
        products.map((product, index) => (
          <Link key={index} to={`/illustrations/${product.slug}`}>
            <div className=" relative shadow-small-hero ">
              <div className="absolute flex h-full w-full transform items-center justify-center bg-black bg-opacity-0 font-montserrat text-xl text-ivory text-opacity-0 transition duration-500 hover:bg-opacity-60 hover:text-opacity-100">
                {product.name}
              </div>
              <img
                role="img"
                data-testid="img"
                src={product.images[0]}
                className={`${
                  aspectRatio === "4/5" ? `aspect-[4/5]` : "aspect-square"
                } w-full object-cover`}
              />
            </div>
          </Link>
        ))
      )}
    </div>
  );
};
export default IllustrationsGrid;
