import mongoose from 'mongoose';
import { User } from '../types/User';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema<User>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.methods.matchPassword = async function (enteredPassword: string) : Promise<boolean> {
	if (typeof this.password !== 'string') {
		throw new Error('Unexpected password type');
	}
	return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model<User>('User', userSchema);

export default User;
