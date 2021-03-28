import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from '../../entities/user.entity';
import { IUserRepository } from '../../repositories/user.interface.repository';
import { IUserEdit } from './user_edit.interface';

@Injectable()
export class UserEdit implements IUserEdit {
  constructor(private readonly repository: IUserRepository) {}

  async call(userEntity: UserEntity): Promise<string> {
    var result = await this.repository.getByEmail(userEntity.email);

    if (result != null && result.id != userEntity.id)
      throw new HttpException('Email ja cadastrado', HttpStatus.BAD_REQUEST);

    return this.repository.edit(userEntity);
  }
}
