import { Product } from "../../types/Product";
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} from "../../slices/productsApiSlice";
import { FaEdit, FaTrash, FaListUl } from "react-icons/fa";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import PageHeading from "../../components/primitives/PageHeading";
import IconDivider from "../../components/primitives/IconDivider";
import Spinner from "../../components/Spinner";
import Message from "../../components/Message";

const ProductListPage = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();

  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();

  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation();

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
      <div className="fixed bottom-3 left-3 z-50 flex flex-col">
        <button
          type="button"
          onClick={createProductHandler}
          className={` inline-flex items-center gap-2 rounded-full bg-red-magic p-3 text-white shadow-sm drop-shadow-xl transition duration-500 md:hover:bg-red-500 md:focus:outline-none  `}
        >
          <BsDatabaseFillAdd className="h-6 w-6" aria-hidden="true" />
          <span className="text-xs uppercase">Add new Product</span>
        </button>
      </div>

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
      
      {isLoading ? (
        <div className="flex w-full justify-center">
          <Spinner></Spinner>
        </div>
      ) : error ? (
        <Message variant="bad" message={getError(error as ApiError)} />
      ) : loadingCreate ? (
        <div className="flex w-full justify-center">
          <Spinner></Spinner>
        </div>
      ) : loadingDelete ? (
        <div className="flex w-full justify-center">
          <Spinner></Spinner>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-10 md:gap-28 ">
          {products &&
            products.map((product: Product, index) => (
              <div key={index} className=" overflow-x-auto  shadow-hero">
                <table className=" min-w-full  border text-center text-sm font-light text-black-magic dark:border-neutral-700 dark:text-ivory  ">
                  <thead className="border-b font-montserrat font-semibold dark:border-neutral-700 ">
                    <tr>
                      <td
                        colSpan={7}
                        className="whitespace-nowrap border-b bg-angel-dust px-6 py-4  dark:border-neutral-700 dark:bg-black-magic md:px-12 md:py-8"
                      >
                        <div className="xl:gap:0 flex items-end justify-normal gap-3 text-xl lg:text-2xl xl:justify-between ">
                          <span>
                            {product.name} {product._id}{" "}
                            {product.categories[0].name}
                          </span>
                          <span className="flex gap-3">
                            <Link
                              to={`/admin/product-list/${product.slug}/edit`}
                              className="cursor-pointer rounded-3xl bg-red-magic p-2 text-ivory transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110"
                            >
                              <FaEdit />
                            </Link>{" "}
                            <div
                              className="cursor-pointer rounded-3xl bg-red-magic p-2 text-ivory transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110"
                              onClick={() => handleDeleteProduct(product.slug)}
                            >
                              <FaTrash />
                            </div>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-700"
                      >
                        Id
                      </th>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-700"
                      >
                        SKU
                      </th>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-700"
                      >
                        Material
                      </th>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-700"
                      >
                        Size
                      </th>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-700"
                      >
                        Count in Stock
                      </th>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-700"
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
                        className={`border-b dark:border-neutral-700 ${
                          index % 2 === 0 ? "bg-white dark:bg-angel-space" : ""
                        }`}
                      >
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                          {variation._id}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                          {variation.SKU}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                          {variation.options.material}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                          {variation.options.size}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                          {variation.countInStock}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                          ${variation.price}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
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
        </div>
      )}
    </div>
  );
};
export default ProductListPage;
