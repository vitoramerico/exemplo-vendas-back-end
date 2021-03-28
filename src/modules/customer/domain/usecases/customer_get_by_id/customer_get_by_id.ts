import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CustomerEntity } from '../../entities/customer.entity';
import { ICustomerRepository } from '../../repositories/customer.interface.repository';
import { ICustomerGetById } from './customer_get_by_id.interface';

@Injectable()
export class CustomerGetById implements ICustomerGetById {
  constructor(private readonly repository: ICustomerRepository) {}

  async call(id: string): Promise<CustomerEntity> {
    const result = await this.repository.getById(id);

    if (result == null) throw new HttpException('Cliente não encontrado', HttpStatus.BAD_REQUEST);

    return result;
  }
}
