import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CustomerEntity } from '../../entities/customer.entity';
import { ICustomerRepository } from '../../repositories/customer.interface.repository';
import { ICustomerAdd } from './customer_add.interface';

@Injectable()
export class CustomerAdd implements ICustomerAdd {
  constructor(private readonly repository: ICustomerRepository) {}

  async call(customerEntity: CustomerEntity): Promise<string> {
    var result = await this.repository.getByCpf(customerEntity.cpf);

    if (result != null) throw new HttpException('Cpf já cadastrado', HttpStatus.BAD_REQUEST);

    return this.repository.add(customerEntity);
  }
}
