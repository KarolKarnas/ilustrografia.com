import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import {
	useGetProductsQuery,
	useCreateProductMutation,
} from '../../slices/productsApiSlice';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { toCheckProducts } from '../../utils/typeCheck';
import { toast } from 'react-toastify';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';

const ProductListPage = () => {
	const [products, setProducts] = useState<Product[]>();

	const { data, isLoading, error, refetch } = useGetProductsQuery({});

	const [createProduct, { isLoading: loadingCreate }] =
		useCreateProductMutation();

	useEffect(() => {
		if (!isLoading) {
			const typedProducts = toCheckProducts(data);
			// console.log(typedProducts);
			setProducts(typedProducts);
		}
	}, [isLoading, loadingCreate]);

	console.log(products);

	const createProductHandler = async () => {
		if (window.confirm('Are you sure you want to create a new product?')) {
			try {
				await createProduct({});
				const newProducts = await refetch()
				setProducts(toCheckProducts(newProducts.data));
			} catch (error) {
				toast.error(getError(error as ApiError));
			}
		}
	};

	const createVariationHandler = async (slug: string) => {
		await console.log(slug);
	};

	const handleDeleteProduct = () => {
		console.log('delete')
	}

	return (
		<div className='w-3/4'>
			<div className='flex justify-between'>
				<h1 className='text-2xl text-zinc-400'>Products</h1>
				<button
					onClick={createProductHandler}
					className={`
								
								 bg-zinc-900 text-white hover:bg-red-200
							 px-32 py-1  my-2`}
				>
					Add Product
				</button>
			</div>

			<div className='flex flex-col mt-4 w-full'>
      {loadingCreate && (<div>Loading...</div>)}

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
										<div className='basis-2/12 font-bold'>EDIT/DELETE</div>
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
										<div className='basis-2/12 flex gap-2'>
											<Link
												to={`/admin/product-list/${product.slug}/edit`}
												className='hover:text-red-300 hover:cursor-pointer'
											>
												<FaEdit />
											</Link>{' '}
											<FaTrash onClick={handleDeleteProduct} className='hover:text-red-300 hover:cursor-pointer text-red-500' />
										</div>
									</div>
									<div className='flex justify-between'>
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
									<div className='flex gap-1'>
										{' '}
										<div className='basis-2/12 font-semibold text-sm'>ID</div>
										<div className='basis-2/12 font-semibold text-sm'>SKU</div>
										<div className='basis-2/12 font-semibold text-sm'>
											MATERIAL
										</div>
										<div className='basis-1/12 font-semibold text-sm'>SIZE</div>
										<div className='basis-1/12 font-semibold text-sm'>
											COUNT IN STOCK
										</div>
										<div className='basis-1/12 font-semibold text-sm'>
											PRICE
										</div>
										<div className='basis-2/12 font-semibold text-sm'>
											DETAILS
										</div>
										{/* <div className='basis-1/12 font-semibold text-sm'>
											DELETE
										</div> */}
									</div>
									<div>
										{product.variations.map((variation, index) => (
											<div key={index} className='flex flex-col'>
												<div className='flex gap-1'>
													{' '}
													<div className='basis-2/12 text-sm'>
														{variation._id}
													</div>
													<div className='basis-2/12 text-sm'>
														{variation.SKU}
													</div>
													<div className='basis-2/12 text-sm'>
														{variation.options.material}
													</div>
													<div className='basis-1/12 text-sm'>
														{variation.options.size}
													</div>
													<div className='basis-1/12 text-sm'>
														{variation.countInStock}
													</div>
													<div className='basis-1/12 text-sm'>
														${variation.price}
													</div>
													<div className='basis-2/12'>
														<Link
															to={`/shop/${product.slug}?material=${variation.options.material}&size=${variation.options.size}`}
															className='basis-2/12 underline hover:text-red-300'
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
					</>
				)}
			</div>
		</div>
	);
};
export default ProductListPage;
