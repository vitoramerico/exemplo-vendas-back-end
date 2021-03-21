import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateItensOrderDto {
  @IsNotEmpty({ message: 'Quantidade nao pode ser em branco' })
  @ApiProperty()
  readonly amount: number;
  @IsNotEmpty({ message: 'Valor nao pode ser em branco' })
  @ApiProperty()
  readonly value: number;
  @IsNotEmpty({ message: 'Total nao pode ser em branco' })
  @ApiProperty()
  readonly total: number;
  @IsNotEmpty({ message: 'Id produto nao pode ser em branco' })
  @ApiProperty()
  readonly produtcId: string;
}
