import { Customer, ItensOrder, Order, Prisma } from '@prisma/client';

export abstract class IOrderDatasource {
  abstract add(data: Prisma.OrderCreateInput): Promise<Order>;
  abstract edit(params: {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.OrderUpdateInput;
  }): Promise<Order>;
  abstract delete(where: Prisma.OrderWhereUniqueInput): Promise<Order>;
  abstract get(
    where?: Prisma.OrderWhereInput,
    includeItens?: boolean,
    includeCustomer?: boolean,
  ): Promise<(Order & { itens: ItensOrder[]; Customer: Customer }) | null>;
  abstract getAll(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.OrderWhereUniqueInput;
      where?: Prisma.OrderWhereInput;
      orderBy?: Prisma.OrderOrderByInput;
    },
    includeItens?: boolean,
    includeCustomer?: boolean,
  ): Promise<(Order & { itens: ItensOrder[]; Customer: Customer })[]>;
}
