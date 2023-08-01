interface Props {
	name: string;
	variationName: string;
	projShortName: string;
	creatureShortName: string;
	lowestPrice: number;
}

const Product = ({
	name,
	variationName,
	projShortName,
	creatureShortName,
	lowestPrice,
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
			{name} {variationName}
			<img className="hover:cursor-pointer hover:scale-110 transition duration-300"
				src={`/images/${projShortName}/${creatureShortName}/${toKebabCase(
					variationName
				)}/${creatureShortName}-${toKebabCase(variationName)}-1.jpg`}
				alt={`${creatureShortName}`}
			/>
			<p>
				just from <strong>{lowestPrice}zł</strong>
			</p>
		</div>
	);
};
export default Product;
