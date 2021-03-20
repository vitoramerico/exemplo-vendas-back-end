import { OrderEntity } from '../../entities/order.entity';

export abstract class IOrderGetAll {
  abstract call(): Promise<OrderEntity[]>;
}
