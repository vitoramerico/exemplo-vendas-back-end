import { Get, Query } from '@nestjs/common';
import { Body, Controller, HttpCode, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from '../../domain/entities/user.entity';
import { IUserAdd } from '../../domain/usecases/user_add/user_add.interface';
import { IUserGetAll } from '../../domain/usecases/user_get_all/user_get_all.interface';
import { IUserLogin } from '../../domain/usecases/user_login/user_login.interface';
import { CreateUserDto } from '../dtos/create_user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(
    private readonly userAdd: IUserAdd,
    private readonly userLogin: IUserLogin,
    private readonly userGetAll: IUserGetAll,
  ) {}

  @Post('add')
  @ApiOperation({ summary: 'Cria login do usuario' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @HttpCode(200)
  async add(@Body() createUserDto: CreateUserDto): Promise<String> {
    const userEntity = new UserEntity(
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
      new Date(),
    );

    const result = await this.userAdd.call(userEntity);

    return result;
  }

  @Get('login')
  @ApiOperation({ summary: 'Busca usuario pelo login e senha' })
  @ApiResponse({
    status: 200,
    description: 'Sucesso',
  })
  async login(
    @Query('login') login: String,
    @Query('senha') senha: String,
  ): Promise<UserEntity> {
    this.logger.log(`login: ${login}, senha: ${senha}`);
    return this.userLogin.call(login, senha);
  }

  @Get('getAll')
  @ApiOperation({ summary: 'Buscar todos os usuarios' })
  @ApiResponse({
    status: 200,
    description: 'Sucesso',
  })
  async getAll(): Promise<UserEntity[]> {
    return this.userGetAll.call();
  }
}
