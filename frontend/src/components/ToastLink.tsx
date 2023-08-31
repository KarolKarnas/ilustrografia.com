import { Link } from 'react-router-dom';

type Props = {
	product: string;
};

const ToastLink = ({ product }: Props) => {
	return <div>{product} added to <Link className='hover:text-red-500 underline' to={'/cart'}>cart</Link></div>
};
export default ToastLink;
