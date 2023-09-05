import { ProductOptions, Rating } from '../types/Product';

export const ratingInitial: Rating = {
	rating: 0,
	numReviews: 0,
};

export const productOptionsInitial: ProductOptions = {
	material: {
		optionName: '', // You can provide a default option name here
		'art-print': {
			title: '',
			images: [],
		},
		'painting-on-canvas': {
			title: '',
			images: [],
		},
		poster: {
			title: '',
			images: [],
		},
		'premium-print': {
			title: '',
			images: [],
		},
	},
	size: {
		optionName: '', // You can provide a default option name here
		s20x30: {
			title: '',
			images: [],
		},
		s20x40: {
			title: '',
			images: [],
		},
		s30x40: {
			title: '',
			images: [],
		},
		s40x60: {
			title: '',
			images: [],
		},
		s50x70: {
			title: '',
			images: [],
		},
		s60x90: {
			title: '',
			images: [],
		},
		s70x100: {
			title: '',
			images: [],
		},
	},
};
