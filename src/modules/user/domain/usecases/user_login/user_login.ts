import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../entities/user.entity';
import { IUserRepository } from '../../repositories/user.interface.repository';
import { IUserLogin } from './user_login.interface';

@Injectable()
export class UserLogin implements IUserLogin {
  constructor(private readonly repository: IUserRepository) {}

  call(login: String, password: String): Promise<UserEntity> {
    return this.repository.getByLogin(login, password);
  }
}
