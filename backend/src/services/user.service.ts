import User, {UserAttributes} from '../models/User';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import {Op} from 'sequelize';

const UserService = {
  async authenticate(username: string, password: string): Promise<string | null> {
    try {
      const user = await User.findOne({where: {username}});

      if (!user) {
        return null;
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return null; // Invalid password
      }

      const secretKey: string = crypto.randomBytes(32).toString('hex');
      const token = jwt.sign({userId: user.id}, secretKey, {expiresIn: '1h'});

      return token;
    } catch (error) {
      console.error('Error during authentication:', error);
      throw new Error('Authentication failed');
    }
  },
  async register(userData: UserAttributes): Promise<User> {
    try {
      const existingUser = await User.findOne({
        where: {
          [Op.or]: [{username: userData.username}, {email: userData.email}],
        },
      });

      if (existingUser) {
        throw new Error('Username or email already exists');
      }

      // Create a new user
      return await User.create(userData);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to register user: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  },
};

export default UserService;
