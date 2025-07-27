import { Controller, Get } from '@nestjs/common';
import { CartsService, Cart } from './carts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('carts')
@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get()
  @ApiOperation({ summary: 'Get cart', description: 'Returns a sample cart object.' })
  @ApiResponse({ status: 200, description: 'A cart object.', type: Cart })
  findAll() {
    return this.cartsService.findAll();
  }
} 