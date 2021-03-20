import { Injectable } from '@nestjs/common';
import { OrderEntity } from '../../entities/order.entity';
import { IOrderRepository } from '../../repositories/order.interface.repository';
import { IOrderGetAll } from './order_get_all.interface';

@Injectable()
export class OrderGetAll implements IOrderGetAll {
  constructor(private readonly repository: IOrderRepository) {}

  call(): Promise<OrderEntity[]> {
    return this.repository.getAll();
  }
}
