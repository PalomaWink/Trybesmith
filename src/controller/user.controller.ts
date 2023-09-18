import { Request, Response } from 'express';
import loginUser from '../service/user.service';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  const { data, status } = await loginUser.login(username, password);
  if (status === 401) {
    return res.status(status).json(data);
  }
  return res.status(status).json(data);
};

export default {
  login,
};