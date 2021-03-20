import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CustomerController } from './application/controllers/customer_controller';
import { ICustomerRepository } from './domain/repositories/customer.interface.repository';
import { CustomerAdd } from './domain/usecases/customer_add/customer_add';
import { ICustomerAdd } from './domain/usecases/customer_add/customer_add.interface';
import { CustomerGetAll } from './domain/usecases/customer_get_all/customer_get_all';
import { ICustomerGetAll } from './domain/usecases/customer_get_all/customer_get_all.interface';
import { CustomerDataSource } from './external/datasource/customer.datasource';
import { ICustomerDatasource } from './infra/datasources/customer.datasource.interface';
import { CustomerRepository } from './infra/repositories/customer.repository';


@Module({
  controllers: [CustomerController],
  providers: [
    PrismaService,
    {
      provide: ICustomerDatasource,
      useClass: CustomerDataSource,
    },
    {
      provide: ICustomerRepository,
      useClass: CustomerRepository,
    },
    {
      provide: ICustomerAdd,
      useClass: CustomerAdd,
    },
    {
      provide: ICustomerGetAll,
      useClass: CustomerGetAll,
    },
  ],
})
export class CustomerModule {}
