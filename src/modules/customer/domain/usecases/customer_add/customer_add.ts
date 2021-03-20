import { Injectable } from '@nestjs/common';
import { CustomerEntity } from '../../entities/customer.entity';
import { ICustomerRepository } from '../../repositories/customer.interface.repository';
import { ICustomerAdd } from './customer_add.interface';

@Injectable()
export class CustomerAdd implements ICustomerAdd {
  constructor(private readonly repository: ICustomerRepository) {}

  call(customerEntity: CustomerEntity): Promise<string> {
    return this.repository.add(customerEntity);
  }
}
