import asyncHandler from '../middleware/asyncHandler';
import UserModel from '../models/userModel';
import { Request, Response } from 'express';
import {
	toCheckUser,
	toCheckUserWithName,
	checkHaveUser,
	toCheckUserUpdate,
	parseUserInfoOptions,
} from '../utils/typeUtils';
import {
	UserSchemaMethod,
	CheckUser,
	CheckUserWithName,
	UserId,
	UserUpdate,
	RequestUser,
} from '../types/User';
import generateToken from '../utils/generateToken';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
	const checkedUser: CheckUser = toCheckUser(req.body);
	const { email, password } = checkedUser;
	const user: UserSchemaMethod | null = await UserModel.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		generateToken(res, user._id);
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
	const checkedUser: CheckUserWithName = toCheckUserWithName(req.body);
	const { name, email, password } = checkedUser;

	const userExists: UserSchemaMethod | null = await UserModel.findOne({
		email,
	});

	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	const user: UserId | null = await UserModel.create({
		name,
		email,
		password,
	});

	if (user) {
		const userId = user._id.toString();
		generateToken(res, userId);
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (_req: Request, res: Response) => {
	res.cookie('jwt', '', {
		httpOnly: true,
		expires: new Date(0),
	});
	res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
	const reqWithUser: RequestUser = checkHaveUser(req);
	const user: UserId | null = await UserModel.findById(reqWithUser.user._id);

	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
	const reqWithUser = checkHaveUser(req);
	const user = await UserModel.findById(reqWithUser.user._id);
	if (user) {
		const bodyData: UserUpdate = toCheckUserUpdate(req.body);
		user.name = bodyData.name || user.name;
		user.email = bodyData.email || user.email;
		if (bodyData.password) {
			user.password = bodyData.password;
		}

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (_req, res) => {
	const users = await UserModel.find({});
	if (users) {
		res.send(users);
	} else {
		res.status(404);
		throw new Error('No users found');
	}
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
	const user = await UserModel.findById(req.params.id);
	if (user) {
		if (user.isAdmin) {
			res.status(400);
			throw new Error('Can not delete admin user');
		}
		await UserModel.deleteOne({ _id: user._id });
		res.json({ message: 'User removed' });
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
	const user = await UserModel.findById(req.params.id).select('-password');
	if (user) {
		res.json(user);
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
	const user = await UserModel.findById(req.params.id);
	const typedReqUser = parseUserInfoOptions(req.body);

	if (user) {
		user.name = typedReqUser.name || user.name;
		user.email = typedReqUser.email || user.email;
		user.isAdmin = Boolean(typedReqUser.isAdmin);

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

export {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser,
};
