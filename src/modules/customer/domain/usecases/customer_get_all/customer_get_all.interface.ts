import { CustomerEntity } from '../../entities/customer.entity';

export abstract class ICustomerGetAll {
  abstract call(): Promise<Array<CustomerEntity>>;
}
