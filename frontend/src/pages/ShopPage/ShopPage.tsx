import Rating from '../../components/Rating';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';
import { useGetProductsQuery } from '../../slices/productsApiSlice';
import {
	MaterialOptionNoName,
	Product,
	SizeOptionNoName,
} from '../../types/Product';
import ShopProductComponent from './ShopProductComponent';
import ShopVariation from './ShopVariation';

const ShopPage = () => {
	const { data: products, isLoading, error } = useGetProductsQuery({});

	// 	if (isLoading) {
	// 		return <div>Loading...</div>;
	// 	}

	//   const variations = []

	// 	const getVariation = (product: Product, material: string, size: string) => {
	// 		return _.find(product.variations, { options: { material, size } });
	// 	};

	// 	const getSizesForMaterialFromProduct = (
	// 		product: Product,
	// 		material: string
	// 	) => {
	// 		const sizes = _.uniq(
	// 			product.variations
	// 				.filter((variation) => variation.options.material === material)
	// 				.map((variation) => variation.options.size)
	// 		);
	// 		return sizes;
	// 	};

	// 	products.forEach((product: Product) => {
	// 		const materialValues = _.uniq(
	// 			_.map(product.variations, 'options.material')
	// 		);

	// 		const sizeValues = _.uniq(_.map(product.variations, 'options.size'));

	//     const sizesByMaterial: { [key: string]: string[] } = {};

	//     materialValues.forEach((material: string) => {
	//       sizesByMaterial[`${material}`] = getSizesForMaterialFromProduct(
	//         product,
	//         material
	//       );
	//     });

	//     const sizesByMaterialTitle: { [key: string]: string[] } = {};

	//     for (const property in sizesByMaterial) {
	//       const names = sizesByMaterial[property];
	//       const titles = names.map(
	//         (name) => product.options.size[name as keyof SizeOptionNoName].title
	//       );
	//       sizesByMaterialTitle[property] = titles;
	//     }

	//     const materialTitle = materialValues.map(
	//       (name) => product.options.material[name as keyof MaterialOptionNoName].title
	//     );
	//     //TITLE_TO_NAME_MATERIAL
	//     const titleToNameMaterial: { [key: string]: string } = {};

	//     materialTitle.forEach(
	//       (title, index) => (titleToNameMaterial[title] = materialValues[index])
	//     );

	//     const sizeTitle = sizeValues.map(
	//       (name) => product.options.size[name as keyof SizeOptionNoName].title
	//     );

	//     //TITLE_TO_NAME_SIZE
	//     const titleToNameSize: { [key: string]: string } = {};

	//     sizeTitle.forEach(
	//       (title, index) => (titleToNameSize[title] = sizeValues[index])
	//     );

	// console.log(sizeTitle)

	// 		return (<div>hello</div>)
	// 	});

	// console.log(products)
	return isLoading ? (
		<div>Loading...</div>
	) : error ? (
		<div>{getError(error as ApiError)}</div>
	) : (
		<>
			<h1 className='text-3xl font-bold text-center mt-5'>SHOP</h1>
			<div className='flex'>
				{' '}
				{products &&
					products.map((product: Product) => (
						<div key={product._id}>
							{product.variations.map((variation, index) => (
								<div key={index}>
									<ShopVariation
										variation={variation}
										images={product.images}
										variationImage={
											product.options.material[
												variation.options.material as keyof MaterialOptionNoName
											]
										}
									/>
								</div>
							))}
						</div>
					))}
			</div>
			{/* <ProjectGroup /> */}
			{/* <div className='flex'>
				{products &&
					products.map((product: Product) => (
						<div key={product._id}>
							<ShopProductComponent slug={product.slug} />
						</div>
					))}
			</div> */}
		</>
	);
};
export default ShopPage;
