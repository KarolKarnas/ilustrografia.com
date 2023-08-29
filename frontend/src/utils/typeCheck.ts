import { Order } from '../types/Order';
import { ShippingAddress, VariationCart } from '../types/Product';
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
	//Here
	// typedEntries.forEach((entry: Entry) => {
	// 	if (!isValidEntryType(entry.type)) {
	// 		throw new Error('Incorrect or missing entry type');
	// 	}
	return typedVariations;
};

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
	const userOrderOptions: UserInfoOptions = {}
	if ('_id' in object) {
		userOrderOptions._id = parseStringKey('email', object._id)

	}
	if ('name' in object) {
		 
		userOrderOptions.name = parseStringKey('name', object.name)
		};
	if ('email' in object) {
		 
			userOrderOptions.email = parseStringKey('email', object.email)
		};
	if ('isAdmin' in object) {
		 
			userOrderOptions.isAdmin = parseBooleanKey('isAdmin', object.isAdmin)
		};

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
			checkedOrder.deliveredAt = parseStringKey('deliveredAt', object.deliveredAt);
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
