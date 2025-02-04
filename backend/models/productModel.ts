import mongoose from 'mongoose';
import { ProductUser, ReviewUser } from '../types/Product';

const reviewSchema = new mongoose.Schema<ReviewUser>(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const productSchema = new mongoose.Schema<ProductUser>(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			require: true,
			ref: 'User',
		},
		details: {
			latinName: {type: String},
			story: {type: String},
			ytLink: {type: String},
			occurrence: {type: String}

		},
		name: { type: String },
		slug: { type: String },
		reviews: [reviewSchema],
		rating: {
			rating: { type: Number, default: 0 },
			numReviews: { type: Number, default: 0 },
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
				productSlug: String,
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
