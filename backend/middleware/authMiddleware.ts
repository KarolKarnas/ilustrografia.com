import jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import asyncHandler from './asyncHandler';
import UserModel from '../models/userModel';
import { parseToken, parseSecret } from '../utils/typeUtils';
import { Request, Response, NextFunction } from 'express';
// import { toUserNoPassword } from '../types/utils';
import { UserNoPassword } from '../types/User';

interface CustomRequest extends Request {
	user?: UserNoPassword; // Change UserModel to the actual type of user model
}

// Protect routes
const protect = asyncHandler(async (req: CustomRequest, res, next) => {
	// let token;

	// Read JWT from the 'jwt' cookie
	const token: string = parseToken(req.cookies.jwt);

	if (token) {
		try {
			const SECRET_KEY: string = parseSecret(process.env.JWT_SECRET);
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
