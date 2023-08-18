import mongoose from 'mongoose';

export interface User {
	name: string;
	email: string;
	password: string;
	isAdmin: boolean;
}

export interface UserId extends User {
	_id: mongoose.Types.ObjectId;
}


export interface CheckUser {
	email: string;
	password: string;
}

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
