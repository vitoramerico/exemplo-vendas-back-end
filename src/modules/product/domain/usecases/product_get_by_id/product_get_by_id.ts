import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductEntity } from '../../entities/product.entity';
import { IProductRepository } from '../../repositories/product.interface.repository';
import { IProductGetById } from './product_get_by_id.interface';

@Injectable()
export class ProductGetById implements IProductGetById {
  constructor(private readonly repository: IProductRepository) {}

  async call(id: string): Promise<ProductEntity> {
    const result = await this.repository.getById(id);

    if (result == null) throw new HttpException('Produto não encontrado', HttpStatus.BAD_REQUEST);

    return result;
  }
}
