import { OrderEntity } from '../../entities/order.entity';

export abstract class IOrderAdd {
  abstract call(orderEntity: OrderEntity): Promise<String>;
}
