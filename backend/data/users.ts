import bcrypt from 'bcryptjs';
import { User } from '../types/User';

export const password = '123456';

const users: User[] = [
	{
		name: 'Admin User',
		email: 'admin@email.com',
		password: bcrypt.hashSync(password, 10),
		isAdmin: true,
	},
	{
		name: 'John Doe',
		email: 'john@email.com',
		password: bcrypt.hashSync(password, 10),
		isAdmin: false,
	},
	{
		name: 'Jane Doe',
		email: 'jane@email.com',
		password: bcrypt.hashSync(password, 10),
		isAdmin: false,
	},
];

export default users;
