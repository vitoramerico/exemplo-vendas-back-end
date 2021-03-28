import { CustomerEntity } from 'src/modules/customer/domain/entities/customer.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { ItensOrderEntity } from './itens_order.entity';

export class OrderEntity extends BaseEntity {
  note: string;
  customerId: string;
  customer?: CustomerEntity;
  itens?: ItensOrderEntity[];

  constructor(
    note: string,
    customerId: string,
    createAt: Date,
    updateAt?: Date,
    id?: string,
    customer?: CustomerEntity,
    itens?: ItensOrderEntity[],
  ) {
    super(createAt, updateAt, id);
    this.note = note;
    this.customerId = customerId;
    this.customer = customer;
    this.itens = itens;
  }
}
