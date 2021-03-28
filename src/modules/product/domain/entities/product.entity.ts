import { BaseEntity } from 'src/shared/entities/base.entity';

export class ProductEntity extends BaseEntity {
  description: string;
  brand: string;
  value: number;

  constructor(
    description: string,
    brand: string,
    value: number,
    createAt: Date,
    updateAt?: Date,
    id?: string,
  ) {
    super(createAt, updateAt, id);
    this.description = description;
    this.brand = brand;
    this.value = value;
  }
}
