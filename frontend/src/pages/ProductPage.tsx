import { useParams } from 'react-router-dom';
import projects from '../products';
import { productVariations } from '../products';
import { Link } from 'react-router-dom';

const ProductPage = () => {
	function findSubstring(input: string): string | null {
		if (!input) {
			return null; // Return null for undefined input
		}
		const substringsToCheck = [
			'art-print',
			'painting-on-canvas',
			'poster',
			'premium-print',
		];
		const regex = new RegExp(substringsToCheck.join('|'), 'i'); // 'i' flag for case-insensitive matching
		const match = input.match(regex);
		return match ? match[0] : null;
	}

	const { project, creature: creatureShortName, product } = useParams();
	console.log(`${project} ${creatureShortName} ${product}`);

	let variationShortName: string | null;
	let variationData;
	if (product !== undefined) {
		variationShortName = findSubstring(product);
		console.log('Matched substring:', variationShortName);
		if (variationShortName) {
			variationData = productVariations.find(
				(varia) => varia.shortName === variationShortName
			);
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
		console.log(creatureData);
	}
	return (
		<>
			{product && variationData && creatureData && projectData ? (
				<div className='flex gap-5'>
					<div className='w-6/12'>
						<img
							src={`/images/${projectData.shortName}/${creatureData.shortName}/${variationData.shortName}/${product}-1.jpg`}
							alt='bazylica'
						/>
					</div>
					<div className='w-6/12'>
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
									key={variation.size}
									className='font-light text-sm border border-black p-0.5 hover:border-red-400 hover:bg-red-200 hover:text-white focus:border-red-400 focus:bg-red-200 focus:text-white'
								>
									{variation.size}
								</button>
							))}
						</div>
					</div>
				</div>
			) : (
				<p>Something went wrong</p>
			)}
		</>
	);
};

export default ProductPage;
