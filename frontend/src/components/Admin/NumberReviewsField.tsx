import * as Form from '@radix-ui/react-form';
import { Rating } from '../../types/Product';

type Props = {
	rating: Rating;
	setRating: React.Dispatch<React.SetStateAction<Rating>>;
};

const NumberReviewsField = ({ rating, setRating }: Props) => {
	return (
		<>
			{' '}
			{/* Number of Reviews */}
			<Form.Field className='flex flex-col' name='RatingNumReviews'>
				<div className='flex items-baseline justify-between'>
					<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
						Number of Reviews
					</Form.Label>
					<Form.Message className='text-md text-red-400' match='valueMissing'>
						Please enter Number of Reviews
					</Form.Message>
					<Form.Message
						className='text-md text-red-400'
						match={(value) => Number(value) < 0}
					>
						Please provide a Number of Reviews
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input
						className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
						type='number'
						required
						placeholder='Enter Number of Reviews'
						value={rating.numReviews}
						onChange={(e) =>
							setRating({
								...rating,
								rating: rating.rating || 0,
								numReviews: Number(e.target.value),
							})
						}
					/>
				</Form.Control>
			</Form.Field>
		</>
	);
};
export default NumberReviewsField;
