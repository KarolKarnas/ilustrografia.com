import { CheckUser } from './User';



const isString = (text: unknown): text is string => {
	return typeof text === 'string' || text instanceof String;
};

// const isBoolean = (boolean: unknown): boolean is boolean => {
// 	return typeof boolean === 'boolean' || boolean instanceof Boolean;
// };

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


