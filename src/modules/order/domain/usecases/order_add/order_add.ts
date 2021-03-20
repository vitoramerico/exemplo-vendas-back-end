import { Injectable } from '@nestjs/common';
import { OrderEntity } from '../../entities/order.entity';
import { IOrderRepository } from '../../repositories/order.interface.repository';
import { IOrderAdd } from './order_add.interface';

@Injectable()
export class OrderAdd implements IOrderAdd {
  constructor(private readonly repository: IOrderRepository) {}

  call(orderEntity: OrderEntity): Promise<String> {
    return this.repository.add(orderEntity);
  }
}
