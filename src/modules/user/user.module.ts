import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserController } from './application/controller/user_controller';
import { IUserRepository } from './domain/repositories/user.interface.repository';
import { UserAdd } from './domain/usecases/user_add/user_add';
import { IUserAdd } from './domain/usecases/user_add/user_add.interface';
import { UserGetAll } from './domain/usecases/user_get_all/user_get_all';
import { IUserGetAll } from './domain/usecases/user_get_all/user_get_all.interface';
import { UserLogin } from './domain/usecases/user_login/user_login';
import { IUserLogin } from './domain/usecases/user_login/user_login.interface';
import { UserDataSource } from './external/datasource/user.datasource';
import { IUserDatasource } from './infra/datasource/user.interface.datasource';
import { UserRepository } from './infra/repositories/user.repository';

@Module({
  controllers: [UserController],
  providers: [
    PrismaService,
    {
      provide: IUserDatasource,
      useClass: UserDataSource,
    },
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
    {
      provide: IUserAdd,
      useClass: UserAdd,
    },
    {
      provide: IUserLogin,
      useClass: UserLogin,
    },
    {
      provide: IUserGetAll,
      useClass: UserGetAll,
    },
  ],
})
export class UserModule {}
