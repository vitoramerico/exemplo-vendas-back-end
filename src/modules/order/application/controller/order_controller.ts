import {
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderEntity } from '../../domain/entities/order.entity';
import { IOrderAdd } from '../../domain/usecases/order_add/order_add.interface';
import { IOrderGetAll } from '../../domain/usecases/order_get_all/order_get_all.interface';
import { IOrderGetById } from '../../domain/usecases/order_get_by_id/order_get_by_id.interface';
import { CreateOrderDto } from '../dtos/create_order.dto';

@ApiTags('order')
@Controller('order')
export class OrderController {
  private readonly logger = new Logger(OrderController.name);

  constructor(
    private readonly orderAdd: IOrderAdd,
    private readonly orderGetAll: IOrderGetAll,
    private readonly orderGetById: IOrderGetById,
  ) {}

  @Post('add')
  @ApiOperation({ summary: 'Realiza venda' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @HttpCode(200)
  async add(@Body() createProductDto: CreateOrderDto): Promise<String> {
    const orderEntity = new OrderEntity(
      createProductDto.note,
      createProductDto.customerId,
      new Date(),
    );

    const result = await this.orderAdd.call(orderEntity);

    return result;
  }

  @Get('getById')
  @ApiOperation({ summary: 'Buscar uma venda pelo codigo' })
  @ApiResponse({
    status: 200,
    description: 'Sucesso',
  })
  async getById(@Query('id') id: string): Promise<OrderEntity> {
    return this.orderGetById.call(id);
  }

  @Get('getAll')
  @ApiOperation({ summary: 'Buscar todos as vendas' })
  @ApiResponse({
    status: 200,
    description: 'Sucesso',
  })
  async getAll(): Promise<OrderEntity[]> {
    return this.orderGetAll.call();
  }
}
