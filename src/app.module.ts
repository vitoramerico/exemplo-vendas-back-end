import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { OrderModule } from './modules/order/order.module';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [CustomerModule, UserModule, ProductModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
