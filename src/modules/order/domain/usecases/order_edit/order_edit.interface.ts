import { OrderEntity } from '../../entities/order.entity';

export abstract class IOrderEdit {
  abstract call(orderEntity: OrderEntity): Promise<string>;
}
