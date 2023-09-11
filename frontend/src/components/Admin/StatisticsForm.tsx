import * as Form from '@radix-ui/react-form';
import { SyntheticEvent, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

type Props = {
	statistics: string[];
	setStatistics: React.Dispatch<React.SetStateAction<string[]>>;
};
const StatisticsForm = ({ statistics, setStatistics }: Props) => {
	const [newStatistic, setNewStatistic] = useState('');
	// Statistic
	const handleSubmitStatistic = (e: SyntheticEvent) => {
		e.preventDefault();
		if (newStatistic.trim() === '') {
			setNewStatistic('');
			return toast.error('Just empty spaces here...');
		}
		setStatistics([...statistics, newStatistic]);
	};

	const handleDeleteStatistic = (index: number) => {
		const updatedStatistics = statistics.filter((_statistic, i) => i !== index);
		setStatistics(updatedStatistics);
	};
	return (
		<Form.Root className='w-full' onSubmit={(e) => handleSubmitStatistic(e)}>
			<div className='flex flex-col'>
				<h3>Statistics list</h3>
				{statistics?.map((statistic, index) => (
					<div key={index} className='flex items-center'>
						<FaTrash
							className='hover:cursor-pointer hover:text-red-300'
							onClick={() => handleDeleteStatistic(index)}
						/>{' '}
						{statistic}
					</div>
				))}
			</div>

			<Form.Field className='flex flex-col' name='statistic'>
				<div className='flex items-baseline justify-between'>
					<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
						New Statistic
					</Form.Label>
					<Form.Message className='text-md text-red-400' match='valueMissing'>
						Please enter New Statistic
					</Form.Message>
					<Form.Message className='text-md text-red-400' match='typeMismatch'>
						Please provide a valid New Statistic
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input
						className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
						type='text'
						required
						placeholder='Enter 	New Statistic'
						value={newStatistic}
						onChange={(e) => setNewStatistic(e.target.value)}
					/>
				</Form.Control>
			</Form.Field>

			<Form.Submit asChild>
				<button
					// add disabled styling
					className='bg-zinc-900 text-white hover:bg-red-200 hover:cursor-pointer w-full text-center py-2  mt-5'
					// disabled={isLoading}
				>
					Add Statistic
				</button>
			</Form.Submit>
		</Form.Root>
	);
};
export default StatisticsForm;
