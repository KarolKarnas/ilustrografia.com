import _ from "lodash";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useEffect, useState } from "react";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { Product } from "../../types/Product";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import ProductsGrid from "../../components/ProductsGrid";
import Meta from "../../components/Meta";

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
        // console.log(category);
      }
    }
  }, [isLoading]);

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <div>{getError(error as ApiError)}</div>
  ) : (
    <>
      {" "}
      <Meta title="Shop · Ilustrografia · Illustration · Digital Painting · Fantasy · Legends" />{" "}
      <div className="flex w-full flex-col px-2 md:flex-row lg:min-h-[650px] lg:px-24">
        <div className="w-full p-2 md:w-3/12 md:p-0 lg:w-2/12 ">
          {/* FILTERS */}

          <div className="mb-5 md:sticky md:top-8">
            <h3 className="mb-4 font-fondamento text-lg font-semibold dark:text-ivory ">
              Categories
            </h3>
            <RadioGroup.Root
              className="flex flex-col gap-4"
              defaultValue={""}
              aria-label="filter-categories"
            >
              <div className="flex items-center">
                {" "}
                <RadioGroup.Item
                  className={`h-5 w-5 rounded-full border border-red-magic bg-ivory`}
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
                    className={`h-5 w-5 rounded-full border border-red-magic bg-ivory`}
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
        </div>
      </div>
    </>
  );
};
export default ShopPage;
