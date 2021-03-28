import { UserEntity } from '../../entities/user.entity';

export abstract class IUserLogin {
  abstract call(login: string, password: string): Promise<UserEntity>;
}
