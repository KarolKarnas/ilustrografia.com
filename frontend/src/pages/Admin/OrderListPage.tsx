import { useEffect, useState } from "react";
import { useGetAllOrdersQuery } from "../../slices/ordersApiSlice"
import { Order } from "../../types/Order";
import { toCheckOrders } from "../../utils/typeCheck";
import { FaTimes, FaCheck } from 'react-icons/fa';
import { Link } from "react-router-dom";




const OrderListPage = () => {

  const [orders, setOrders] = useState<Order[]>();

  const {data, isLoading, isError} = useGetAllOrdersQuery({})
  console.log(data)

  useEffect(() => {
		if (!isLoading) {
			const orders: Order[] = toCheckOrders(data);
			console.log(orders);
			setOrders(orders);
		}
	}, [isLoading]);
  return (
    <div className='w-3/4'>
    <h2 className='text-2xl text-zinc-400'>Orders</h2>
    <div className='flex flex-col mt-4 w-full'>
      {!orders ? (
        <div>No orders</div>
      ) : (
        <div className='flex gap-1'>
          {' '}
          <div className='basis-3/12 font-bold'>ID</div>
          <div className='basis-3/12 font-bold'>NAME</div>
          <div className='basis-1/12 font-bold'>DATE</div>
          <div className='basis-1/12 font-bold'>TOTAL</div>
          <div className='basis-1/12 font-bold text-center'>PAID</div>
          <div className='basis-1/12 font-bold text-center'>
            DELIVERED
          </div>
          <div className='basis-2/12 font-bold'>DETAILS</div>
        </div>
      )}
      {orders &&
        orders.map((order, index) => (
          <div
            className={`${
              index % 2 === 0 ? 'bg-red-100' : ''
            } flex gap-1 `}
            key={index}
          >
            {' '}
            <div className='basis-3/12'>{order._id}</div>
            <div className='basis-3/12'>
              {order.user.name}
            </div>
            <div className='basis-1/12'>
              {order.createdAt.substring(0, 10)}
            </div>
            <div className='basis-1/12'>
              {order.totalPrice.toFixed(2)}zł
            </div>
            <div className='basis-1/12 flex items-center justify-center'>
              {order.isPaid ? (
                order.paidAt?.substring(0, 10)
              ) : (
                <FaTimes className='text-red-400' />
              )}
            </div>
            <div className='basis-1/12 flex items-center justify-center'>
              {order.isDelivered ? (
                order.deliveredAt?.substring(0, 10)
              ) : (
                <FaTimes className='text-red-400' />
              )}
            </div>
            <Link
              to={`/order/${order._id}`}
              className='basis-2/12 underline hover:text-red-300'
            >
              Details
            </Link>
          </div>
        ))}
    </div>
  </div>
  )
}
export default OrderListPage