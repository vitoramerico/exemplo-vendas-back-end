import { Customer, Prisma } from '@prisma/client';

export abstract class ICustomerDatasource {
  abstract add(data: Prisma.CustomerCreateInput): Promise<Customer>;
  abstract edit(params: {
    where: Prisma.CustomerWhereUniqueInput;
    data: Prisma.CustomerUpdateInput;
  }): Promise<Customer>;
  abstract delete(where: Prisma.CustomerWhereUniqueInput): Promise<Customer>;
  abstract get(
    userWhereUniqueInput: Prisma.CustomerWhereUniqueInput,
  ): Promise<Customer | null>;
  abstract getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CustomerWhereUniqueInput;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput;
  }): Promise<Customer[]>;
}
