import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerEntity } from '../../domain/entities/customer.entity';
import { ICustomerAdd } from '../../domain/usecases/customer_add/customer_add.interface';
import { ICustomerGetAll } from '../../domain/usecases/customer_get_all/customer_get_all.interface';
import { CreateCustomerDto } from '../dtos/create_customer.dto';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerAdd: ICustomerAdd,
    private readonly customerGetAll: ICustomerGetAll,
  ) {}

  @Post('add')
  @ApiOperation({ summary: 'Adicionar cliente' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @HttpCode(200)
  async add(@Body() createCustomerDto: CreateCustomerDto): Promise<String> {
    const customer = new CustomerEntity(
      createCustomerDto.name,
      createCustomerDto.email,
      createCustomerDto.cpf,
      new Date(),
    );

    const result = await this.customerAdd.call(customer);

    return result;
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
