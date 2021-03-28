import { ProductEntity } from 'src/modules/product/domain/entities/product.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';

export class ItensOrderEntity extends BaseEntity {
  amount: number;
  value: number;
  total: number;
  produtcId: string;
  orderId?: string;
  product?: ProductEntity;

  constructor(
    amount: number,
    value: number,
    total: number,
    produtcId: string,
    createAt: Date,
    updateAt?: Date,
    orderId?: string,
    id?: string,
    product?: ProductEntity,
  ) {
    super(createAt, updateAt, id);
    this.amount = amount;
    this.value = value;
    this.total = total;
    this.produtcId = produtcId;
    this.orderId = orderId;
    this.product = product;
  }
}
