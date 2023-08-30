import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { toCheckProduct, toCheckProducts } from "../../utils/typeCheck";


const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>();

   const {data, isLoading, isError} = useGetProductsQuery({})

   useEffect(() => {
		if (!isLoading) {
			const typedProducts = toCheckProducts(data);
			// console.log(typedProducts);
			setProducts(typedProducts);
		}
	}, [isLoading]);

  console.log(products)
  


  return (
    <div className='w-3/4'>
    <h2 className='text-2xl text-zinc-400'>Products</h2>
    <div className='flex flex-col mt-4 w-full'>
      {!products ? (
        <div>No orders</div>
      ) : (
        <div className='flex gap-1'>
          {' '}
          <div className='basis-3/12 font-bold'>ID</div>
          <div className='basis-1/12 font-bold'>NAME</div>
          <div className='basis-3/12 font-bold'>CATEGORY</div>
          <div className='basis-1/12 font-bold'>TOTAL</div>
          <div className='basis-1/12 font-bold text-center'>PAID</div>
          <div className='basis-1/12 font-bold text-center'>
            DELIVERED
          </div>
          <div className='basis-2/12 font-bold'>DETAILS</div>
        </div>
      )}
      {products &&
        products.map((product: Product, index) => (
          <div
            className={`${
              index % 2 === 0 ? 'bg-red-100' : ''
            } flex gap-1 `}
            key={index}
          >
            {' '}
            <div className='basis-3/12'>{product._id}</div>
            <div className='basis-1/12'>
              {product.name}
            </div>
            <div className='basis-3/12'>
              {product.categories[0].name}
            </div>
            <div className='basis-1/12'>
              {product.options.material.optionName}
            </div>
            <div className='basis-1/12 flex items-center justify-center'>
              {}
            </div>
            <div className='basis-1/12 flex items-center justify-center'>
              {}
            </div>
            <Link
              to={`/order/`}
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
export default ProductListPage