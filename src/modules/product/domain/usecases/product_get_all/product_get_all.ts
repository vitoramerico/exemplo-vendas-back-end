import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../../entities/product.entity';
import { IProductRepository } from '../../repositories/product.interface.repository';
import { IProductGetAll } from './product_get_all.interface';

@Injectable()
export class ProductGetAll implements IProductGetAll {
  constructor(private readonly repository: IProductRepository) {}

  call(): Promise<ProductEntity[]> {
    return this.repository.getAll();
  }
}
