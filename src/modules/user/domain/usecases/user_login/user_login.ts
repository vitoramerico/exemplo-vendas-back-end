import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../entities/user.entity';
import { IUserRepository } from '../../repositories/user.interface.repository';
import { IUserLogin } from './user_login.interface';

@Injectable()
export class UserLogin implements IUserLogin {
  constructor(private readonly repository: IUserRepository) {}

  async call(login: string, password: string): Promise<UserEntity> {
    const result = await this.repository.getByLogin(login, password);
    
    if (result == null) throw new HttpException('Login ou senha inálido', HttpStatus.BAD_REQUEST);

    return result;
  }
}
