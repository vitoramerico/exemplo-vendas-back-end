import { Injectable, Logger } from '@nestjs/common';
import { Customer } from '@prisma/client';
import { CustomerEntity } from '../../domain/entities/customer.entity';
import { ICustomerRepository } from '../../domain/repositories/customer.interface.repository';
import { ICustomerDatasource } from '../datasources/customer.datasource.interface';


@Injectable()
export class CustomerRepository implements ICustomerRepository {
  private readonly logger = new Logger('teste');

  constructor(private customerDataSource: ICustomerDatasource) {}

  async add(customerEntity: CustomerEntity): Promise<string> {
    //this.logger.log(customerEntity.id);

    const data: Customer = {
      id: customerEntity.id,
      name: customerEntity.name,
      email: customerEntity.email,
      cpf: customerEntity.cpf,
      createAt: customerEntity.createAt,
      updateAt: customerEntity.updateAt,
    };

    const result = await this.customerDataSource.add(data);

    return result.id;
  }

  async edit(customerEntity: CustomerEntity): Promise<void> {
    this.logger.log(customerEntity.id);

    const data: Customer = {
      id: customerEntity.id,
      name: customerEntity.name,
      email: customerEntity.email,
      cpf: customerEntity.cpf,
      createAt: customerEntity.createAt,
      updateAt: customerEntity.updateAt,
    };

    await this.customerDataSource.edit({
      where: { id: customerEntity.id },
      data,
    });
  }

  async getByCpf(cpf: string): Promise<CustomerEntity> {
    const result = await this.customerDataSource.get({ cpf: cpf });

    return new CustomerEntity(
      result.name,
      result.email,
      result.cpf,
      result.createAt,
      result.id,
    );
  }

  async getByEmail(email: string): Promise<Array<CustomerEntity>> {
    const lstResult = await this.customerDataSource.getAll({
      where: { email: email },
    });

    return lstResult.map(
      (v) => new CustomerEntity(v.name, v.email, v.cpf, v.createAt, v.id),
    );
  }

  async getAll(): Promise<Array<CustomerEntity>> {
    const lstResult = await this.customerDataSource.getAll({});

    return lstResult.map(
      (v) => new CustomerEntity(v.name, v.email, v.cpf, v.createAt, v.id),
    );
  }
}
