import { Prisma, User } from '@prisma/client';

export abstract class IUserDatasource {
    abstract add(data: Prisma.UserCreateInput): Promise<User>;
    abstract edit(params: { where: Prisma.UserWhereUniqueInput; data: Prisma.UserUpdateInput;}): Promise<User>;
    abstract delete(where: Prisma.UserWhereUniqueInput): Promise<User>;
    abstract get(where?: Prisma.UserWhereInput): Promise<User | null>;
    abstract getAll(params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.UserWhereUniqueInput;
      where?: Prisma.UserWhereInput;
      orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]>;
}
