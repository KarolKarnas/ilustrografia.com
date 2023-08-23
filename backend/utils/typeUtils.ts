import mongoose from 'mongoose';
import { Order, ShippingAddress } from '../types/Order';
import { VariationCart } from '../types/Product';
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

export const parseStringKey = (stringKey: unknown): string => {
	if (!stringKey || !isString(stringKey)) {
		throw new Error(`Incorrect or missing ${stringKey}`);
	}
	return stringKey;
};

export const parseNumberKey = (numberKey: unknown): number => {
	if (!numberKey || !isNumber(numberKey)) {
		throw new Error(`Incorrect or missing ${numberKey}`);
	}
	return numberKey;
};

export const parseBooleanKey = (booleanKey: unknown): boolean => {
	if (!booleanKey || !isBoolean(booleanKey)) {
		throw new Error(`Incorrect or missing ${booleanKey}`);
	}
	return booleanKey;
};

// Mongoose ID
const isMongooseId = (value: unknown): value is mongoose.Types.ObjectId => {
	return value instanceof mongoose.Types.ObjectId;
};

const parseMongooseObject = (objectId: unknown): mongoose.Types.ObjectId => {
	if (!isMongooseId(objectId)) {
		throw new Error('Incorrect or missing ObjectId');
	}
	return objectId;
};

const parseOrderItems = (orderItems: unknown): VariationCart[] => {
	if (!orderItems || !isArray(orderItems)) {
		throw new Error('Incorrect or missing orderItems');
	}

	const typedVariations = orderItems as VariationCart[];
//Here
	// typedEntries.forEach((entry: Entry) => {
	// 	if (!isValidEntryType(entry.type)) {
	// 		throw new Error('Incorrect or missing entry type');
	// 	}
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
			address: parseStringKey(object.address),
			city: parseStringKey(object.city),
			postalCode: parseStringKey(object.postalCode),
			country: parseStringKey(object.country),
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
			email: parseStringKey(object.email),
			password: parseStringKey(object.password),
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
			name: parseStringKey(object.name),
			email: parseStringKey(object.email),
			password: parseStringKey(object.password),
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
		checkedUser.name = parseStringKey(object.name);
	}
	if ('email' in object) {
		checkedUser.email = parseStringKey(object.email);
	}
	if ('password' in object) {
		checkedUser.password = parseStringKey(object.password);
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
			user: parseMongooseObject(object.user),
			orderItems: parseOrderItems(object.orderItems),
			shippingAddress: parseShippingAddress(object.shippingAddress),
			paymentMethod: parseStringKey(object.paymentMethod),
			itemsPrice: parseNumberKey(object.itemsPrice),
			taxPrice: parseNumberKey(object.taxPrice),
			shippingPrice: parseNumberKey(object.shippingPrice),
			totalPrice: parseNumberKey(object.totalPrice),
			isPaid: parseBooleanKey(object.isPaid),
			isDelivered: parseBooleanKey(object.isDelivered),
		};
		return checkedOrder;
	}
	throw new Error('Incorrect data: some fields are missing in Order');
};
