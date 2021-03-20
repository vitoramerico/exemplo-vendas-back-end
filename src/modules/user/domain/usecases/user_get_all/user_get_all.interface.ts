import { UserEntity } from '../../entities/user.entity';

export abstract class IUserGetAll {
  abstract call(): Promise<UserEntity[]>;
}
