import { UserEntity } from '../entities/user.entity';

export abstract class IUserRepository {
  abstract add(userEntity: UserEntity): Promise<string>;
  abstract edit(userEntity: UserEntity): Promise<string>;
  abstract getByLogin(login: string, password: string): Promise<UserEntity>;
  abstract getByEmail(email: string): Promise<UserEntity>;
  abstract getAll(): Promise<UserEntity[]>;
}
