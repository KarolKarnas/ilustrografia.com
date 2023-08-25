import mongoose from 'mongoose';
import { Order, OrderData, ShippingAddress } from '../types/Order';
import { Options, Tag, VariationCart } from '../types/Product';
import {
	CheckUser,
	CheckUserWithName,
	RequestUser,
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

// Mongoose ID
const isMongooseId = (value: unknown): value is mongoose.Types.ObjectId => {
	return value instanceof mongoose.Types.ObjectId;
};

const parseMongooseObject = (objectId: unknown): mongoose.Types.ObjectId => {
	if (!objectId || !isMongooseId(objectId)) {
		throw new Error('Incorrect or missing ObjectId');
	}
	return objectId;
};
//begin
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

//end

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

// const parseIsAdmin = (isAdmin: unknown): boolean => {
// 	if (!isAdmin || !isBoolean(isAdmin)) {
// 		throw new Error('Incorrect or missing isAdmin');
// 	}
// 	return isAdmin;
// };

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

//
export const checkHaveUser = (object: unknown): RequestUser => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	const userObject = object as RequestUser;

	if ('user' in userObject) {
		return userObject;
	}

	throw new Error('Incorrect data: some fields are missing');
};

// ORDER

export const toCheckOrder = (object: unknown): Order => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data in order');
	}

	console.log(object);

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
