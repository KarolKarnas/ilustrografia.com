import Product from './Product'

interface RatingTs {
	rating: number
	numReviews: number
}

interface Ratings {
	[key: string]: RatingTs
}

interface Variations {
	size: string
	price: number
}

interface ProductVariation {
	name: string
	characteristics: string[]
	shortName: string
	variations: Variations[]
}

interface Props {
	name: string
	productVariations: ProductVariation[]
	projShortName: string
	creatureShortName: string
	ratings: Ratings
}

const ProductGroup = ({
	name,
	productVariations,
	projShortName,
	creatureShortName,
	ratings,
}: Props) => {
	return (
		<div className='flex flex-col items-center'>
			<h2 className='text-xl'>{name}</h2>
			<div className='flex'>
				{productVariations.map((variation) => (
					<div key={`${name} ${variation.name}`}>
						<Product
							name={name}
							variationName={variation.name}
							projShortName={projShortName}
							creatureShortName={creatureShortName}
							lowestPrice={variation.variations[0].price}
							ratings={ratings}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
export default ProductGroup
