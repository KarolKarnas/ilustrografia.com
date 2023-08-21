import {
	CheckUser,
	CheckUserWithName,
	RequestUser,
	UserUpdate,
} from '../types/User';

const isString = (text: unknown): text is string => {
	return typeof text === 'string' || text instanceof String;
};

// const isBoolean = (boolean: unknown): boolean is boolean => {
// 	return typeof boolean === 'boolean' || boolean instanceof Boolean;
// };

const parseName = (name: unknown): string => {
	if (!name || !isString(name)) {
		throw new Error('Incorrect or missing name');
	}
	return name;
};

const parseEmail = (email: unknown): string => {
	if (!email || !isString(email)) {
		throw new Error('Incorrect or missing email');
	}
	return email;
};

const parsePassword = (password: unknown): string => {
	if (!password || !isString(password)) {
		throw new Error('Incorrect or missing password');
	}
	return password;
};

export const parseSecret = (secret: unknown): string => {
	if (!secret || !isString(secret)) {
		throw new Error('Incorrect or missing secret');
	}
	return secret;
};

export const parseToken = (token: unknown): string => {
	if (!token || !isString(token)) {
		throw new Error('Not authorized, token failed');
	}
	return token;
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
			email: parseEmail(object.email),
			password: parsePassword(object.password),
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
			name: parseName(object.name),
			email: parseEmail(object.email),
			password: parsePassword(object.password),
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
		checkedUser.name = parseName(object.name);
	}
	if ('email' in object) {
		checkedUser.email = parseEmail(object.email);
	}
	if ('password' in object) {
		checkedUser.password = parsePassword(object.password);
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
