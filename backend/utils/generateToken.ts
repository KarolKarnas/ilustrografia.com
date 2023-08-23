import jwt from 'jsonwebtoken';
import { Response } from 'express';
import { parseStringKey } from './typeUtils';

const generateToken = (res: Response, userId: string) => {
	const SECRET_KEY: string = parseStringKey(process.env.JWT_SECRET);
	const token = jwt.sign({ userId }, SECRET_KEY, {
		expiresIn: '30d',
	});

	// Set JWT as an HTTP-Only cookie
	res.cookie('jwt', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
		sameSite: 'strict', // Prevent CSRF attacks
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
	});
};

export default generateToken;
