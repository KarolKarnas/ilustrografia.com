import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetOrderDetailsQuery } from '../../slices/ordersApiSlice';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';
import { toCheckOrder } from '../../utils/typeCheck';


const OrderDetailsPage = () => {
	const { id: orderId } = useParams();
	console.log(orderId);

	const {
		data,
		error,
		isLoading,
	} = useGetOrderDetailsQuery(orderId);
	

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    <div>{getError(error as ApiError)}</div>;
  }
  
  const order = toCheckOrder(data)
 

	return <div>{order.itemsPrice}zł</div>
  

};
export default OrderDetailsPage;
