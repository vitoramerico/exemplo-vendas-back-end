import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from '../../entities/user.entity';
import { IUserRepository } from '../../repositories/user.interface.repository';
import { IUserGetAll } from './user_get_all.interface';

@Injectable()
export class UserGetAll implements IUserGetAll {
  constructor(private readonly repository: IUserRepository) {}

  call(): Promise<UserEntity[]> {
    return this.repository.getAll();
  }
}
