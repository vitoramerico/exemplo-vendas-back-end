import { Body, Controller, Get, HttpCode, Logger, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductEntity } from '../../domain/entities/product.entity';
import { IProductAdd } from '../../domain/usecases/product_add/product_add.interface';
import { IProductEdit } from '../../domain/usecases/product_edit/product_edit.interface';
import { IProductGetAll } from '../../domain/usecases/product_get_all/product_get_all.interface';
import { IProductGetById } from '../../domain/usecases/product_get_by_id/product_get_by_id.interface';
import { CreateProductDto } from '../dtos/create_product.dto';

@ApiTags('product')
@Controller('product')
export class ProductController {
  private readonly logger = new Logger(ProductController.name);

  constructor(
    private readonly productAdd: IProductAdd,
    private readonly productEdit: IProductEdit,
    private readonly productGetById: IProductGetById,
    private readonly productGetAll: IProductGetAll,
  ) {}

  @Post('add')
  @ApiOperation({ summary: 'Cadastra produto' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @HttpCode(200)
  async add(@Body() createProductDto: CreateProductDto): Promise<string> {
    const productEntity = new ProductEntity(
      createProductDto.description,
      createProductDto.brand,
      createProductDto.value,
      new Date(),
    );

    const result = await this.productAdd.call(productEntity);

    return result;
  }

  @Post('edit')
  @ApiOperation({ summary: 'Altera produto' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @HttpCode(200)
  async edit(@Body() createProductDto: CreateProductDto): Promise<string> {
    const productEntity = new ProductEntity(
      createProductDto.description,
      createProductDto.brand,
      createProductDto.value,
      new Date(),
      new Date(),
      createProductDto.id,
    );

    const result = await this.productEdit.call(productEntity);

    return result;
  }

  @Get('getAll')
  @ApiOperation({ summary: 'Buscar todos os produtos' })
  @ApiResponse({
    status: 200,
    description: 'Sucesso',
  })
  async getAll(): Promise<ProductEntity[]> {
    return this.productGetAll.call();
  }

  @Get('getById')
  @ApiOperation({ summary: 'Busca produto pelo codigo' })
  @ApiResponse({
    status: 200,
    description: 'Sucesso',
  })
  async getById(@Query('id') id: string): Promise<ProductEntity> {
    return this.productGetById.call(id);
  }
}
