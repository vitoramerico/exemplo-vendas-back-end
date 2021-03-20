import { ApiProperty } from '@nestjs/swagger';
import { IsCurrency, IsNotEmpty, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Nome nao pode ser em branco' })
  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly brand: string;

  @Min(0.1, { message: 'Valor deve ser maior que 0' })
  @ApiProperty()
  readonly value: number;
}
