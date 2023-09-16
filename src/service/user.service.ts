import * as jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';
import { LoginResponse } from '../types/User';

const login = async (username: string, password: string): Promise<LoginResponse> => {
  const user = await UserModel.findOne({ where: { username } });
  if (user.dataValues.username !== username || user.dataValues.password !== password) {
    return { status: 400, data: { message: 'Username or password invalid' } };
  }
  const token = jwt.sign({
    id: user.dataValues.id,
    username: user.dataValues.username,
  }, process.env.JWT_SECRET || 'secret padrao');
  return { status: 200, data: { token } };
};

export default {
  login,
};