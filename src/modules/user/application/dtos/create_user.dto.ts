import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  readonly id: string;

  @IsNotEmpty({ message: 'Nome nao pode ser em branco' })
  @ApiProperty()
  readonly name: string;

  @IsEmail({ allow_display_name: true }, { message: 'Email inválido' })
  @ApiProperty()
  readonly email: string;

  @MinLength(6, {
    message: 'Senha nao deve ser menor que 6 caracteres',
  })
  @MaxLength(20, {
    message: 'Senha nao deve ser maior que 20 caracteres',
  })
  @ApiProperty()
  readonly password: string;
}
