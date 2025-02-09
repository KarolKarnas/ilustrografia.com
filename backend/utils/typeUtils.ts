import mongoose from 'mongoose';
import {
	Order,
	OrderData,
	ShippingAddress,
	OrderUpdateReq,
} from '../types/Order';
import {
	Category,
	Options,
	Product,
	ProductOptions,
	Rating,
	Review,
	ReviewUser,
	Tag,
	Variation,
	VariationCart,
	Details,
} from '../types/Product';
import {
	CheckUser,
	CheckUserWithName,
	RequestUser,
	RequestUserReview,
	UserInfoOptions,
	UserUpdate,
} from '../types/User';

const isString = (text: unknown): text is string => {
	return typeof text === 'string' || text instanceof String;
};
const isNumber = (number: unknown): number is number => {
	return typeof number === 'number' || number instanceof Number;
};

const isBoolean = (boolean: unknown): boolean is boolean => {
	return typeof boolean === 'boolean' || boolean instanceof Boolean;
};

const isArray = (arr: unknown): arr is Array<unknown> => {
	return typeof arr === 'object' && arr instanceof Array && Array.isArray(arr);
};

export const parseStringKey = (name: string, stringKey: unknown): string => {
	if (stringKey === '') {
		return stringKey;
	}

	if (!stringKey || !isString(stringKey)) {
		throw new Error(`Incorrect or missing ${name}`);
	}
	return stringKey;
};

export const parseNumberKey = (name: string, numberKey: unknown): number => {
	if (numberKey === 0) {
		return numberKey;
	}
	if (!numberKey || !isNumber(numberKey)) {
		throw new Error(`Incorrect or missing ${name}`);
	}
	return numberKey;
};

export const parseBooleanKey = (name: string, booleanKey: unknown): boolean => {
	if (booleanKey === false) {
		return booleanKey;
	}

	if (!booleanKey || !isBoolean(booleanKey)) {
		throw new Error(`Incorrect or missing ${name}`);
	}
	return booleanKey;
};

export const parseArrayStrings = (
	name: string,
	arrString: unknown
): string[] => {
	if (!arrString || !isArray(arrString)) {
		throw new Error(`Incorrect or missing ${name}`);
	}

	if (arrString.length === 0) {
		throw new Error(`Missing string in ${name}`);
	}

	const typedArray = arrString as string[];
	typedArray.forEach((element: string) => {
		if (!isString(element)) {
			throw new Error(`Incorrect or missing ${name}`);
		}
	});
	return typedArray;
};

// Mongoose ID
const isMongooseId = (value: unknown): value is mongoose.Types.ObjectId => {
	return value instanceof mongoose.Types.ObjectId;
};

const parseMongooseObject = (objectId: unknown): mongoose.Types.ObjectId => {
	console.log(objectId);
	if (!objectId) {
		throw new Error('Missing MongooseObject');
	}

	if (!isMongooseId(objectId)) {
		console.log('Not a Mongoose ObjectId:', objectId);
		throw new Error('Incorrect MongooseObject');
	}

	return objectId;
};

export const isValidTag = (object: unknown): boolean => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	if ('name' in object && 'slug' in object) {
		if (isString(object.name) && isString(object.slug)) {
			return true;
		}
	}
	throw new Error('Incorrect data: some fields are missing in Tag ');
};

export const parseTags = (object: unknown): Tag[] => {
	if (!object || !isArray(object)) {
		throw new Error('Incorrect or missing data');
	}

	const typedObject = object as Tag[];
	typedObject.forEach((tag: Tag) => {
		if (!isValidTag(tag)) {
			throw new Error('Incorrect or missing tag');
		}
	});

	return typedObject;
};

export const parseOptions = (object: unknown): Options => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}
	if ('material' in object && 'size' in object) {
		const options: Options = {
			material: parseStringKey('material', object.material),
			size: parseStringKey('size', object.size),
		};
		return options;
	}
	throw new Error('Incorrect data: some fields are missing in Options ');
};

export const toVariationCart = (object: unknown): VariationCart => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	if (
		'productSlug' in object &&
		'options' in object &&
		'SKU' in object &&
		'price' in object &&
		'countInStock' in object &&
		'tags' in object &&
		'_id' in object &&
		'qty' in object &&
		'image' in object &&
		'variationName' in object &&
		'pathnameWithQuery' in object
	) {
		const variationCart: VariationCart = {
			productSlug: parseStringKey('productSlug', object.productSlug),
			options: parseOptions(object.options),
			SKU: parseStringKey('SKU', object.SKU),
			price: parseNumberKey('price', object.price),
			countInStock: parseNumberKey('countInStock', object.countInStock),
			tags: parseTags(object.tags),
			_id: parseStringKey('_id', object._id),
			qty: parseNumberKey('qty', object.qty),
			image: parseStringKey('image', object.image),
			variationName: parseStringKey('variationName', object.variationName),
			pathnameWithQuery: parseStringKey(
				'pathnameWithQuery',
				object.pathnameWithQuery
			),
		};

		return variationCart;
	}

	throw new Error('Incorrect data: some fields are missing');
};
export const isValidVariationCart = (object: unknown): boolean => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	if (
		'productSlug' in object &&
		'options' in object &&
		'SKU' in object &&
		'price' in object &&
		'countInStock' in object &&
		'tags' in object &&
		'_id' in object &&
		'qty' in object &&
		'image' in object &&
		'variationName' in object &&
		'pathnameWithQuery' in object
	) {
		if (
			parseStringKey('productSlug', object.productSlug) &&
			parseOptions(object.options) &&
			parseStringKey('SKU', object.SKU) &&
			parseNumberKey('price', object.price) &&
			parseNumberKey('countInStock', object.countInStock) &&
			parseTags(object.tags) &&
			parseStringKey('_id', object._id) &&
			parseNumberKey('qty', object.qty) &&
			parseStringKey('image', object.image) &&
			parseStringKey('variationName', object.variationName) &&
			parseStringKey('pathnameWithQuery', object.pathnameWithQuery)
		) {
			return true;
		}
	}

	throw new Error('Incorrect data: some fields are missing in VariationCart');
};

const parseOrderItems = (orderItems: unknown): VariationCart[] => {
	if (!orderItems || !isArray(orderItems)) {
		throw new Error('Incorrect or missing orderItems');
	}
	const typedVariations = orderItems as VariationCart[];
	typedVariations.forEach((variation: VariationCart) => {
		if (!isValidVariationCart(variation)) {
			throw new Error('Incorrect or missing VariationCart');
		}
	});
	return typedVariations;
};

const parseShippingAddress = (object: unknown): ShippingAddress => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data in Shipping Address');
	}

	if (
		'address' in object &&
		'city' in object &&
		'postalCode' in object &&
		'country' in object
	) {
		const newShippingAddress: ShippingAddress = {
			address: parseStringKey('address', object.address),
			city: parseStringKey('city', object.city),
			postalCode: parseStringKey('postalCode', object.postalCode),
			country: parseStringKey('country', object.country),
		};
		return newShippingAddress;
	}
	throw new Error(
		'Incorrect data: some fields are missing in Shipping Address'
	);
};

// CHECKERS
export const toCheckUser = (object: unknown): CheckUser => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	if ('email' in object && 'password' in object) {
		const checkedUser: CheckUser = {
			email: parseStringKey('email', object.email),
			password: parseStringKey('password', object.password),
		};

		return checkedUser;
	}

	throw new Error('Incorrect data: some fields are missing');
};

export const toCheckUserWithName = (object: unknown): CheckUserWithName => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	if ('name' in object && 'email' in object && 'password' in object) {
		const checkedUserName: CheckUserWithName = {
			name: parseStringKey('name', object.name),
			email: parseStringKey('email', object.email),
			password: parseStringKey('password', object.password),
		};

		return checkedUserName;
	}

	throw new Error('Incorrect data: some fields are missing');
};

export const toCheckUserUpdate = (object: unknown): UserUpdate => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	const checkedUser: UserUpdate = {};

	if ('name' in object) {
		checkedUser.name = parseStringKey('name', object.name);
	}
	if ('email' in object) {
		checkedUser.email = parseStringKey('email', object.email);
	}
	if ('password' in object) {
		checkedUser.password = parseStringKey('password', object.password);
	}

	if (Object.keys(checkedUser).length === 0) {
		throw new Error('Incorrect data: no valid fields found');
	}

	return checkedUser;
};

export const checkHaveUser = (object: unknown): RequestUser => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}
	const userObject = object as RequestUser;
	if ('user' in userObject) {
		return userObject;
	}

	throw new Error('Incorrect data: some fields are missing in Request User');
};

export const checkHaveUserReview = (object: unknown): RequestUserReview => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data user review');
	}
	const userObject = object as RequestUserReview;
	if (
		'user' in userObject &&
		'rating' in userObject &&
		'comment' in userObject
	) {
		return userObject;
	}

	throw new Error(
		'Incorrect data: some fields are missing in Request User Review'
	);
};

// ORDER
export const toCheckOrder = (object: unknown): Order => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data in order');
	}
	if (
		'user' in object &&
		'orderItems' in object &&
		'shippingAddress' in object &&
		'paymentMethod' in object &&
		'itemsPrice' in object &&
		'taxPrice' in object &&
		'shippingPrice' in object &&
		'totalPrice' in object &&
		'isPaid' in object &&
		'isDelivered' in object
	) {
		const checkedOrder: Order = {
			user: parseMongooseObject(object.user), // string??
			orderItems: parseOrderItems(object.orderItems),
			shippingAddress: parseShippingAddress(object.shippingAddress),
			paymentMethod: parseStringKey('payment method', object.paymentMethod),
			itemsPrice: parseNumberKey('itemsPrice', object.itemsPrice),
			taxPrice: parseNumberKey('taxPrice', object.taxPrice),
			shippingPrice: parseNumberKey('shippingPrice', object.shippingPrice),
			totalPrice: parseNumberKey('totalPrice', object.totalPrice),
			isDelivered: parseBooleanKey('isDelivered', object.isDelivered),
			isPaid: parseBooleanKey('isPaid', object.isPaid),
		};
		return checkedOrder;
	}
	throw new Error('Incorrect data: some fields are missing in Order');
};

export const toCheckOrderData = (object: unknown): OrderData => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data in order');
	}
	if (
		'orderItems' in object &&
		'shippingAddress' in object &&
		'paymentMethod' in object &&
		'itemsPrice' in object &&
		'taxPrice' in object &&
		'shippingPrice' in object &&
		'totalPrice' in object
	) {
		const checkedOrderData: OrderData = {
			orderItems: parseOrderItems(object.orderItems),
			shippingAddress: parseShippingAddress(object.shippingAddress),
			paymentMethod: parseStringKey('payment method', object.paymentMethod),
			itemsPrice: parseNumberKey('itemsPrice', object.itemsPrice),
			taxPrice: parseNumberKey('taxPrice', object.taxPrice),
			shippingPrice: parseNumberKey('shippingPrice', object.shippingPrice),
			totalPrice: parseNumberKey('totalPrice', object.totalPrice),
		};
		return checkedOrderData;
	}
	throw new Error('Incorrect data: some fields are missing in Order Data');
};

export const toReqOrderUpdate = (object: unknown): OrderUpdateReq => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data in order');
	}

	if (
		'id' in object &&
		'status' in object &&
		'update_time' in object &&
		'payer' in object
	) {
		const order = {
			id: parseStringKey('id', object.id),
			status: parseStringKey('status', object.status),
			update_time: parseStringKey('update_time', object.status),
			payer: { email_address: parseStringKey('email_address', object.status) },
		};
		return order;
	}
	throw new Error('Incorrect data: some fields are missing in OrderUpdateReq');
};

// PRODUCT
export const parseRating = (object: unknown): Rating => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data in Rating');
	}
	if ('numReviews' in object && 'rating' in object) {
		const options: Rating = {
			numReviews: parseNumberKey('numReviews', object.numReviews),
			rating: parseNumberKey('rating', object.rating),
		};
		return options;
	}
	throw new Error('Incorrect data: some fields are missing in Rating ');
};

export const parseDetails = (object: unknown): Details => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data in Details');
	}

	if ('story' in object) {
		const details: Details = {
			story: parseStringKey('story', object.story),
		};

		if ('occurrence' in object) {
			details.occurrence = parseStringKey('occurrence', object.occurrence);
		}

		if ('latinName' in object) {
			details.latinName = parseStringKey('latinName', object.latinName);
		}

		if ('ytLink' in object) {
			details.ytLink = parseStringKey('ytLink', object.ytLink);
		}
		return details;
	}
	throw new Error('Incorrect data: some fields are missing in Details ');
};

export const isValidCategory = (object: unknown): boolean => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data in category');
	}

	if ('name' in object && 'slug' in object) {
		if (isString(object.name) && isString(object.slug)) {
			return true;
		}
	}
	throw new Error('Incorrect data: some fields are missing in Category ');
};

export const parseCategories = (object: unknown): Category[] => {
	if (!object || !isArray(object)) {
		throw new Error('Incorrect or missing data in Categories');
	}

	const typedObject = object as Category[];
	typedObject.forEach((category: Category) => {
		if (!isValidCategory(category)) {
			throw new Error('Incorrect or missing category');
		}
	});

	return typedObject;
};

export const parseProductOptions = (object: unknown): ProductOptions => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}
	if ('material' in object && 'size' in object) {
		const typedProductOptions: ProductOptions = object as ProductOptions;
		return typedProductOptions;
	}
	throw new Error('Incorrect data: some fields are missing in ProductOptions ');
};

export const isValidVariation = (object: unknown): boolean => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	const variationObject = object as Variation;

	const requiredProperties = [
		'productSlug',
		'options',
		'SKU',
		'price',
		'countInStock',
		'tags',
	];

	const missingProperties = requiredProperties.filter(
		(prop) => !(prop in variationObject)
	);
	if (missingProperties.length === 0) {
		if (
			parseStringKey('productSlug', variationObject.productSlug) &&
			parseOptions(variationObject.options) &&
			parseStringKey('SKU', variationObject.SKU) &&
			parseNumberKey('price', variationObject.price) &&
			parseNumberKey('countInStock', variationObject.countInStock) &&
			parseTags(variationObject.tags)
		) {
			return true;
		}
		return true;
	} else {
		throw new Error(
			`Incorrect data: the following fields are missing in Variation: ${missingProperties.join(
				', '
			)}`
		);
	}
};

const parseVariations = (variations: unknown): Variation[] => {
	if (!variations || !isArray(variations)) {
		throw new Error('Incorrect or missing variations');
	}
	const typedVariations = variations as Variation[];
	typedVariations.forEach((variation: Variation) => {
		if (!isValidVariation(variation)) {
			throw new Error('Incorrect or missing Variation');
		}
	});
	return typedVariations;
};

const isValidReviewUser = (object: unknown): boolean => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data in Review');
	}
	const variationObject = object as ReviewUser; 
	const requiredProperties = ['user', 'name', 'rating', 'comment'];
	const missingProperties = requiredProperties.filter(
		(prop) => !(prop in variationObject)
	);
	if (missingProperties.length === 0) {
		if (
			parseStringKey('user', variationObject.user) &&
			parseStringKey('name', variationObject.name) &&
			parseNumberKey('rating', variationObject.rating) &&
			parseStringKey('comment', variationObject.comment)
		) {
			return true;
		}
		return true;
	} else {
		throw new Error(
			`Incorrect data: the following fields are missing in Review: ${missingProperties.join(
				', '
			)}`
		);
	}
};

const parseReviewsUser = (reviews: unknown): ReviewUser[] => {
	if (!reviews || !isArray(reviews)) {
		throw new Error('Incorrect or missing reviews');
	}
	const typedReviewsUser = reviews as ReviewUser[];
	typedReviewsUser.forEach((review: ReviewUser) => {
		if (!isValidReviewUser(review)) {
			throw new Error('Incorrect or missing Review');
		}
	});
	return typedReviewsUser;
};

export const toCheckedProduct = (object: unknown): Product => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data in Product');
	}
	if (
		'_id' in object &&
		'details' in object &&
		'name' in object &&
		'slug' in object &&
		'rating' in object &&
		'categories' in object &&
		'tags' in object &&
		'images' in object &&
		'options' in object &&
		'variations' in object &&
		'statistics' in object
	) {
		const checkedProduct: Product = {
			_id: parseStringKey('_id', object._id),
			details: parseDetails(object.details),
			name: parseStringKey('name', object.name),
			slug: parseStringKey('slug', object.slug),
			rating: parseRating(object.rating),
			categories: parseCategories(object.categories),
			tags: parseTags(object.tags),
			images: parseArrayStrings('images', object.images),
			options: parseProductOptions(object.options),
			variations: parseVariations(object.variations),
			statistics: parseArrayStrings('statistics', object.statistics),
		};

		if ('reviews' in object) {
			checkedProduct.reviews = parseReviewsUser(object.reviews);
		}
		return checkedProduct;
	}
	console.log('error');
	throw new Error('Incorrect data: some fields are missing in Product');
};
export const toCheckedReview = (object: unknown): Review => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data in Review');
	}
	if ('rating' in object && 'comment' in object) {
		const typedReview: Review = {
			rating: parseNumberKey('rating', object.rating),
			comment: parseStringKey('comment', object.comment),
		};

		return typedReview;
	}
	console.log('error');
	throw new Error('Incorrect data: some fields are missing in Review');
};

// USER ADMIN
export const parseUserInfoOptions = (object: unknown): UserInfoOptions => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	const userOrderOptions: UserInfoOptions = {};
	if ('_id' in object) {
		userOrderOptions._id = parseStringKey('email', object._id);
	}

	if ('name' in object) {
		userOrderOptions.name = parseStringKey('name', object.name);
	}
	if ('email' in object) {
		userOrderOptions.email = parseStringKey('email', object.email);
	}
	if ('isAdmin' in object) {
		userOrderOptions.isAdmin = parseBooleanKey('isAdmin', object.isAdmin);
	}

	if (Object.keys(userOrderOptions).length === 0) {
		throw new Error('Incorrect data: no valid fields found');
	}
	return userOrderOptions;
};
