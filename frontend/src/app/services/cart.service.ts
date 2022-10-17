import { CartItems } from './../models/cartItems';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product: Product) {
    let item = CartItems.find(c => c.product.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product: Product) {
    let item:CartItem = CartItems.find(c => c.product.id === product.id);
    CartItems.splice(CartItems.indexOf(item), 1);
  }

  getTotalPrice(): number {
    let total: number = 0;
    CartItems.forEach(p => {
      total += p.product.unitPrice * p.quantity
    });
    return total;
  }

  list(): CartItem[] {
    return CartItems;
  }
}
