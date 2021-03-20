import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { IProductDatasource } from '../../infra/datasource/product.interface.datasource';

@Injectable()
export class ProductDataSource implements IProductDatasource {
  constructor(private prisma: PrismaService) {}

  add(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  edit(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }): Promise<Product> {
    const { where, data } = params;

    return this.prisma.product.update({ data, where });
  }

  delete(where: Prisma.ProductWhereUniqueInput): Promise<Product> {
    return this.prisma.product.delete({ where });
  }

  get(where?: Prisma.ProductWhereInput): Promise<Product | null> {
    return this.prisma.product.findFirst({ where: where });
  }

  getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByInput;
  }): Promise<Product[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.product.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
