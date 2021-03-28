import { CustomerEntity } from '../../entities/customer.entity';

export abstract class ICustomerEdit {
  abstract call(customerEntity: CustomerEntity): Promise<string>;
}
