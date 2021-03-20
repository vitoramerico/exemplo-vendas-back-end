import { ProductEntity } from '../entities/product.entity';

export abstract class IProductRepository {
  abstract add(productEntity: ProductEntity): Promise<string>;
  abstract getById(id: string): Promise<ProductEntity>;
  abstract getAll(): Promise<ProductEntity[]>;
}
