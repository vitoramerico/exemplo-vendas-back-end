import { UserEntity } from '../../entities/user.entity';

export abstract class IUserEdit {
  abstract call(userEntity: UserEntity): Promise<string>;
}
