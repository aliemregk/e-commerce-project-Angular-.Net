import { OrderDetail } from './../../models/orderDetail';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  items: OrderDetail[] = [];
  detail: OrderDetail;
  dataLoaded = false;

  constructor(private orderService: OrderService,
    private toasterService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getOrders();
    this.activatedRoute.params.subscribe((params) => {
      this.getOrderDetails(params["id"]);
    })
  }

  getOrders() {
    this.orderService.getOrderDetails().subscribe((response) => {
      this.items = response.data
      this.dataLoaded = true
    })
  }

  getOrderDetails(id :number) {
    this.detail = this.items.find(i => i.id == id)
  }

  deleteOrder(order: OrderDetail) {
    this.orderService.delete(order).subscribe((response) => {
      this.toasterService.error(response.message, "Order deleted.");
    })
  }

  updateOrder(order: OrderDetail) {
    this.orderService.update(order).subscribe((response) => {
      this.toasterService.error(response.message, "Order deleted.");
    })
  }
}
