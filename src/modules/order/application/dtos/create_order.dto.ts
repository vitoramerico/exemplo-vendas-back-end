import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty
} from 'class-validator';
import { CreateItensOrderDto } from './create_itens_order.dto';

export class CreateOrderDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly note: string;

  @IsNotEmpty({ message: 'Id do cliente nao pode ser em branco' })
  @ApiProperty()
  readonly customerId: string;

  @IsArray({ message: 'Deve ser um array' })
  @ArrayMinSize(1, { message: 'Deve conter pelo menos 1 item' })
  @ApiProperty({
    type: [CreateItensOrderDto]
  })
  readonly itens: CreateItensOrderDto[];
}
