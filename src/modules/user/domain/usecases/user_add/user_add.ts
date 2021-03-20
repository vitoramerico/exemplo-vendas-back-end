import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from '../../entities/user.entity';
import { IUserRepository } from '../../repositories/user.interface.repository';
import { IUserAdd } from './user_add.interface';


@Injectable()
export class UserAdd implements IUserAdd {
  constructor(private readonly repository: IUserRepository) {}

  async call(userEntity: UserEntity): Promise<String> {
    var result = await this.repository.getByEmail(userEntity.email);

    if (result != null) throw new HttpException('Email ja cadastrado', HttpStatus.BAD_REQUEST);
    
    return this.repository.add(userEntity);
  }
}
