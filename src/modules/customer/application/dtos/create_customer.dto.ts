import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty({ message: 'Nome nao pode ser em branco' })
  @ApiProperty()
  readonly name: string;

  @IsEmail({ allow_display_name: true }, { message: 'Email inválido' })
  @ApiProperty()
  readonly email: string;

  @IsString()
  @ApiProperty()
  readonly cpf: string;
}
