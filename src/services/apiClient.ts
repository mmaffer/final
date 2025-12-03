import type { IUser, IPost } from '../types'; 

const BASE_URL = 'https://jsonplaceholder.typicode.com';


async function fetchWrapper<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  
  const data = await response.json();
  return data as T;
}


export const getPosts = (): Promise<IPost[]> => {
  return fetchWrapper<IPost[]>('/posts?_limit=12');
};

export const getUsers = (): Promise<IUser[]> => {
  return fetchWrapper<IUser[]>('/users?_limit=8');
};

