import _ from "lodash";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useState } from "react";
// import { useParams, useSearchParams } from 'react-router-dom';
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { Product } from "../../types/Product";
import ProductVariations from "../../components/ProductVariations";

const ShopPage = () => {
  const [productsFiltered, setProductsFiltered] = useState<Product[] | null>(
    null,
  );

  const { data: products, isLoading, error } = useGetProductsQuery();

  const allCategories = _.flatMap(products, (product) => product.categories);

  const uniqueCategories = _.uniqBy(allCategories, "slug");

  const filterProducts = (slug: string) => {
    const filteredProducts = _.filter(products, (product) => {
      return _.some(product.categories, { slug: slug });
    });
    setProductsFiltered(filteredProducts);
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{getError(error as ApiError)}</div>
  ) : (
    <div>
      <h1 className="mt-5 text-center text-3xl font-bold">SHOP</h1>

      <div className="flex">
        <div className="w-2/12 p-2">
          <h3 className="font-fondamento text-lg font-semibold">Categories</h3>
          <RadioGroup.Root
            className="flex flex-col gap-4"
            defaultValue={""}
            aria-label="payment-method"
          >
            <div className="flex items-center">
              {" "}
              <RadioGroup.Item
                className="h-6 w-6 rounded-full shadow-lg shadow-red-500"
                value={""}
                id="r1"
                onClick={() => setProductsFiltered(null)}
              >
                <RadioGroup.Indicator className='relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-lg after:bg-red-300 after:content-[""]' />
              </RadioGroup.Item>
              <label
                className=" text-md pl-4 leading-4 text-slate-800"
                htmlFor="r1"
              >
                Show All
              </label>
            </div>
            {uniqueCategories.map((category, index) => (
              <div key={index} className="flex items-center">
                {" "}
                <RadioGroup.Item
                  className="h-6 w-6 rounded-full shadow-lg shadow-red-500"
                  value={category.slug}
                  id="r1"
                  onClick={(e) => filterProducts(e.currentTarget.value)}
                >
                  <RadioGroup.Indicator className='relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-lg after:bg-red-300 after:content-[""]' />
                </RadioGroup.Item>
                <label
                  className=" text-md pl-4 leading-4 text-slate-800"
                  htmlFor="r1"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </RadioGroup.Root>
        </div>
        <div className="w-10/12">
          <div className="grid grid-cols-1 dark:bg-slate-600 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {productsFiltered
              ? productsFiltered?.map((product: Product) => (
                  <ProductVariations key={product._id} product={product} />
                ))
              : products?.map((product: Product) => (
                  <ProductVariations key={product._id} product={product} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopPage;

{
  /* <div className='flex'>
				{' '}
				{products &&
					products.map((product: Product) => (
						<div key={product._id}>
							{product.variations.map((variation, index) => (
								<div key={index}>
									<ShopVariation
										variation={variation}
										images={product.images}
										variationImage={
											product.options.material[
												variation.options.material as keyof MaterialOptionNoName
											]
										}
									/>
								</div>
							))}
						</div>
					))}
			</div> */
}

{
  /* <button className='font-light text-sm border border-black px-6 py-2 hover:border-red-magic hover:bg-red-200 hover:text-white' onClick={handleResetCategories}>
Reset
</button> */
}
