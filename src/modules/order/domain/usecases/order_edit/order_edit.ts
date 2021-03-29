import { Injectable } from '@nestjs/common';
import { OrderEntity } from '../../entities/order.entity';
import { IOrderRepository } from '../../repositories/order.interface.repository';
import { IOrderEdit } from './order_edit.interface';

@Injectable()
export class OrderEdit implements IOrderEdit {
  constructor(private readonly repository: IOrderRepository) {}

  call(orderEntity: OrderEntity): Promise<string> {
    return this.repository.edit(orderEntity);
  }
}
