import asyncHandler from '../middleware/asyncHandler';
import UserModel from '../models/userModel';
import { Request, Response } from 'express';
import { toCheckUser, toCheckUserWithName } from '../utils/typeUtils';
import {
	UserSchemaMethod,
	CheckUser,
	CheckUserWithName,
	UserId,
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
		const userId = user._id.toString(); // Convert ObjectId to string
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
const getUserProfile = asyncHandler(async (_req, res) => {
	await UserModel.find({});
	res.send('get user profile');
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (_req, res) => {
	await UserModel.find({});
	res.send('update user profile');
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (_req, res) => {
	await UserModel.find({});
	res.send('get users');
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (_req, res) => {
	await UserModel.find({});
	res.send('delete user');
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (_req, res) => {
	await UserModel.find({});
	res.send('get user by id');
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (_req, res) => {
	await UserModel.find({});
	res.send('update user');
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
