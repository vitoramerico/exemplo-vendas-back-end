import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { OrderController } from './application/controller/order_controller';
import { IOrderRepository } from './domain/repositories/order.interface.repository';
import { OrderAdd } from './domain/usecases/order_add/order_add';
import { IOrderAdd } from './domain/usecases/order_add/order_add.interface';
import { OrderEdit } from './domain/usecases/order_edit/order_edit';
import { IOrderEdit } from './domain/usecases/order_edit/order_edit.interface';
import { OrderGetAll } from './domain/usecases/order_get_all/order_get_all';
import { IOrderGetAll } from './domain/usecases/order_get_all/order_get_all.interface';
import { OrderGetById } from './domain/usecases/order_get_by_id/order_get_by_id';
import { IOrderGetById } from './domain/usecases/order_get_by_id/order_get_by_id.interface';
import { OrderDataSource } from './external/datasource/order.datasource';
import { IOrderDatasource } from './infra/datasource/order.interface.datasource';
import { OrderRepository } from './infra/repositories/order.repository';

@Module({
  controllers: [OrderController],
  providers: [
    PrismaService,
    {
      provide: IOrderDatasource,
      useClass: OrderDataSource,
    },
    {
      provide: IOrderRepository,
      useClass: OrderRepository,
    },
    {
      provide: IOrderAdd,
      useClass: OrderAdd,
    },
    {
      provide: IOrderEdit,
      useClass: OrderEdit,
    },
    {
      provide: IOrderGetById,
      useClass: OrderGetById,
    },
    {
      provide: IOrderGetAll,
      useClass: OrderGetAll,
    },
  ],
})
export class OrderModule {}
