import { UserEntity } from '../../entities/user.entity';

export abstract class IUserLogin {
  abstract call(login: String, password: String): Promise<UserEntity>;
}
