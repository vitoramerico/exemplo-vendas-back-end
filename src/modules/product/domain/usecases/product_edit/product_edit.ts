import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../../entities/product.entity';
import { IProductRepository } from '../../repositories/product.interface.repository';
import { IProductEdit } from './product_edit.interface';

@Injectable()
export class ProductEdit implements IProductEdit {
  constructor(private readonly repository: IProductRepository) {}

  call(productEntity: ProductEntity): Promise<string> {
    return this.repository.edit(productEntity);
  }
}
