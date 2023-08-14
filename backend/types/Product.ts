import mongoose from "mongoose";

interface Rating {
	rating: number;
	numReviews: number;
}

interface Category {
	name: string;
	slug: string;
}

interface Tag {
	name: string;
	slug: string;
}

interface TitleImages {
	title: string;
	images: string[];
}

interface Variation {
	options: {
		material: string;
		size: string;
	};
	SKU: string;
	price: number;
	countInStock: number;
	tags: Tag[];
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
	material: MaterialOption,
	size: SizeOption;
}

export interface ProductUser {
	user: mongoose.Schema.Types.ObjectId;
	name: string;
	slug: string;
	rating: Rating;
	categories: Category[];
	tags: Tag[];
	images: string[];
	options: ProductOptions;
	variations: Variation[];
	statistics?: string[]
}


export interface Product {
	_id: string;
	name: string;
	slug: string;
	rating: Rating;
	categories: Category[];
	tags: Tag[];
	images: string[];
	options: ProductOptions;
	variations: Variation[];
	statistics?: string[]
}

export type ProductNoId = Omit<Product, '_id'>;