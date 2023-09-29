import _ from "lodash";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { Product } from "../../types/Product";
import IllustrationsGrid from "../../components/IllustrationsGrid";

const Filter = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [active, setActive] = useState<string | boolean>(false);

  // console.log(active);
  console.log(filteredProducts);

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

  return (
    <div className="flex px-24 flex-col items-center justify-center gap-10">
      {/* BUTTONS */}
      <div className="flex gap-5">
        <button
          onClick={handleClick}
          value={"all"}
          className={`${
            active === "all" ? "bg-red-200 text-red-50" : ""
          } rounded-3xl border-[1px] border-solid border-red-500 px-5 py-2 text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-red-50 `}
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
                active === value ? "bg-red-200 text-red-50" : ""
              } rounded-3xl border-[1px] border-solid border-red-500 px-5 py-2 text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-red-50 `}
            >
              {category.name}
            </button>
          );
        })}
      </div>
      {/* IMAGES */}

      <IllustrationsGrid products={filteredProducts} colNum={3} />

      {/* <div className='grid grid-cols-3 gap-5 w-8/12'>

				{filteredProducts &&
					filteredProducts.map((product, index) => (
						<Link key={index} to={`/illustrations/${product.slug}`}>
							<img src={product.images[0]} />
						</Link>
					))}
			i</div> */}
    </div>
  );
};

export default Filter;
