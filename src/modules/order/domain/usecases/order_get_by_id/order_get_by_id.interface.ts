import { OrderEntity } from '../../entities/order.entity';

export abstract class IOrderGetById {
  abstract call(id: string): Promise<OrderEntity>;
}
