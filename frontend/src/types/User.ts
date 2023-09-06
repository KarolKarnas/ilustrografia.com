export interface UserInfo {
  _id: string,
	name: string;
	email: string;
	isAdmin: boolean;
}

export type UserOrder = Omit<UserInfo, 'isAdmin'>

export interface UserInfoOptions {
  _id?: string,
	name?: string;
	email?: string;
	isAdmin?: boolean;
}