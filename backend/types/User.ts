import mongoose from "mongoose";

export interface User {
	name: string;
	email: string;
	password: string;
	isAdmin: boolean;
}

export interface CheckUser {
	email: string;
	password: string;
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
