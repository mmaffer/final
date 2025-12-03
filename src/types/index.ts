
export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}