import * as Form from '@radix-ui/react-form';
import * as Select from '@radix-ui/react-select';
import { SyntheticEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { Product, Variation } from '../../types/Product';
import { FaChevronDown, FaEdit, FaTrash } from 'react-icons/fa';

type Props = {
  variations: Variation[];
  setVariations: React.Dispatch<React.SetStateAction<Variation[]>>;
  slug: string;
  product: Product;
}

const VariationForm = ({variations, setVariations, slug, product} : Props) => {

  	// variation
	const [optionsMaterial, setOptionsMaterial] = useState('');
	const [optionsSize, setOptionsSize] = useState('');

	const [countInStock, setCountInStock] = useState(1);
	const [price, setPrice] = useState(100);

  const handleSubmitVariation = (e: SyntheticEvent) => {
		e.preventDefault();
		if (optionsMaterial === '') {
			return toast.error('Select the material');
		} else if (optionsSize === '') {
			return toast.error('Select the size');
		} else {
			const currentSku = `${slug}-${optionsMaterial}-${optionsSize}`;
			// setSku(currentSku);
			const currentVariationOptions = {
				material: optionsMaterial,
				size: optionsSize,
			};
			// setVariationOptions(currentVariationOptions);

			setVariations([
				...variations,
				{
					SKU: currentSku,
					countInStock,
					options: currentVariationOptions,
					price,
					productSlug: slug,
					tags: [{ name: '', slug: '' }],
				},
			]);
		}
	};

	const handleDeleteVariation = (index: number) => {
		const updatedVariations = variations.filter((_variation, i) => i !== index);
		setVariations(updatedVariations);
	};
	const handleEditVariation = (index: number) => {
		console.log(index);
	};

  return (
    <Form.Root
    className='w-full'
    onSubmit={(e) => handleSubmitVariation(e)}
  >
    <div className='flex flex-col'>
      <h3>Create Variation</h3>
      {variations?.map((variation, index) => (
        <div key={index} className='flex items-center'>
          <FaTrash
            className='hover:cursor-pointer hover:text-red-300'
            onClick={() => handleDeleteVariation(index)}
          />{' '}
          <FaEdit
            className='hover:cursor-pointer hover:text-red-300'
            onClick={() => handleEditVariation(index)}
          />{' '}
          {variation.SKU} / ${variation.price} /{' '}
          {variation.countInStock}
        </div>
      ))}
    </div>

    <Form.Field className='flex flex-col' name='price'>
      <div className='flex items-baseline justify-between'>
        <Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
          Price
        </Form.Label>
        <Form.Message
          className='text-md text-red-400'
          match='valueMissing'
        >
          Please write price of variation
        </Form.Message>
        <Form.Message
          className='text-md text-red-400'
          match={(value) => Number(value) <= 0}
        >
          Please provide a valid price
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
          type='number'
          required
          placeholder='Enter Variation Price'
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </Form.Control>
    </Form.Field>
    {/* count in stock */}
    <Form.Field className='flex flex-col' name='countInStock'>
      <div className='flex items-baseline justify-between'>
        <Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
          Count In Stock
        </Form.Label>
        <Form.Message
          className='text-md text-red-400'
          match='valueMissing'
        >
          Please provide Count in Stock
        </Form.Message>
        <Form.Message
          className='text-md text-red-400'
          match={(value) => Number(value) <= 0}
        >
          Please provide a Count in Stock
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
          type='number'
          required
          placeholder='Enter Count In Stock'
          value={countInStock}
          onChange={(e) => setCountInStock(Number(e.target.value))}
        />
      </Form.Control>
    </Form.Field>

    {/* options */}
    <div className='flex justify-between'>
      {/* variation material */}
      <Select.Root
        onValueChange={(value) => setOptionsMaterial(value)}
      >
        <Select.Trigger>
          <Select.Value placeholder='Select Material' />
          <Select.Icon>
            <FaChevronDown />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content>
            <Select.ScrollUpButton />
            <Select.Viewport className='bg-gray-800 p-2 rounded-lg shadow-lg text-white'>
              <Select.Group>
                {Object.keys(product.options.material)
                  .filter((key) => key !== 'optionName')
                  .map((material, i) => (
                    <Select.Item
                      // disabled={f === 'Grapes'}
                      key={`${material}-${i}`}
                      value={material.toLowerCase()}
                    >
                      <Select.ItemText>{material}</Select.ItemText>
                      <Select.ItemIndicator className='absolute left-2 inline-flex items-center'>
                        <FaChevronDown />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton />
            <Select.Arrow />
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      {/* variation size */}

      <Select.Root onValueChange={(value) => setOptionsSize(value)}>
        <Select.Trigger>
          <Select.Value placeholder='Select Size' />
          <Select.Icon>
            <FaChevronDown />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content>
            <Select.ScrollUpButton />
            <Select.Viewport className='bg-gray-800 p-2 rounded-lg shadow-lg text-white'>
              <Select.Group>
                {Object.keys(product.options.size)
                  .filter((key) => key !== 'optionName')
                  .map((size, i) => (
                    <Select.Item
                      // disabled={f === 'Grapes'}
                      key={`${size}-${i}`}
                      value={size.toLowerCase()}
                    >
                      <Select.ItemText>{size}</Select.ItemText>
                      <Select.ItemIndicator className='absolute left-2 inline-flex items-center'>
                        <FaChevronDown />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton />
            <Select.Arrow />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>

    <Form.Submit asChild>
      <button
        // add disabled styling
        className='bg-zinc-900 text-white hover:bg-red-200 hover:cursor-pointer w-full text-center py-2  mt-5'
        // disabled={isLoading}
      >
        Add Variation
      </button>
    </Form.Submit>
  </Form.Root>
  )
}
export default VariationForm