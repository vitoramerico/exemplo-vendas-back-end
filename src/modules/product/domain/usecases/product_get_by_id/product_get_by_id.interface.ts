import { ProductEntity } from "../../entities/product.entity";

export abstract class IProductGetById {
  abstract call(id: string): Promise<ProductEntity>;
}
