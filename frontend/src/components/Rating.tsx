import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface Props {
  rating: number,
  numReviews?: number
}

const Rating = ({ rating, numReviews } : Props) => {
  return (
    <div className='flex items-end'>
      <span className='text-yellow-300'>
        {rating >= 1 ? (
          <FaStar />
        ) : rating >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className='text-yellow-300'>
        {rating >= 2 ? (
          <FaStar />
        ) : rating >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className='text-yellow-300'>
        {rating >= 3 ? (
          <FaStar />
        ) : rating >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className='text-yellow-300'>
        {rating >= 4 ? (
          <FaStar />
        ) : rating >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className='text-yellow-300'>
        {rating >= 5 ? (
          <FaStar />
        ) : rating >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className=' font-bold text-2xs ml-2 dark:text-ivory '>{numReviews && `${numReviews} Reviews`}</span>
    </div>
  );
};

export default Rating;