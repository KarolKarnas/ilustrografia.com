import { Order } from '../types/Order';
import {
	Category,
	Options,
	Product,
	ProductOptions,
	Rating,
	ShippingAddress,
	Tag,
	Variation,
	VariationCart,
} from '../types/Product';
import { UserOrder, UserInfoOptions } from '../types/User';

export const isString = (text: unknown): text is string => {
	return typeof text === 'string' || text instanceof String;
};

export const isMaterial = (text: unknown): boolean => {
	return (
		text === 'art-print' ||
		text === 'painting-on-canvas' ||
		text === 'poster' ||
		text === 'premium-print'
	);
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

export const isValidVariationCart = (object: unknown): boolean => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	const variationObject = object as VariationCart; // Type assertion

	const requiredProperties = ['SKU', 'price', '_id', 'qty', 'image'];

	const missingProperties = requiredProperties.filter(
		(prop) => !(prop in variationObject)
	);
	if (missingProperties.length === 0) {
		if (
			parseStringKey('SKU', variationObject.SKU) &&
			parseNumberKey('price', variationObject.price) &&
			parseStringKey('_id', variationObject._id) &&
			parseNumberKey('qty', variationObject.qty) &&
			parseStringKey('image', variationObject.image) &&
			parseStringKey('variationName', variationObject.variationName)
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
// export const isValidVariationCart = (object: unknown): boolean => {
// 	if (!object || typeof object !== 'object') {
// 		throw new Error('Incorrect or missing data');
// 	}

// 	if (
// 		'productSlug' in object &&
// 		'options' in object &&
// 		'SKU' in object &&
// 		'price' in object &&
// 		'countInStock' in object &&
// 		'tags' in object &&
// 		'_id' in object &&
// 		'qty' in object &&
// 		'image' in object &&
// 		'variationName' in object &&
// 		'pathnameWithQuery' in object
// 	) {
// 		if (
// 			parseStringKey('productSlug', object.productSlug) &&
// 			parseOptions(object.options) &&
// 			parseStringKey('SKU', object.SKU) &&
// 			parseNumberKey('price', object.price) &&
// 			parseNumberKey('countInStock', object.countInStock) &&
// 			parseTags(object.tags) &&
// 			parseStringKey('_id', object._id) &&
// 			parseNumberKey('qty', object.qty) &&
// 			parseStringKey('image', object.image) &&
// 			parseStringKey('variationName', object.variationName) &&
// 			parseStringKey('pathnameWithQuery', object.pathnameWithQuery)
// 		) {
// 			return true;
// 		}
// 	}

// 	throw new Error('Incorrect data: some fields are missing in VariationCart');
// };

export const parseUserOrder = (object: unknown): UserOrder => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	if ('name' in object && 'email' in object && '_id' in object) {
		const userOrder: UserOrder = {
			name: parseStringKey('name', object.name),
			email: parseStringKey('email', object.email),
			_id: parseStringKey('password', object._id),
		};

		return userOrder;
	}

	throw new Error('Incorrect data: some fields are missing');
};

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

export const toCheckOrder = (object: unknown): Order => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data in order');
	}
	// console.log(object);
	if (
		'createdAt' in object &&
		'isDelivered' in object &&
		'isPaid' in object &&
		'itemsPrice' in object &&
		'orderItems' in object &&
		'paymentMethod' in object &&
		'shippingAddress' in object &&
		'shippingPrice' in object &&
		'taxPrice' in object &&
		'totalPrice' in object &&
		'updatedAt' in object &&
		'user' in object &&
		'__v' in object &&
		'_id' in object
	) {
		const checkedOrder: Order = {
			createdAt: parseStringKey('createdAt', object.createdAt),
			isDelivered: parseBooleanKey('isDelivered', object.isDelivered),
			isPaid: parseBooleanKey('isPaid', object.isPaid),
			itemsPrice: parseNumberKey('itemsPrice', object.itemsPrice),
			orderItems: parseOrderItems(object.orderItems),
			paymentMethod: parseStringKey('payment method', object.paymentMethod),
			shippingAddress: parseShippingAddress(object.shippingAddress),
			shippingPrice: parseNumberKey('shippingPrice', object.shippingPrice),
			taxPrice: parseNumberKey('taxPrice', object.taxPrice),
			totalPrice: parseNumberKey('totalPrice', object.totalPrice),
			updatedAt: parseStringKey('updatedAt', object.updatedAt),
			user: parseUserInfoOptions(object.user), // string??
			__v: parseNumberKey('__v', object.__v),
			_id: parseStringKey('_id', object._id),
		};

		if ('paidAt' in object) {
			checkedOrder.paidAt = parseStringKey('paidAt', object.paidAt);
		}

		if ('deliveredAt' in object) {
			checkedOrder.deliveredAt = parseStringKey(
				'deliveredAt',
				object.deliveredAt
			);
		}
		return checkedOrder;
	}
	throw new Error('Incorrect data: some fields are missing in Order');
};

export const toCheckOrders = (object: unknown): Order[] => {
	if (!object || !isArray(object)) {
		throw new Error('Incorrect or missing data in orders');
	}

	const newArr: Order[] = [];

	object.forEach((order) => {
		const checkedOrder = toCheckOrder(order);
		if (!checkedOrder) {
			throw new Error('Incorrect or missing order in orders');
		}
		newArr.push(checkedOrder);
	});

	return newArr;
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
	throw new Error('Incorrect data: some fields are missing in Options ');
};

//categories
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

//tags
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

export const isValidVariation = (object: unknown): boolean => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	const variationObject = object as Variation; // Type assertion

	const requiredProperties = [
		'productSlug',
		'options',
		'SKU',
		'price',
		'countInStock',
		'tags',
		'_id',
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
			parseTags(variationObject.tags) &&
			parseStringKey('_id', variationObject._id)
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
// export const isValidVariation = (object: unknown): boolean => {
// 	if (!object || typeof object !== 'object') {
// 		throw new Error('Incorrect or missing data');
// 	}

// 	if (
// 		'productSlug' in object &&
// 		'options' in object &&
// 		'SKU' in object &&
// 		'price' in object &&
// 		'countInStock' in object &&
// 		'tags' in object &&
// 		'_id' in object
// 	) {
// 		if (
// 			parseStringKey('productSlug', object.productSlug) &&
// 			parseOptions(object.options) &&
// 			parseStringKey('SKU', object.SKU) &&
// 			parseNumberKey('price', object.price) &&
// 			parseNumberKey('countInStock', object.countInStock) &&
// 			parseTags(object.tags) &&
// 			parseStringKey('_id', object._id)

// 		) {
// 			return true;
// 		}
// 	}

// 	throw new Error('Incorrect data: some fields are missing in Variation');
// };

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

export const toCheckProduct = (object: unknown): Product => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data in Product');
	}

	if (
		'_id' in object &&
		'name' in object &&
		'slug' in object &&
		'rating' in object &&
		'categories' in object &&
		'tags' in object &&
		'images' in object &&
		'options' in object &&
		'variations' in object
	) {
		const checkedProduct: Product = {
			_id: parseStringKey('_id', object._id),
			name: parseStringKey('name', object.name),
			slug: parseStringKey('slug', object.slug),
			rating: parseRating(object.rating),
			categories: parseCategories(object.categories),
			tags: parseTags(object.tags),
			images: parseArrayStrings('images', object.images),
			options: parseProductOptions(object.options),
			variations: parseVariations(object.variations),
		};

		if ('statistics' in object) {
			checkedProduct.statistics = parseArrayStrings('statistics',object.statistics);
		}
		return checkedProduct;
	}
	throw new Error('Incorrect data: some fields are missing in Product');
};

export const toCheckProducts = (object: unknown): Product[] => {
	if (!object || !isArray(object)) {
		throw new Error('Incorrect or missing data in Products');
	}

	const newArr: Product[] = [];

	object.forEach((product) => {
		const typedProduct = toCheckProduct(product);
		if (!typedProduct) {
			throw new Error('Incorrect or missing order in products');
		}
		newArr.push(typedProduct);
	});

	return newArr;
};
