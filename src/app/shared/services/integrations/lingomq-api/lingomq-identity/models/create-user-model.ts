import { SignModel } from './sign-model';
import { UserDto } from './user-dto';
export interface CreateUserModel {
  UserDto: UserDto;
  SignModel: SignModel;
}
