import mongoose from 'mongoose';

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

interface TitleImages {
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
}

export interface VariationCart extends Variation {
	_id: string;
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

export interface ProductOptions {
	material: MaterialOption;
	size: SizeOption;
}

export interface ReviewUser {
	user: mongoose.Types.ObjectId | string;
	name: string;
	rating: number;
	comment: string;
}

export interface Review {
	rating: number;
	comment: string;
}

export interface Details {
	latinName?: string,
	story: string,
	ytLink?: string,
	occurrence?: string,

}

export interface ProductUser {
	// user: mongoose.Schema.Types.ObjectId;
	user: mongoose.Types.ObjectId;
	details: Details,
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

export interface Product {
	_id: string;
	details: Details,
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

export type ProductNoId = Omit<Product, '_id'>;
