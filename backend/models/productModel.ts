import mongoose from 'mongoose';
import { ProductUser } from '../types/Product';

const productSchema = new mongoose.Schema<ProductUser>(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			require: true,
			ref: 'User',
		},
		name: { type: String },
		slug: { type: String },
		rating: {
			rating: Number,
			numReviews: Number,
		},
		categories: [
			{
				name: { type: String },
				slug: { type: String },
			},
		],
		tags: [
			{
				name: { type: String },
				slug: { type: String },
			},
		],
		images: {
			type: [String],
			required: true,
		},
		statistics: [String],
		options: {
			material: {
				optionName: String,
				// Define material sub-options
				'art-print': {
					title: String,
					images: [String],
				},
				'painting-on-canvas': {
					title: String,
					images: [String],
				},
				poster: {
					title: String,
					images: [String],
				},
				'premium-print': {
					title: String,
					images: [String],
				},
			},
			size: {
				optionName: String,
				// Define size sub-options
				s20x30: {
					title: String,
					images: [String],
				},
				s20x40: {
					title: String,
					images: [String],
				},
				s30x40: {
					title: String,
					images: [String],
				},
				s40x60: {
					title: String,
					images: [String],
				},
				s50x70: {
					title: String,
					images: [String],
				},
				s60x90: {
					title: String,
					images: [String],
				},
				s70x100: {
					title: String,
					images: [String],
				},
			},
		},
		variations: [
			{
				options: {
					material: String,
					size: String,
				},
				SKU: String,
				price: Number,
				countInStock: Number,
				tags: [
					{
						name: String,
						slug: String,
					},
				],
			},
		],
	},
	{
		timestamps: true,
	}
);

const ProductModel = mongoose.model<ProductUser>('Product', productSchema);

export default ProductModel;
