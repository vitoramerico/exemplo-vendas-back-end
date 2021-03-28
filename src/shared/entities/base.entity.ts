import { v4 as uuidv4 } from 'uuid';

export abstract class BaseEntity {
  id: string;
  createAt: Date;
  updateAt: Date;

  constructor(createAt: Date, updateAt?: Date, id?: string) {
    this.id = id ?? uuidv4();
    this.createAt = createAt;
    this.updateAt = updateAt ?? new Date();
  }
}
