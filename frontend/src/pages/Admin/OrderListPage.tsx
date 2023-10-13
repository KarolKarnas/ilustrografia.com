import { useGetAllOrdersQuery } from "../../slices/ordersApiSlice";
import { FaListUl, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import PageHeading from "../../components/primitives/PageHeading";
import IconDivider from "../../components/primitives/IconDivider";
import Spinner from "../../components/Spinner";
import Message from "../../components/Message";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";

const OrderListPage = () => {
  const { data: orders, isLoading, error } = useGetAllOrdersQuery();

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
          <PageHeading>Order List</PageHeading>
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
      ) : (
        <div className="mt-4 flex w-full flex-col">
          <div className=" overflow-x-auto  shadow-hero">
            <table className="min-w-full  border text-center text-sm font-light text-black-magic dark:border-neutral-700 dark:text-ivory">
              <thead className="border-b font-montserrat font-semibold dark:border-neutral-700 dark:bg-black-magic ">
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-700"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-700"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-700"
                  >
                    Paid
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-700"
                  >
                    Delivered
                  </th>
                  <th scope="col" className="px-6 py-4 ">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.map((order, index) => (
                    <tr
                      key={index}
                      className={`border-b dark:border-neutral-700 ${
                        index % 2 === 0 ? "bg-white dark:bg-angel-space" : ""
                      }`}
                    >
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                        {order._id}
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                        {order.user.name}
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                        {order.createdAt.substring(0, 10)}
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                        ${order.totalPrice.toFixed(2)}
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                        {order.isPaid ? (
                          order.paidAt?.substring(0, 10)
                        ) : (
                          <FaTimes className="mx-auto text-red-magic" />
                        )}
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                        {order.isDelivered ? (
                          order.deliveredAt?.substring(0, 10)
                        ) : (
                          <FaTimes className="mx-auto text-red-magic" />
                        )}
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                        <Link
                          to={`/order/${order._id}`}
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
        </div>
      )}
    </div>
  );
};
export default OrderListPage;
