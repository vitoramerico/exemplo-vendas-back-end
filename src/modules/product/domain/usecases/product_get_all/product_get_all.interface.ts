import { ProductEntity } from '../../entities/product.entity';

export abstract class IProductGetAll {
  abstract call(): Promise<ProductEntity[]>;
}
