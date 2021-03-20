import { UserEntity } from '../entities/user.entity';

export abstract class IUserRepository {
  abstract add(userEntity: UserEntity): Promise<String>;
  abstract getByLogin(login: String, password: String): Promise<UserEntity>;
  abstract getByEmail(email: String): Promise<UserEntity>;
  abstract getAll(): Promise<UserEntity[]>;
}
