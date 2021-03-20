import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty({ message: 'Nome nao pode ser em branco' })
  @ApiProperty()
  readonly note: string;

  @IsNotEmpty({ message: 'Id do cliente nao pode ser em branco' })
  @ApiProperty()
  readonly customerId: string;
}
