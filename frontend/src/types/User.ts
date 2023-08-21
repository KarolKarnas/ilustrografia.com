export interface UserInfo {
  _id: string,
	name: string;
	email: string;
	isAdmin: boolean;
}


export interface CustomError {
  status: number,
  data: {
    message: string,
    stack: string
  }
}