import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductController } from './application/controller/product_controller';
import { IProductRepository } from './domain/repositories/product.interface.repository';
import { ProductAdd } from './domain/usecases/product_add/product_add';
import { IProductAdd } from './domain/usecases/product_add/product_add.interface';
import { ProductEdit } from './domain/usecases/product_edit/product_edit';
import { IProductEdit } from './domain/usecases/product_edit/product_edit.interface';
import { ProductGetAll } from './domain/usecases/product_get_all/product_get_all';
import { IProductGetAll } from './domain/usecases/product_get_all/product_get_all.interface';
import { ProductGetById } from './domain/usecases/product_get_by_id/product_get_by_id';
import { IProductGetById } from './domain/usecases/product_get_by_id/product_get_by_id.interface';
import { ProductDataSource } from './external/datasource/product.datasource';
import { IProductDatasource } from './infra/datasource/product.interface.datasource';
import { ProductRepository } from './infra/repositories/product.repository';

@Module({
  controllers: [ProductController],
  providers: [
    PrismaService,
    {
      provide: IProductDatasource,
      useClass: ProductDataSource,
    },
    {
      provide: IProductRepository,
      useClass: ProductRepository,
    },
    {
      provide: IProductAdd,
      useClass: ProductAdd,
    },
    {
      provide: IProductEdit,
      useClass: ProductEdit,
    },
    {
      provide: IProductGetById,
      useClass: ProductGetById,
    },
    {
      provide: IProductGetAll,
      useClass: ProductGetAll,
    },
  ],
})
export class ProductModule {}
