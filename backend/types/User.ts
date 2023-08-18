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


export interface UserSchemaMethod extends User {
	_id: string,
	matchPassword(enteredPassword: string): Promise<boolean>;
}