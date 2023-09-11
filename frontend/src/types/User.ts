export interface UserInfo {
  _id: string,
	name: string;
	email: string;
	isAdmin: boolean;
}

export type UserOrder = Omit<UserInfo, 'isAdmin'>

export interface UserOrderPassword extends Omit<UserInfo, 'isAdmin'> {
	password: string
}

export interface UserInfoOptions {
  _id?: string,
	name?: string;
	email?: string;
	isAdmin?: boolean;
}