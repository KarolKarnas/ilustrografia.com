import _ from "lodash";
import { useEffect, useState } from "react";

import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { Product } from "../../types/Product";
import IllustrationsGrid from "../../components/IllustrationsGrid";
import Spinner from "../../components/Spinner";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import Message from "../../components/Message";

const Filter = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [active, setActive] = useState<string>("all");
  const { data: products, isLoading, error } = useGetProductsQuery();
  const allCategories = _.flatMap(products, (product) => product.categories);
  const uniqueCategories = _.uniqBy(allCategories, "slug");

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btnValue = e.currentTarget.value;
    setActive(btnValue);
    if (products) {
      const newFilterProducts = _.filter(products, (product) => {
        return _.some(product.categories, { slug: btnValue });
      });
      if (btnValue === "all") {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(newFilterProducts);
      }
    }
  };

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <Message variant="bad" message={getError(error as ApiError)} />
  ) : (
    <div className="flex w-full flex-col items-center justify-center gap-10 px-2 md:px-24">
      <div className="flex  flex-wrap gap-1 md:gap-5">
        <button
          onClick={handleClick}
          value={"all"}
          className={`${
            active === "all"
              ? "border-red-magic bg-red-magic/60 text-ivory "
              : "text-black-magic dark:border-ivory dark:text-ivory"
          } w-42 flex items-center gap-3 rounded-sm border border-black-magic px-6 py-4  text-2xs  font-semibold uppercase  tracking-widest transition-colors   duration-300 hover:border-red-magic hover:bg-red-magic/80  hover:text-ivory  dark:hover:border-red-magic md:px-8  `}
        >
          All
        </button>
        {uniqueCategories.map((category, index) => {
          const value = category.slug;
          return (
            <button
              onClick={handleClick}
              key={index}
              value={value}
              className={` ${
                active === value
                  ? "border-red-magic bg-red-magic/60 text-ivory "
                  : "text-black-magic dark:border-ivory dark:text-ivory"
              } w-42 flex items-center gap-3 rounded-sm border border-black-magic px-6 py-4  text-2xs  font-semibold uppercase  tracking-widest transition-colors   duration-300 hover:border-red-magic hover:bg-red-magic/80  hover:text-ivory  dark:hover:border-red-magic md:px-8  `}
            >
              {category.name}
            </button>
          );
        })}
      </div>
      <IllustrationsGrid products={filteredProducts} colNum={3} />
    </div>
  );
};

export default Filter;
