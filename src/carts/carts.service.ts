import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

class CartProduct {
  @ApiProperty()
  productId: number;
  @ApiProperty()
  quantity: number;
}

export class Cart {
  @ApiProperty()
  id: number;
  @ApiProperty()
  userId: number;
  @ApiProperty({ type: [CartProduct] })
  products: CartProduct[];
}

export const cart: Cart = {
  id: 1,
  userId: 4,
  products: [
    { productId: 7, quantity: 1 },
    { productId: 3, quantity: 8 },
    { productId: 4, quantity: 2 },
    { productId: 1, quantity: 5 },
    { productId: 10, quantity: 3 },
    { productId: 15, quantity: 2 },
    { productId: 8, quantity: 4 },
    { productId: 12, quantity: 1 },
    { productId: 19, quantity: 6 },
    { productId: 5, quantity: 2 },
  ],
};

@Injectable()
export class CartsService {
  findAll(): Cart {
    return cart;
  }
} 