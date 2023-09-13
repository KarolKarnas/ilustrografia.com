import _ from 'lodash';
import { Product } from '../types/Product';
import { Link } from 'react-router-dom';
import Rating from './Rating';

type Props = {
  product: Product
}

const ProductMain = ({product} : Props) => {

  const findLowestPrice = (product: Product) => {
		return _.minBy(product.variations, 'price')?.price;
	};
  return (
    <div>
    <div className='bg-red-200 m-2'>
      <h4 className='p-2 italic'>{product.name}</h4>
      <Link to={`/shop/${product.slug}`}>
        <img
          className='hover:cursor-pointer hover:scale-110 transition duration-500'
          src={product.images[0]}
          alt={`${product.slug}-${product.categories[0].slug}`}
        />
      </Link>
      <div className='flex justify-between p-2'>
        <div>
          <Rating
            rating={product.rating.rating}
            numReviews={product.rating.numReviews}
          />
        </div>

        {
          <div>
            Prices start from: <span className='font-semibold'>${findLowestPrice(product)}</span>
          </div>
        }
      </div>
    </div>
  </div>
  )
}
export default ProductMain