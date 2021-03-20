import { Injectable } from '@nestjs/common';
import { OrderEntity } from '../../entities/order.entity';
import { IOrderRepository } from '../../repositories/order.interface.repository';
import { IOrderGetById } from './order_get_by_id.interface';

@Injectable()
export class OrderGetById implements IOrderGetById {
  constructor(private readonly repository: IOrderRepository) {}

  call(id: string): Promise<OrderEntity> {
    return this.repository.getById(id);
  }
}
