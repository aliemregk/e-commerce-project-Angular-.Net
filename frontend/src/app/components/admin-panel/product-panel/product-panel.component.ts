import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.css']
})
export class ProductPanelComponent implements OnInit {

  items: Product[] = [];
  dataLoaded = false;
  constructor(private productService: ProductService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.items = response.data
      this.dataLoaded = true
    })
  }

  delete(product: Product) {
    this.productService.delete(product).subscribe({
      next: (response) => this.toastrService.info("Product deleted.", response.message),
      error: (errorResponse) => this.toastrService.error("Cant deleted.", errorResponse.message),
      complete: () => this.getProducts()
    })
  }
}
