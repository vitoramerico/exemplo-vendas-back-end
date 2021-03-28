import { CustomerEntity } from "../../entities/customer.entity";

export abstract class ICustomerGetById {
  abstract call(id: string): Promise<CustomerEntity>;
}
