import Spinner from "./Spinner";
import { getError } from "../utils/utils";
import { ApiError } from "../types/ApiError";
import { Product } from "../types/Product";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import ProductVariations from "./ProductVariations";



type Props = {
  products: Product[] | undefined | null;
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError;
  colNum?: number;
  aspectRatio?: string;
  hideVariations?: boolean;
};

const ProductsGrid = ({
  products,
  isLoading,
  error,
  colNum,
  aspectRatio,
  hideVariations
}: Props) => {
  return (


    <div
    className={`${
      colNum === 3
        ? "xl:grid-cols-3"
        : colNum === 5
        ? "xl:grid-cols-5"
        : "xl:grid-cols-4"
    } mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 `}
  >
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <div>{getError(error as ApiError)}</div>
        ) : (
          products &&
          products.map((product: Product) => (
            <ProductVariations key={product._id} product={product} hideVariations={hideVariations}  />
          ))
        )}
      </div>
  );
}
export default ProductsGrid