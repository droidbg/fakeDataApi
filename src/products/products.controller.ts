import { Controller, Get } from '@nestjs/common';
import { ProductsService, Product } from './products.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all products', description: 'Returns a list of all products.' })
  @ApiResponse({ status: 200, description: 'List of products.', type: [Product] })
  findAll() {
    return this.productsService.findAll();
  }
} 