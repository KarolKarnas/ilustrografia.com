import _ from 'lodash';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../slices/productsApiSlice';
import { Product } from '../../types/Product';

const Filter = () => {
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [active, setActive] = useState<string | boolean>(false);

	console.log(active);

	const { data: products, isLoading, error } = useGetProductsQuery();
	const allCategories = _.flatMap(products, (product) => product.categories);
	const uniqueCategories = _.uniqBy(allCategories, 'slug');

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
			if (btnValue === 'all') {
				setFilteredProducts(products);
			} else {
				setFilteredProducts(newFilterProducts);
			}
		}
	};

	return (
		<div className='flex flex-col items-center'>
			{/* BUTTONS */}
			<div className='flex gap-5 my-10'>
				<button
					onClick={handleClick}
					value={'all'}
					className={`${
						active === 'all' ? 'bg-red-200 text-red-50' : ''
					} py-2 px-5 rounded-3xl border-[1px] transition-all duration-300 hover:bg-red-500 hover:text-red-50 border-solid border-red-500 text-red-500 `}
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
								active === value ? 'bg-red-200 text-red-50' : ''
							} py-2 px-5 rounded-3xl border-[1px] transition-all duration-300 hover:bg-red-500 hover:text-red-50 border-solid border-red-500 text-red-500 `}
						>
							{category.name}
						</button>
					);
				})}
			</div>
			{/* IMAGES */}
			<div className='grid grid-cols-3 gap-5 w-8/12'>
				{filteredProducts &&
					filteredProducts.map((product, index) => (
						<Link key={index} to={`/illustrations/${product.slug}`}>
							<img src={product.images[0]} />
						</Link>
					))}
			</div>
		</div>
	);
};

export default Filter;
