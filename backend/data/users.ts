import bcrypt from 'bcryptjs';
import { User } from '../types/User';

const users: User[] = [
	{
		name: 'Admin',
		email: 'admin@email.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Karol',
		email: 'karol@email.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
	},
	{
		name: 'Meggie',
		email: 'meggie@email.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
	},
];

export default users;
