import { Link } from "react-router-dom";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { Product } from "../../types/Product";
import ProductMain from "../../components/ProductMain";
import Spinner from "../../components/Spinner";
import SocialLinks from "../../components/SocialLinks";
import Button from "../../components/Button";

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

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
        <h1 className=" tracking-hero font-montserrat  text-center text-xs md:text-md font-semibold uppercase text-red-400 drop-shadow-hero">
          · Ilustrografia ·
        </h1>
        <h3 className="  text-center font-cormorant-infant text-6xl md:text-8xl font-semibold italic text-white drop-shadow-hero my-2">
          Reality Full of Magic
        </h3>
        <div className="flex gap-8 my-8">
          <Button text={'shop'} color={'red'} link={'/shop'}/>
          <Button text={'about us'} color={'white'} link={'/about-us'}/>
        </div>

        <div className="flex items-center gap-x-2">
          <SocialLinks />
        </div>
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
