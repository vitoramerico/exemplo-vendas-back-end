import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../../entities/product.entity';
import { IProductRepository } from '../../repositories/product.interface.repository';
import { IProductAdd } from './product_add.interface';

@Injectable()
export class ProductAdd implements IProductAdd {
  constructor(private readonly repository: IProductRepository) {}

  call(productEntity: ProductEntity): Promise<String> {
    return this.repository.add(productEntity);
  }
}
