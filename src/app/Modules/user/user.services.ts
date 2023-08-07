import apiError from '../../../errors/apiError';
import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  user.role = 'user';
  const result = await User.create(user);

  if (!result) {
    throw new apiError(400, 'Failed to create User!');
  }

  return result;
};

export const userServices = {
  createUser,
};
