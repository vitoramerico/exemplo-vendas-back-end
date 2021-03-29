import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrderEntity } from '../../domain/entities/order.entity';
import { IOrderRepository } from '../../domain/repositories/order.interface.repository';
import { IOrderDatasource } from '../datasource/order.interface.datasource';

@Injectable()
export class OrderRepository implements IOrderRepository {
  constructor(private readonly orderDataSource: IOrderDatasource) {}

  async add(orderEntity: OrderEntity): Promise<string> {
    const data: Prisma.OrderCreateInput = {
      id: orderEntity.id,
      note: orderEntity.note,
      customer: {
        connect: { id: orderEntity.customerId },
      },
      itens: {
        create: orderEntity.itens,
      },
      createAt: orderEntity.createAt,
      updateAt: orderEntity.updateAt,
    };

    const result = await this.orderDataSource.add(data);

    return result.id;
  }

  async edit(orderEntity: OrderEntity): Promise<string> {
    const data: Prisma.OrderUpdateInput = {
      id: orderEntity.id,
      note: orderEntity.note,
      customer: {
        connect: { id: orderEntity.customerId },
      },
      itens: {
        deleteMany: {},
        create: orderEntity.itens,
      },
      updateAt: orderEntity.updateAt,
    };

    const result = await this.orderDataSource.edit({
      where: { id: orderEntity.id },
      data,
    });

    return result.id;
  }

  async getById(id: string): Promise<OrderEntity> {
    const result = await this.orderDataSource.get({ id: id }, true, true);

    if (result == null) return null;

    return new OrderEntity(
      result.note,
      result.customerId,
      result.createAt,
      result.updateAt,
      result.id,
      result.customer,
      result.itens,
    );
  }

  async getAll(): Promise<OrderEntity[]> {
    const lstResult = await this.orderDataSource.getAll({}, true, true);

    return lstResult.map(
      (v) =>
        new OrderEntity(
          v.note,
          v.customerId,
          v.createAt,
          v.updateAt,
          v.id,
          v.customer,
          v.itens,
        ),
    );
  }
}
