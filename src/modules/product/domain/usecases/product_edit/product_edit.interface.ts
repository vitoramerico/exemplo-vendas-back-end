import { ProductEntity } from '../../entities/product.entity';

export abstract class IProductEdit {
  abstract call(productEntity: ProductEntity): Promise<string>;
}
