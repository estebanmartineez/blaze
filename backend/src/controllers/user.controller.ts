import {Request, Response} from 'express';
import UserService from '../services/user.service';

const UserController = {
  async login(req: Request, res: Response) {
    const {username, password} = req.body;

    try {
      const token = await UserService.authenticate(username, password);

      if (!token) {
        return res.status(401).json({error: 'Invalid username or password'});
      }

      res.json({token});
    } catch (error) {
      console.error(error);
      res.status(500).json({error: 'Internal Server Error'});
    }
  },
  async register(req: Request, res: Response): Promise<void> {
    try {
      const {username, email, password, firstName, lastName} = req.body;

      const newUser = await UserService.register({firstName, lastName, username, email, password});

      res.status(201).json({user: newUser});
    } catch (error) {
      console.error(error);
      res.status(500).json({error: 'Failed to register user'});
    }
  },
};

export default UserController;
