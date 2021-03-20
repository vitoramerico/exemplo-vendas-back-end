import { OrderEntity } from '../entities/order.entity';

export abstract class IOrderRepository {
  abstract add(orderEntity: OrderEntity): Promise<string>;
  abstract getById(id: string): Promise<OrderEntity>;
  abstract getAll(): Promise<OrderEntity[]>;
}
