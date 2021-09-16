import { Injectable } from '@nestjs/common';
import { Prisma, Order, Customer, ItensOrder } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { IOrderDatasource } from '../../infra/datasource/order.interface.datasource';

@Injectable()
export class OrderDataSource implements IOrderDatasource {
  constructor(private prisma: PrismaService) {}

  add(data: Prisma.OrderCreateInput): Promise<Order> {
    return this.prisma.order.create({ data });
  }

  edit(params: {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.OrderUpdateInput;
  }): Promise<Order> {
    const { where, data } = params;

    return this.prisma.order.update({ data, where });
  }

  delete(where: Prisma.OrderWhereUniqueInput): Promise<Order> {
    return this.prisma.order.delete({ where });
  }

  get(
    where?: Prisma.OrderWhereInput,
    includeItens = false,
    includeCustomer = false,
  ): Promise<(Order & { itens: ItensOrder[]; customer: Customer }) | null> {
    return this.prisma.order.findFirst({
      where: where,
      include: { itens: includeItens ? {include: {product: true}} : false, customer: includeCustomer },
    });
  }

  async getAll(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.OrderWhereUniqueInput;
      where?: Prisma.OrderWhereInput;
      orderBy?: Prisma.OrderOrderByWithRelationInput;
    },
    includeItens = false,
    includeCustomer = false,
  ): Promise<(Order & { itens: ItensOrder[]; customer: Customer })[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.order.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: { itens: includeItens, customer: includeCustomer },
    });
  }
}
