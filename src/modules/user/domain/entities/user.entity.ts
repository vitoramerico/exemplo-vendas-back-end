import { BaseEntity } from 'src/shared/entities/base.entity';

export class UserEntity extends BaseEntity {
  name: string;
  email: string;
  password: string;

  constructor(
    name: string,
    email: string,
    password: string,
    createAt: Date,
    id?: string,
  ) {
    super(createAt, id);
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
