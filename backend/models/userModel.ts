import mongoose from 'mongoose';
import { User } from '../types/User.ts';
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

userSchema.methods.matchPassword = async function (
	enteredPassword: string
): Promise<boolean> {
	if (typeof this.password !== 'string') {
		throw new Error('Unexpected password type');
	}
	return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model<User>('User', userSchema);

export default User;
