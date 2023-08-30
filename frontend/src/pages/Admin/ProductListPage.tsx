import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { useGetProductsQuery } from '../../slices/productsApiSlice';
import { Link } from 'react-router-dom';

import { toCheckProducts } from '../../utils/typeCheck';

const ProductListPage = () => {
	const [products, setProducts] = useState<Product[]>();

	const { data, isLoading } = useGetProductsQuery({});

	useEffect(() => {
		if (!isLoading) {
			const typedProducts = toCheckProducts(data);
			// console.log(typedProducts);
			setProducts(typedProducts);
		}
	}, [isLoading]);

	console.log(products);

	return (
		<div className='w-3/4'>
			<h2 className='text-2xl text-zinc-400'>Products</h2>
			<div className='flex flex-col mt-4 w-full'>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<>
						{' '}
						{products &&
							products.map((product: Product, index) => (
								<div
									key={index}
									className={`${
										index % 2 === 0 ? 'bg-red-100' : ''
									} flex flex-col mb-10 border`}
								>
									<div className='flex gap-1'>
										{' '}
										<div className='basis-3/12 font-bold'>ID</div>
										<div className='basis-1/12 font-bold'>NAME</div>
										<div className='basis-3/12 font-bold'>CATEGORY</div>
										<div className='basis-1/12 font-bold'>TOTAL</div>
										<div className='basis-2/12 font-bold'>DETAILS</div>
									</div>
									<div className='flex gap-1'>
										{' '}
										<div className='basis-3/12'>{product._id}</div>
										<div className='basis-1/12'>{product.name}</div>
										<div className='basis-3/12'>
											{product.categories[0].name}
										</div>
										<div className='basis-1/12'>
											{product.options.material.optionName}
										</div>
										<Link
											to={`/shop/${product.slug}`}
											className='basis-2/12 underline hover:text-red-300'
										>
											Details
										</Link>
									</div>
									<h3 className='text-center'>Variations of {product.name}</h3>
									<div className='flex gap-1'>
										{' '}
										<div className='basis-2/12 font-semibold text-sm'>SKU</div>
										<div className='basis-2/12 font-semibold text-sm'>
											MATERIAL
										</div>
										<div className='basis-2/12 font-semibold text-sm'>SIZE</div>
										<div className='basis-2/12 font-semibold text-sm'>
											COUNT IN STOCK
										</div>
										<div className='basis-2/12 font-semibold text-sm'>
											PRICE
										</div>
										<div className='basis-2/12 font-semibold text-sm'>
											DETAILS
										</div>
									</div>
									<div>
										{product.variations.map((variation, index) => (
											<div key={index} className='flex flex-col'>
												<div className='flex gap-1'>
													{' '}
													<div className='basis-2/12 text-sm'>
														{variation.SKU}
													</div>
													<div className='basis-2/12 text-sm'>
														{variation.options.material}
													</div>
													<div className='basis-2/12 text-sm'>
														{variation.options.size}
													</div>
													<div className='basis-2/12 text-sm'>
														{variation.countInStock}
													</div>
													<div className='basis-2/12 text-sm'>
														${variation.price}
													</div>
													<div className='basis-2/12'>
														<Link
															to={`/shop/${product.slug}?material=${variation.options.material}&size=${variation.options.size}`}
														>
															details
														</Link>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							))}
					</>
				)}
			</div>
		</div>
	);
};
export default ProductListPage;
