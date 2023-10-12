import { Product } from "../../types/Product";
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} from "../../slices/productsApiSlice";
import { FaEdit, FaTrash, FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import PageHeading from "../../components/primitives/PageHeading";
import IconDivider from "../../components/primitives/IconDivider";

const ProductListPage = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();

  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();

  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation();

  // console.log(products);

  const createProductHandler = async () => {
    if (window.confirm("Are you sure you want to create a new product?")) {
      try {
        await createProduct();
        refetch();
        toast.success(`Product created successfully`);
      } catch (error) {
        toast.error(getError(error as ApiError));
      }
    }
  };

  // const createVariationHandler = async (slug: string) => {
  // 	await console.log(slug);
  // };

  const handleDeleteProduct = async (slug: string) => {
    // console.log(`delete ${slug}`);

    if (window.confirm(`Are you sure you want to delete ${slug}?`)) {
      try {
        const res = await deleteProduct(slug);
        console.log(res);
        refetch();
        toast.success(`Product ${slug} deleted successfully`);
      } catch (error) {
        toast.error(getError(error as ApiError));
      }
    }
  };

  return (
    <div className="flex w-11/12 flex-col">

<div
        className="relative mb-8 flex
     h-48 w-full flex-col items-center justify-center rounded-3xl bg-angel-dust shadow-hero dark:bg-angel-dark-dust sm:bg-inherit md:mb-20 md:h-[330px] "
      >
        <img
          src="/images/shop/printings-images.jpg "
          alt=""
          className="hidden h-full w-full rounded-3xl  object-none dark:invert-90 sm:block"
        />

        <div className="absolute flex flex-col items-center justify-center">
          <HeadingAccent>· Admin ·</HeadingAccent>
          <PageHeading>Product List</PageHeading>
          <IconDivider>
            <FaListUl className="text-xl md:text-2xl" />
          </IconDivider>
        </div>
      </div>

      {/* <div className='flex justify-between'>
				<h1 className='text-2xl text-zinc-400'>Products</h1>
				<button
					onClick={createProductHandler}
					className={`
								
								 bg-zinc-900 text-white hover:bg-red-200
							 px-32 py-1  my-2`}
				>
					Add Product
				</button>
			</div> */}

      {/* {loadingCreate && <div>Loading...</div>}
				{loadingDelete && <div>Loading...</div>}

				{isLoading ? (
					<div>Loading...</div>
				) : ( */}

      <div className="flex w-full flex-col gap-5 ">
        {products &&
          products.map((product: Product, index) => (
            <div 	key={index} className=" overflow-x-auto">
							<table
							
								className=" min-w-full  border text-center text-sm font-light text-black-magic dark:border-neutral-600 dark:text-ivory"
							>
								<thead className="border-b font-montserrat font-semibold dark:border-neutral-600 ">
									<tr>
										<td
											colSpan={7}
											className="whitespace-nowrap border-b px-6 py-4 text-lg dark:border-neutral-600"
										>
											<div className="flex justify-between">
												<span>
													{product.name} {product._id}{" "}
													{product.categories[0].name}
												</span>
												<span className="flex gap-4">
													<Link
														to={`/admin/product-list/${product.slug}/edit`}
														className="hover:cursor-pointer hover:text-red-300"
													>
														<FaEdit />
													</Link>{" "}
													<FaTrash
														onClick={() => handleDeleteProduct(product.slug)}
														className="text-red-500 hover:cursor-pointer hover:text-red-300"
													/>
												</span>
											</div>
										</td>
									</tr>
									<tr>
										<th
											scope="col"
											className="border-r px-6 py-4 dark:border-neutral-600"
										>
											Id
										</th>
										<th
											scope="col"
											className="border-r px-6 py-4 dark:border-neutral-600"
										>
											SKU
										</th>
										<th
											scope="col"
											className="border-r px-6 py-4 dark:border-neutral-600"
										>
											Material
										</th>
										<th
											scope="col"
											className="border-r px-6 py-4 dark:border-neutral-600"
										>
											Size
										</th>
										<th
											scope="col"
											className="border-r px-6 py-4 dark:border-neutral-600"
										>
											Count in Stock
										</th>
										<th
											scope="col"
											className="border-r px-6 py-4 dark:border-neutral-600"
										>
											Price
										</th>
										<th scope="col" className="px-6 py-4 ">
											Details
										</th>
									</tr>
								</thead>
								<tbody>
									{product.variations.map((variation, index) => (
										<tr
											key={index}
											className={`border-b dark:border-neutral-600 ${
												index % 2 === 0 ? "bg-white dark:bg-black-magic" : ""
											}`}
										>
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-600">
												{variation._id}
											</td>
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-600">
																	{variation.SKU}
											</td>
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-600">
																	{variation.options.material}
											</td>
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-600">
																	{variation.options.size}
											</td>
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-600">
																	{variation.countInStock}
											</td>
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-600">
																	${variation.price}
											</td>
																	<td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-600">
												<Link
													to={`/shop/${product.slug}?material=${variation.options.material}&size=${variation.options.size}`}
													className="text-red-magic underline transition-colors duration-500 hover:text-eerie-black"
												>
													Details
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
          ))}

        {products &&
          products.map((product: Product, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "bg-red-100" : ""
              } mb-10 flex flex-col border`}
            >
              <div className="flex gap-1">
                {" "}
                <div className="basis-3/12 font-bold">ID</div>
                <div className="basis-1/12 font-bold">NAME</div>
                <div className="basis-3/12 font-bold">CATEGORY</div>
                <div className="basis-1/12 font-bold">TOTAL</div>
                <div className="basis-2/12 font-bold">DETAILS</div>
                <div className="basis-2/12 font-bold">EDIT/DELETE</div>
              </div>
              <div className="flex gap-1">
                {" "}
                <div className="basis-3/12">{product._id}</div>
                <div className="basis-1/12">{product.name}</div>
                <div className="basis-3/12">{product.categories[0].name}</div>
                <div className="basis-1/12">
                  {product.options.material.optionName}
                </div>
                <Link
                  to={`/shop/${product.slug}`}
                  className="basis-2/12 underline hover:text-red-300"
                >
                  Details
                </Link>
                <div className="flex basis-2/12 gap-2">
                  <Link
                    to={`/admin/product-list/${product.slug}/edit`}
                    className="hover:cursor-pointer hover:text-red-300"
                  >
                    <FaEdit />
                  </Link>{" "}
                  <FaTrash
                    onClick={() => handleDeleteProduct(product.slug)}
                    className="text-red-500 hover:cursor-pointer hover:text-red-300"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <h3>Variations of {product.name}</h3>
                {/* <button
											onClick={() => createVariationHandler(product.slug)}
											className={`
								
								 bg-zinc-900 text-white hover:bg-red-200
							 px-32 py-1  my-2`}
										>
											Add Variation
										</button> */}
              </div>
              <div className="flex gap-1">
                {" "}
                <div className="basis-2/12 text-sm font-semibold">ID</div>
                <div className="basis-2/12 text-sm font-semibold">SKU</div>
                <div className="basis-2/12 text-sm font-semibold">MATERIAL</div>
                <div className="basis-1/12 text-sm font-semibold">SIZE</div>
                <div className="basis-1/12 text-sm font-semibold">
                  COUNT IN STOCK
                </div>
                <div className="basis-1/12 text-sm font-semibold">PRICE</div>
                <div className="basis-2/12 text-sm font-semibold">DETAILS</div>
                {/* <div className='basis-1/12 font-semibold text-sm'>
											DELETE
										</div> */}
              </div>
              <div>
                {product.variations.map((variation, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex gap-1">
                      {" "}
                      <div className="basis-2/12 text-sm">{variation._id}</div>
                      <div className="basis-2/12 text-sm">{variation.SKU}</div>
                      <div className="basis-2/12 text-sm">
                        {variation.options.material}
                      </div>
                      <div className="basis-1/12 text-sm">
                        {variation.options.size}
                      </div>
                      <div className="basis-1/12 text-sm">
                        {variation.countInStock}
                      </div>
                      <div className="basis-1/12 text-sm">
                        ${variation.price}
                      </div>
                      <div className="basis-2/12">
                        <Link
                          to={`/shop/${product.slug}?material=${variation.options.material}&size=${variation.options.size}`}
                          className="basis-2/12 underline hover:text-red-300"
                        >
                          details
                        </Link>
                      </div>
                      {/* <div className='basis-1/12 text-sm'>DELETE</div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ProductListPage;
