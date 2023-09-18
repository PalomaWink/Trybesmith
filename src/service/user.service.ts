import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { LoginResponse } from '../types/User';

const login = async (username: string, senha: string): Promise<LoginResponse> => {
  const user = await UserModel.findOne({ where: { username } }); 
  if (!user) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }
  const isValid = await bcrypt.compare(senha, user.dataValues.password);
  if (!isValid) {
    return { status: 401, data: { message: 'Username or password invalid' } };
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