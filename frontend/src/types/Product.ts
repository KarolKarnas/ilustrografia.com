export interface Rating {
	rating: number;
	numReviews: number;
}

export interface Category {
	name: string;
	slug: string;
}

export interface Tag {
	name: string;
	slug: string;
}

export interface TitleImages {
	title: string;
	images: string[];
}
export interface Options {
	material: string;
	size: string;
}

export interface Variation {
	productSlug: string;
	options: Options;
	SKU: string;
	price: number;
	countInStock: number;
	tags: Tag[];
	// images: string[]
	_id: string;
}
export interface VariationOptionalId {
	productSlug: string;
	options: Options;
	SKU: string;
	price: number;
	countInStock: number;
	tags: Tag[];
	// images: string[]
	_id?: string;
}

export interface VariationCart extends Variation {
	// _id: string;
	qty: number;
	image: string;
	variationName: string;
	pathnameWithQuery: string;
}

export interface MaterialOption {
	optionName: string;
	'art-print': TitleImages;
	'painting-on-canvas': TitleImages;
	poster: TitleImages;
	'premium-print': TitleImages;
}

export type MaterialOptionNoName = Omit<MaterialOption, 'optionName'>;

export type MaterialOptionNoNameKeys = keyof MaterialOptionNoName;

export interface SizeOption {
	optionName: string;
	s20x30: TitleImages;
	s20x40: TitleImages;
	s30x40: TitleImages;
	s40x60: TitleImages;
	s50x70: TitleImages;
	s60x90: TitleImages;
	s70x100: TitleImages;
}

export type SizeOptionNoName = Omit<SizeOption, 'optionName'>;

export type SizeOptionNoNameKeys = keyof SizeOptionNoName;

export interface ProductOptions {
	material: MaterialOption;
	size: SizeOption;
}

export interface ReviewUser {
	createdAt: string;
	user: string;
	name: string;
	rating: number;
	comment: string;
}

export interface Review {
	rating: number;
	comment: string;
}

export interface Product {
	_id: string;
	name: string;
	slug: string;
	reviews?: ReviewUser[];
	rating: Rating;
	categories: Category[];
	tags: Tag[];
	images: string[];
	options: ProductOptions;
	variations: Variation[];
	statistics: string[];
}

export interface ShippingAddress {
	address: string;
	city: string;
	postalCode: string;
	country: string;
}

export interface CartState {
	itemsPrice: number;
	cartItems: VariationCart[];
	shippingPrice: number;
	taxPrice: number;
	totalPrice: number;
	shippingAddress: ShippingAddress;
	paymentMethod: string;
}
