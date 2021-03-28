import { Injectable, Logger } from '@nestjs/common';
import { Customer, Prisma } from '@prisma/client';
import { CustomerEntity } from '../../domain/entities/customer.entity';
import { ICustomerRepository } from '../../domain/repositories/customer.interface.repository';
import { ICustomerDatasource } from '../datasources/customer.datasource.interface';

@Injectable()
export class CustomerRepository implements ICustomerRepository {
  private readonly logger = new Logger('teste');

  constructor(private customerDataSource: ICustomerDatasource) {}

  async add(customerEntity: CustomerEntity): Promise<string> {
    const result = await this.customerDataSource.add(customerEntity);

    return result.id;
  }

  async edit(customerEntity: CustomerEntity): Promise<string> {
    const data: Prisma.CustomerUpdateInput = {
      id: customerEntity.id,
      name: customerEntity.name,
      email: customerEntity.email,
      cpf: customerEntity.cpf,
      updateAt: customerEntity.updateAt,
    };

    const result = await this.customerDataSource.edit({
      where: { id: customerEntity.id },
      data,
    });

    return result.id;
  }

  async getById(id: string): Promise<CustomerEntity | null> {
    const result = await this.customerDataSource.get({ id: id });

    if (result == null) return null;

    return new CustomerEntity(
      result.name,
      result.email,
      result.cpf,
      result.createAt,
      result.updateAt,
      result.id,
    );
  }

  async getByCpf(cpf: string): Promise<CustomerEntity | null> {
    const result = await this.customerDataSource.get({ cpf: cpf });

    if (result == null) return null;

    return new CustomerEntity(
      result.name,
      result.email,
      result.cpf,
      result.createAt,
      result.updateAt,
      result.id,
    );
  }

  async getByEmail(email: string): Promise<Array<CustomerEntity>> {
    const lstResult = await this.customerDataSource.getAll({
      where: { email: email },
    });

    return lstResult.map(
      (v) =>
        new CustomerEntity(
          v.name,
          v.email,
          v.cpf,
          v.createAt,
          v.updateAt,
          v.id,
        ),
    );
  }

  async getAll(): Promise<Array<CustomerEntity>> {
    const lstResult = await this.customerDataSource.getAll({});

    return lstResult.map(
      (v) =>
        new CustomerEntity(
          v.name,
          v.email,
          v.cpf,
          v.createAt,
          v.updateAt,
          v.id,
        ),
    );
  }
}
