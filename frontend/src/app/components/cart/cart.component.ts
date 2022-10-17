import { CartService } from './../../services/cart.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.toastrService.error(product.name + " removed from cart.");
  }

  cartTotalPrice(): number {
    return this.totalPrice = this.cartService.getTotalPrice();
  }
}
