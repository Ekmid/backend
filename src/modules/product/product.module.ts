import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from 'src/models/products.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryService } from '../categories/category.service';
import { CategoryModule } from '../categories/category.module';
import { JwtService } from '@nestjs/jwt';
import { RolesGuard } from 'src/guards/roles-guard';

@Module({
  imports: [
    SequelizeModule.forFeature([Product]),
    CategoryModule
  ],
  providers: [
    ProductService,
    RolesGuard,
    JwtService
  ],
  controllers: [ProductController],
  exports: [ProductService]
})
export class ProductModule {}
