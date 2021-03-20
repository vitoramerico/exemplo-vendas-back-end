import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { IUserDatasource } from '../../infra/datasource/user.interface.datasource';

@Injectable()
export class UserDataSource implements IUserDatasource {
  constructor(private prisma: PrismaService) {}

  add(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  edit(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;

    return this.prisma.user.update({ data, where });
  }

  delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where });
  }

  get(where?: Prisma.UserWhereInput): Promise<User | null> {
    return this.prisma.user.findFirst({ where: where });
  }

  getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
