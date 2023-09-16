export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
};

export type LoginResponse = {
  status: number, data: { token: string } 
} | {
  status: number, data: { message: string }
};