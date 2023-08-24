export interface UserInfo {
  _id: string,
	name: string;
	email: string;
	isAdmin: boolean;
}

export type UserOrder = Omit<UserInfo, 'isAdmin'>


export interface CustomError {
  status: number,
  data: {
    message: string,
    stack: string
  }
}