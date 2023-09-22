import { useGetAllOrdersQuery } from "../../slices/ordersApiSlice";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderListPage = () => {
  const { data: orders, isLoading, isError } = useGetAllOrdersQuery();

  return (
    <div className="w-3/4">
      <h2 className="text-2xl text-zinc-400">Orders</h2>
      <div className="mt-4 flex w-full flex-col">
        {!orders ? (
          <div>No orders</div>
        ) : (
          <div className="flex gap-1">
            {" "}
            <div className="basis-3/12 font-bold">ID</div>
            <div className="basis-3/12 font-bold">NAME</div>
            <div className="basis-1/12 font-bold">DATE</div>
            <div className="basis-1/12 font-bold">TOTAL</div>
            <div className="basis-1/12 text-center font-bold">PAID</div>
            <div className="basis-1/12 text-center font-bold">DELIVERED</div>
            <div className="basis-2/12 font-bold">DETAILS</div>
          </div>
        )}
        {orders &&
          orders.map((order, index) => (
            <div
              className={`${index % 2 === 0 ? "bg-red-100" : ""} flex gap-1 `}
              key={index}
            >
              {" "}
              <div className="basis-3/12">{order._id}</div>
              <div className="basis-3/12">{order.user.name}</div>
              <div className="basis-1/12">
                {order.createdAt.substring(0, 10)}
              </div>
              <div className="basis-1/12">${order.totalPrice.toFixed(2)}</div>
              <div className="flex basis-1/12 items-center justify-center">
                {order.isPaid ? (
                  order.paidAt?.substring(0, 10)
                ) : (
                  <FaTimes className="text-red-magic" />
                )}
              </div>
              <div className="flex basis-1/12 items-center justify-center">
                {order.isDelivered ? (
                  order.deliveredAt?.substring(0, 10)
                ) : (
                  <FaTimes className="text-red-magic" />
                )}
              </div>
              <Link
                to={`/order/${order._id}`}
                className="basis-2/12 underline hover:text-red-300"
              >
                Details
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default OrderListPage;
