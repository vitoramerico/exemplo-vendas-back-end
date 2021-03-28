import { CustomerEntity } from '../entities/customer.entity';

export abstract class ICustomerRepository {
  abstract add(customerEntity: CustomerEntity): Promise<string>;
  abstract edit(customerEntity: CustomerEntity): Promise<string>;
  abstract getByCpf(cpf: string): Promise<CustomerEntity>;
  abstract getByEmail(email: string): Promise<Array<CustomerEntity>>;
  abstract getById(id: string): Promise<CustomerEntity>;
  abstract getAll(): Promise<Array<CustomerEntity>>;
}
