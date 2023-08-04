import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { findSubstring } from '../../utils/utils';
import VariationDescription from './VariationDescription';
import { ProductVariation, Project } from '../../types';

import projectService from '../../services/projectService';
import productService from '../../services/productService';

const ProductPage = () => {
	const [price, setPrice] = useState(0);
	const [projects, setProjects] = useState<Project[]>([]);
	const [productVariations, setProductVariations] = useState<
		ProductVariation[]
	>([]);



	useEffect(() => {
		const fetchProjects = async () => {
			const projects = await projectService.getAll();
			setProjects(projects);
		};
		fetchProjects();
	}, []);

		useEffect(() => {
		const fetchProductsVariations = async () => {
			const productVariations = await productService.getAll();
			setProductVariations(productVariations);
		};
		fetchProductsVariations();
	}, []);

	const { project, creature: creatureShortName, product } = useParams();
	// console.log(`${project} ${creatureShortName} ${product}`);

	let variationShortName: string | null;
	let variationData: ProductVariation | undefined;
	if (product !== undefined) {
		variationShortName = findSubstring(product);
		// console.log('Matched substring:', variationShortName);
		if (variationShortName) {
			variationData = productVariations.find(
				(varia) => varia.shortName === variationShortName
			);
			// console.log(variationData);
		} else {
			console.log('variation undefined');
		}
	} else {
		console.log('Product is undefined.');
	}

	const projectData = projects.find((proj) => proj.shortName === project);
	// console.log(projectData);
	let creatureData;
	if (projectData) {
		creatureData = projectData.creatures.find(
			(creature) => creature.shortName === creatureShortName
		);
		// console.log(creatureData);
	}

	const handleChangeSize = (e: React.MouseEvent<HTMLButtonElement>) => {
		const buttonText = e.currentTarget.textContent;
		// console.log(buttonText);
		if (variationData) {
			const selectedVariation = variationData.variations.find(
				(variation) => variation.size === buttonText
			);
			if (selectedVariation) {
				const selectedPrice = selectedVariation.price;
				setPrice(selectedPrice);
			}
		}
	};

	return (
		<>
			{product && variationData && creatureData && projectData ? (
				<div className='flex gap-20 my-5 justify-center '>
					<div className='w-4/12'>
						<img
							src={`/images/${projectData.shortName}/${creatureData.shortName}/${variationData.shortName}/${product}-1.jpg`}
							alt='bazylica'
						/>
					</div>
					<div className='w-4/12'>
						<p className=' text-zinc-300'>
							<Link to={`/shop`} className=' hover:text-red-400 text-xs'>
								shop
							</Link>{' '}
							/{' '}
							<Link
								to={`/shop/${projectData.shortName}`}
								className=' hover:text-red-400 text-xs'
							>
								{projectData.name}
							</Link>{' '}
							/{' '}
							<Link
								to={`/shop/${projectData.shortName}/${creatureData.shortName}`}
								className=' hover:text-red-400 text-xs'
							>
								{creatureData.name}
							</Link>{' '}
							/{' '}
							<Link
								to={`/shop/${projectData.shortName}/${creatureData.shortName}/${product}`}
								className=' hover:text-red-400 text-xs'
							>
								{creatureData.name} {variationData.name}
							</Link>
						</p>
						<h1 className=' text-3xl'>
							{creatureData.name} {variationData.name}
						</h1>
						<div className='text-sm text-zinc-500'>
							{variationData.name} Dimensions
						</div>
						<div className='flex gap-3'>
							{variationData.variations.map((variation) => (
								<button
									onClick={handleChangeSize}
									key={variation.size}
									className='font-light text-sm border border-black p-0.5 hover:border-red-400 hover:bg-red-200 hover:text-white focus:border-red-400 focus:bg-red-200 focus:text-white'
								>
									{variation.size}
								</button>
							))}
						</div>
						<div className='text-2xl my-3'>{price}zł</div>
						<button className=' bg-zinc-900 text-white px-32 py-1 hover:bg-red-200'>
							Add to Cart
						</button>
						<div className='text-xs font-semibold text-zinc-700 mt-3 mb-2'>
							Buying {creatureData.name} you are gaining:
						</div>
						<ul className='list-disc pl-8'>
							{creatureData.productStatistics.map((stat) => (
								<li className='text-xs text-zinc-500  ' key={stat}>
									{stat}
								</li>
							))}
						</ul>
						<hr className=' h-px mx-auto my-3'></hr>
						<p className='leading-tight font-light text-zinc-500 text-sm'>
							<VariationDescription shortName={variationData.shortName} />
							{/* {variationData.description} */}
						</p>
						<hr className=' h-px mx-auto my-3'></hr>
						<ul className='list-disc pl-8'>
							{variationData.characteristics.map((char) => (
								<li className='text-xs text-zinc-500  ' key={char}>
									{char}
								</li>
							))}
						</ul>
					</div>
				</div>
			) : (
				<p>Something went wrong</p>
			)}
		</>
	);
};

export default ProductPage;
