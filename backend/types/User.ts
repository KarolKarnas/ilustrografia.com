import mongoose from 'mongoose';
// import { Request } from 'express';

export interface User {
	name: string;
	email: string;
	password: string;
	isAdmin: boolean;
}

export interface UserId extends User {
	_id: mongoose.Types.ObjectId;
}

export interface UserIdString extends User {
	_id: string;
}

export interface RequestUser extends Request {
	user: UserId;
}

export interface CheckUser {
	email: string;
	password: string;
}

export type UserUpdate = {
  name?: string;
  email?: string;
  password?: string;
	// isAdmin?: boolean;
};

export interface CheckUserWithName extends CheckUser {
	name: string;
}

//userModel -> userController

export interface UserSchemaMethod extends User {
	_id: string;
	matchPassword(enteredPassword: string): Promise<boolean>;
}

// authMiddleware
export interface UserNoPassword {
	_id: mongoose.Types.ObjectId;
	name?: string;
	email?: string;
	isAdmin?: boolean;
}

export interface UserInfoOptions {
  _id?: string,
	name?: string;
	email?: string;
	isAdmin?: boolean;
}





