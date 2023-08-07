import { Request, Response } from 'express';
import { userServices } from './user.services';

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createUser(req.body);
    res.status(200).send({
      success: true,
      message: 'User create successfully',
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: 'Failed to  create user!',
    });
  }
};

export const userController = {
  createUser,
};
