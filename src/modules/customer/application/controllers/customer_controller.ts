import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerEntity } from '../../domain/entities/customer.entity';
import { ICustomerAdd } from '../../domain/usecases/customer_add/customer_add.interface';
import { ICustomerEdit } from '../../domain/usecases/customer_edit/customer_edit.interface';
import { ICustomerGetAll } from '../../domain/usecases/customer_get_all/customer_get_all.interface';
import { ICustomerGetById } from '../../domain/usecases/customer_get_by_id/customer_get_by_id.interface';
import { CreateCustomerDto } from '../dtos/create_customer.dto';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerAdd: ICustomerAdd,
    private readonly customerEdit: ICustomerEdit,
    private readonly customerGetAll: ICustomerGetAll,
    private readonly customerGetById: ICustomerGetById,
  ) {}

  @Post('add')
  @ApiOperation({ summary: 'Adiciona cliente' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @HttpCode(200)
  async add(@Body() createCustomerDto: CreateCustomerDto): Promise<string> {
    const customer = new CustomerEntity(
      createCustomerDto.name,
      createCustomerDto.email,
      createCustomerDto.cpf,
      new Date(),
    );

    const result = await this.customerAdd.call(customer);

    return result;
  }

  @Post('edit')
  @ApiOperation({ summary: 'Altera cliente' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @HttpCode(200)
  async edit(@Body() createCustomerDto: CreateCustomerDto): Promise<string> {
    const customer = new CustomerEntity(
      createCustomerDto.name,
      createCustomerDto.email,
      createCustomerDto.cpf,
      new Date(),
      new Date(),
      createCustomerDto.id,
    );

    const result = await this.customerEdit.call(customer);

    return result;
  }

  @Get('getById')
  @ApiOperation({ summary: 'Busca cliente pelo codigo' })
  @ApiResponse({
    status: 200,
    description: 'Sucesso',
  })
  async getById(@Query('id') id: string): Promise<CustomerEntity> {
    return this.customerGetById.call(id);
  }

  @Get('getAll')
  @ApiOperation({ summary: 'Buscar todos os clientes' })
  @ApiResponse({
    status: 200,
    description: 'Sucesso',
  })
  async getAll(): Promise<CustomerEntity[]> {
    return this.customerGetAll.call();
  }
}
