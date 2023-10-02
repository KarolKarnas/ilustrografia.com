import _ from "lodash";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useEffect, useState } from "react";
// import { useParams, useSearchParams } from 'react-router-dom';
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { Product } from "../../types/Product";
import ProductVariations from "../../components/ProductVariations";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import ProductsGrid from "../../components/ProductsGrid";

const ShopPage = () => {
  const [productsFiltered, setProductsFiltered] = useState<Product[] | null>(
    null,
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const { data: products, isLoading, error } = useGetProductsQuery();

  const allCategories = _.flatMap(products, (product) => product.categories);

  const uniqueCategories = _.uniqBy(allCategories, "slug");

  const filterProducts = (slug: string) => {
    if (products && slug === "all") {
      setProductsFiltered(products);
      setSearchParams({ category: slug });
      return;
    }
    const filteredProducts = _.filter(products, (product) => {
      return _.some(product.categories, { slug: slug });
    });
    setProductsFiltered(filteredProducts);
    setSearchParams({ category: slug });
  };

  useEffect(() => {
    if (!isLoading && searchParams && products) {
      const category = searchParams.get("category");
      if (category) {
        filterProducts(category);
        console.log(category);
      }
    }
  }, [isLoading]);

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <div>{getError(error as ApiError)}</div>
  ) : (
  
      <div className="flex flex-col md:flex-row w-full px-2 lg:px-24">
        <div className="w-full md:w-3/12 lg:w-2/12 p-2 md:p-0 ">
{/* FILTERS */}

          <div className="mb-5 md:sticky md:top-8">
            <h3 className="mb-4 font-fondamento text-lg font-semibold dark:text-ivory ">
              Categories
            </h3>
            <RadioGroup.Root
              className="flex flex-col gap-4"
              defaultValue={""}
              aria-label="payment-method"
            >
              <div className="flex items-center">
                {" "}
                <RadioGroup.Item
               className={`h-5 w-5 rounded-full bg-ivory border border-red-magic`}
                  value={""}
                  id="r-all"
                  onClick={() => filterProducts("all")}
                  checked={
                    !searchParams.get("category") ||
                    searchParams.get("category") === "all"
                  }
                >
                  <RadioGroup.Indicator className='relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-lg after:bg-red-magic after:content-[""]' />
                </RadioGroup.Item>
                <label
                  className=" text-md pl-4 font-montserrat text-xs uppercase leading-4 text-black-magic dark:text-ivory"
                  htmlFor="r-all"
                >
                  All
                </label>
              </div>
              {uniqueCategories.map((category, index) => (
                <div key={index} className="flex items-center">
                  {" "}
                  <RadioGroup.Item
                    className={`h-5 w-5 rounded-full bg-ivory border border-red-magic`}
                    value={category.slug}
                    id={`r${index}`}
                    checked={searchParams.get("category") === category.slug}
                    onClick={(e) => filterProducts(e.currentTarget.value)}
                  >
                    <RadioGroup.Indicator className='relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-lg after:bg-red-magic after:content-[""]' />
                  </RadioGroup.Item>
                  <label
                    className=" text-md pl-4 font-montserrat text-xs uppercase leading-4 text-black-magic dark:text-ivory"
                    htmlFor={`r${index}`}
                  >
                    {category.name}
                  </label>
                </div>
              ))}
            </RadioGroup.Root>
                    </div>
          </div>

        {/* PRODUCTS */}
        <div className="w-full md:w-9/12 lg:w-10/12">
          <ProductsGrid
            products={productsFiltered || products}
            hideVariations={false}
            colNum={3}
          />

          {/* <div className="grid grid-cols-1 dark:bg-slate-600 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {productsFiltered
              ? productsFiltered?.map((product: Product) => (
                  <ProductVariations key={product._id} product={product} />
                ))
              : products?.map((product: Product) => (
                  <ProductVariations key={product._id} product={product} />
                ))}
          </div> */}
        </div>
      </div>

  );
};
export default ShopPage;
