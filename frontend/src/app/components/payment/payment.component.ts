import { CartItem } from 'src/app/models/cartItem';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  total: number = 0;
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getTotalPrice();
    this.getCart();
  }

  getTotalPrice() {
    this.total = this.cartService.getTotalPrice();
  }


  getCart() {
    this.cartItems = this.cartService.list();
  }
}
