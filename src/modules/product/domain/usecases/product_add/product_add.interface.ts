import { ProductEntity } from '../../entities/product.entity';

export abstract class IProductAdd {
  abstract call(productEntity: ProductEntity): Promise<String>;
}
