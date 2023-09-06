import * as Form from '@radix-ui/react-form';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { getError } from '../../utils/utils';
import _ from 'lodash';
import { ApiError } from '../../types/ApiError';

type Props = {
	updateError: FetchBaseQueryError | SerializedError | undefined;
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
	setSlug: React.Dispatch<React.SetStateAction<string>>;
};

// toast.error(getError(error as ApiError));

const NameField = ({ updateError, name, setName, setSlug }: Props) => {
	return (
		<>
			{' '}
			<Form.Field className='flex flex-col' name='name'>
				<div className='flex items-baseline justify-between'>
					<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
						Name
					</Form.Label>
					<Form.Message className='text-md text-red-400' match='valueMissing'>
						Please enter your name
					</Form.Message>
					{updateError && (
						<Form.Message
							className='text-md text-red-400'
							match='typeMismatch'
							forceMatch={Boolean(updateError)}
						>
							{getError(updateError as ApiError)}
						</Form.Message>
					)}
				</div>
				<Form.Control asChild>
					<input
						className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
						type='text'
						required
						placeholder='Enter name'
						value={name}
						onChange={(e) => {
							const newName = e.target.value;
							const newSlug = _.kebabCase(newName);

							setName(newName);
							setSlug(newSlug);
						}}
					/>
				</Form.Control>
			</Form.Field>
		</>
	);
};
export default NameField;
