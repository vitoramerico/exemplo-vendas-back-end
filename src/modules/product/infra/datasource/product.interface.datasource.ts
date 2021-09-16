import { Prisma, Product } from '@prisma/client';

export abstract class IProductDatasource {
    abstract add(data: Prisma.ProductCreateInput): Promise<Product>;
    abstract edit(params: { where: Prisma.ProductWhereUniqueInput; data: Prisma.ProductUpdateInput;}): Promise<Product>;
    abstract delete(where: Prisma.ProductWhereUniqueInput): Promise<Product>;
    abstract get(where?: Prisma.ProductWhereInput): Promise<Product | null>;
    abstract getAll(params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.ProductWhereUniqueInput;
      where?: Prisma.ProductWhereInput;
      orderBy?: Prisma.ProductOrderByWithRelationInput;
    }): Promise<Product[]>;
}
