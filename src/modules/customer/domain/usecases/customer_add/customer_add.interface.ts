import { CustomerEntity } from '../../entities/customer.entity';

export abstract class ICustomerAdd {
  abstract call(customerEntity: CustomerEntity): Promise<string>;
}
