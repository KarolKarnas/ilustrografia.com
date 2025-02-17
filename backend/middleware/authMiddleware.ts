import jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import asyncHandler from './asyncHandler';
import UserModel from '../models/userModel';
import { parseStringKey } from '../utils/typeUtils';
import { Request, Response, NextFunction } from 'express';
import { UserNoPassword } from '../types/User';

interface CustomRequest extends Request {
	user?: UserNoPassword;
}

// Protect routes
const protect = asyncHandler(async (req: CustomRequest, res, next) => {
	// Read JWT from the 'jwt' cookie
	const token: string = parseStringKey('token', req.cookies.jwt);

	if (token) {
		try {
			const SECRET_KEY: string = parseStringKey(
				'secret',
				process.env.JWT_SECRET
			);
			const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;

			req.user = await UserModel.findById(decoded.userId).select('-password');

			next();
		} catch (error) {
			res.status(401);
			throw new Error('Not authorized, token failed');
		}
	} else {
		res.status(401);
		throw new Error('Not authorized, no token');
	}
});

//Admin middleware
const admin = (req: CustomRequest, res: Response, next: NextFunction) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401);
		throw new Error('Not authorized as an admin');
	}
};

export { protect, admin };
