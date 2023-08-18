import { CheckUser } from './User';

// export const findSubstring = (input: string): string | null => {
// 	if (!input) {
// 		return null; // Return null for undefined input
// 	}
// 	const substringsToCheck = [
// 		'art-print',
// 		'painting-on-canvas',
// 		'poster',
// 		'premium-print',
// 	];
// 	const regex = new RegExp(substringsToCheck.join('|'), 'i'); // 'i' flag for case-insensitive matching
// 	const match = input.match(regex);
// 	return match ? match[0] : null;
// };

const isString = (text: unknown): text is string => {
	return typeof text === 'string' || text instanceof String;
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
