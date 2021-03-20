import { Injectable } from '@nestjs/common';
import { CustomerEntity } from '../../entities/customer.entity';
import { ICustomerRepository } from '../../repositories/customer.interface.repository';
import { ICustomerGetAll } from './customer_get_all.interface';


@Injectable()
export class CustomerGetAll implements ICustomerGetAll {
  constructor(private readonly repository: ICustomerRepository) {}

  async call(): Promise<Array<CustomerEntity>> {
    return this.repository.getAll();
  }
}
