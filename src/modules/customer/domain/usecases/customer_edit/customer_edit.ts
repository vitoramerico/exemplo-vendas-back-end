import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CustomerEntity } from '../../entities/customer.entity';
import { ICustomerRepository } from '../../repositories/customer.interface.repository';
import { ICustomerEdit } from './customer_edit.interface';

@Injectable()
export class CustomerEdit implements ICustomerEdit {
  constructor(private readonly repository: ICustomerRepository) {}

  async call(customerEntity: CustomerEntity): Promise<string> {
    var result = await this.repository.getByCpf(customerEntity.cpf);

    if (result != null && result.id != customerEntity.id)
      throw new HttpException('Cpf já cadastrado', HttpStatus.BAD_REQUEST);
    
    return this.repository.edit(customerEntity);
  }
}
