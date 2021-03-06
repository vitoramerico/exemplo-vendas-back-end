import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProductEntity } from '../../domain/entities/product.entity';
import { IProductRepository } from '../../domain/repositories/product.interface.repository';
import { IProductDatasource } from '../datasource/product.interface.datasource';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(private readonly productDataSource: IProductDatasource) {}

  async add(productEntity: ProductEntity): Promise<string> {
    const result = await this.productDataSource.add(productEntity);

    return result.id;
  }

  async edit(productEntity: ProductEntity): Promise<string> {
    const data: Prisma.ProductUpdateInput = {
      id: productEntity.id,
      description: productEntity.description,
      brand: productEntity.brand,
      value: productEntity.value,
      updateAt: productEntity.updateAt,
    };

    const result = await this.productDataSource.edit({
      where: { id: productEntity.id },
      data,
    });

    return result.id;
  }

  async getById(id: string): Promise<ProductEntity> {
    const result = await this.productDataSource.get({ id: id });

    if (result == null) return null;

    return new ProductEntity(
      result.description,
      result.brand,
      result.value,
      result.createAt,
      result.updateAt,
      result.id,
    );
  }

  async getAll(): Promise<ProductEntity[]> {
    const lstResult = await this.productDataSource.getAll({});

    return lstResult.map(
      (v) =>
        new ProductEntity(
          v.description,
          v.brand,
          v.value,
          v.createAt,
          v.updateAt,
          v.id,
        ),
    );
  }
}
