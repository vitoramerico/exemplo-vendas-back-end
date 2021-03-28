import { BaseEntity } from 'src/shared/entities/base.entity';

export class CustomerEntity extends BaseEntity {
  name: string;
  email: string;
  cpf: string;

  constructor(
    name: string,
    email: string,
    cpf: string,
    createAt: Date,
    updateAt?: Date,
    id?: string,
  ) {
    super(createAt, updateAt, id);
    this.name = name;
    this.email = email;
    this.cpf = cpf;
  }
}
