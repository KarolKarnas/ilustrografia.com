// import ProjectGroup from '../../components/ProjectGroup';
import Rating from '../../components/Rating';
// import { products } from '../../data';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../../types/Product';
import { useEffect, useReducer } from 'react';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';

type State = {
	products: Product[];
	loading: boolean;
	error: string;
};
type Action =
	| { type: 'FETCH_REQUEST' }
	| {
			type: 'FETCH_SUCCESS';
			payload: Product[];
	  }
	| { type: 'FETCH_FAIL'; payload: string };

const initialState: State = {
	products: [],
	loading: true,
	error: '',
};
const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'FETCH_REQUEST':
			return { ...state, loading: true };
		case 'FETCH_SUCCESS':
			return { ...state, products: action.payload, loading: false };
		case 'FETCH_FAIL':
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

const HomeScreen = () => {
	const [{ loading, error, products }, dispatch] = useReducer<
		React.Reducer<State, Action>
	>(reducer, initialState);

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'FETCH_REQUEST' });
			try {
				const result = await axios.get('/api/products');
				dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
			} catch (err) {
				dispatch({ type: 'FETCH_FAIL', payload: getError(err as ApiError) });
			}
		};
		fetchData();
	}, []);

	return loading ? (
		<div>Loading...</div>
	) : error ? (
		<div>{error}</div>
	) : (
		<>
			<h1 className='text-3xl font-bold text-center mt-5'>
				Welcome to ilustrografia
			</h1>
			<h2 className='text-xl font-bold text-center underline mb-10'>
				These are our products:
			</h2>
			{/* <ProjectGroup /> */}
			<div className='flex'>
				{products.map((product) => (
					<div key={product._id}>
						<div className='bg-red-200 m-2'>
							<h4 className='p-2 italic'>{product.name}</h4>
							<Link to={`shop/${product.slug}`}>
								<img
									className='h-80 hover:cursor-pointer hover:scale-110 transition duration-300'
									src={product.images[0]}
									alt={`${product.slug}-${product.categories[0].slug}`}
								/>
							</Link>
							<div className='p-2'>
								<Rating
									rating={product.rating.rating}
									numReviews={product.rating.numReviews}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
export default HomeScreen;
