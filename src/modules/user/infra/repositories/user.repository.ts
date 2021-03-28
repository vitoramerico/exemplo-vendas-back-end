import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserEntity } from '../../domain/entities/user.entity';
import { IUserRepository } from '../../domain/repositories/user.interface.repository';
import { IUserDatasource } from '../datasource/user.interface.datasource';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly userDataSource: IUserDatasource) {}

  async add(userEntity: UserEntity): Promise<string> {
    const result = await this.userDataSource.add(userEntity);
    
    return result.id;
  }

  async edit(userEntity: UserEntity): Promise<string> {
    const data: Prisma.UserUpdateInput = {
      id: userEntity.id,
      name: userEntity.name,
      email: userEntity.email,
      password: userEntity.password,
      updateAt: userEntity.updateAt,
    };

    const result = await this.userDataSource.edit({
      where: { id: userEntity.id },
      data,
    });

    return result.id;
  }

  async getByLogin(login: string, password: string): Promise<UserEntity> {
    const result = await this.userDataSource.get({
      email: login,
      password: password,
    });

    if (result == null) return null;

    return new UserEntity(
      result.name,
      result.email,
      '',
      result.createAt,
      result.updateAt,
      result.id,
    );
  }

  async getByEmail(email: string): Promise<UserEntity> {
    const result = await this.userDataSource.get({
      email: email,
    });

    if (result == null) return null;

    return new UserEntity(
      result.name,
      result.email,
      '',
      result.createAt,
      result.updateAt,
      result.id,
    );
  }

  async getAll(): Promise<UserEntity[]> {
    const lstResult = await this.userDataSource.getAll({});

    return lstResult.map(
      (v) => new UserEntity(v.name, v.email, '', v.createAt, v.updateAt, v.id),
    );
  }
}
