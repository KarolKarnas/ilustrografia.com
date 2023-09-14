import { Link } from "react-router-dom";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { Product } from "../../types/Product";
import ProductMain from "../../components/ProductMain";
import Spinner from "../../components/Spinner";

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  // console.log(products)
  return isLoading ? (
    <Spinner />
  ) : error ? (
    <div>{getError(error as ApiError)}</div>
  ) : (
    <div className="w-10/12">
      <div className="  flex h-screen flex-col  items-center justify-center bg-[url('../public/images/neo-slavic-creatures.jpg')] bg-cover bg-center bg-no-repeat md:h-192">
        <h1 className="  mt-5 text-center font-cormorant-infant text-5xl font-bold text-red-400 drop-shadow-hero">
          · Ilustrografia ·
        </h1>
      </div>
      <h2 className="  mb-10 text-center text-xl font-bold underline">
        These are our products:
      </h2>
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
