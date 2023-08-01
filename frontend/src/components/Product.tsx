import { Link } from 'react-router-dom';
import Rating from './Rating';

interface RatingTs {
  rating: number;
  numReviews: number;
}

interface Ratings {
  [key: string]: RatingTs;
}

interface Props {
	name: string;
	variationName: string;
	projShortName: string;
	creatureShortName: string;
	lowestPrice: number;
	ratings: Ratings;
}

const Product = ({
	name,
	variationName,
	projShortName,
	creatureShortName,
	lowestPrice,

	ratings,
}: Props) => {
	// const toCamelCase = (str: string): string => {
	// 	return str
	// 		.toLowerCase()
	// 		.replace(/[^a-zA-Z0-9]+(.)/g, (_, letter) => letter.toUpperCase());
	// };

	const toKebabCase = (str: string): string => {
		return str
			.replace(/([a-z])([A-Z])/g, '$1-$2')
			.replace(/\s+/g, '-') //
			.replace(/[^a-zA-Z0-9-]/g, '')
			.toLowerCase();
	};
	return (
		<div className='bg-red-200 m-2'>
			<h4 className='p-2 italic'>
				{name} {variationName}
			</h4>
			<Link
				to={`shop/${projShortName}/${creatureShortName}/${creatureShortName}-${toKebabCase(
					variationName
				)}`}
			>
				<img
					className='hover:cursor-pointer hover:scale-110 transition duration-300'
					src={`/images/${projShortName}/${creatureShortName}/${toKebabCase(
						variationName
					)}/${creatureShortName}-${toKebabCase(variationName)}-1.jpg`}
					alt={`${creatureShortName}`}
				/>
			</Link>
			<div className='p-2'>
				just from <strong>{lowestPrice}zł</strong>
				<Rating rating={ratings[toKebabCase(
					variationName
				)].rating} numReviews={ratings[toKebabCase(
					variationName
				)].numReviews} />
			</div>
		</div>
	);
};
export default Product;
