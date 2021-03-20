import { UserEntity } from '../../entities/user.entity';

export abstract class IUserAdd {
  abstract call(userEntity: UserEntity): Promise<String>;
}
