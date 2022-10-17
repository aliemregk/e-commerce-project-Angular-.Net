import { Product } from '../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false;
  filterText = "";
  photos: Photo[] = [];
  photoUrls: Photo[] = [];

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.getProductsByCategoryId(params["id"]);
      }
      else if (this.router.url.includes("/products/discounted")) {
        this.getDiscountedProducts();
      } else {
        this.getProducts();
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data
      this.dataLoaded = true
    })
  }

  getProductsByCategoryId(id: number) {
    this.productService.getProductsByCategoryId(id).subscribe((response) => {
      this.products = response.data
      this.dataLoaded = true
    });
  }

  getDiscountedProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data.filter(p => p.discount != 0)
      this.dataLoaded = true
    })
  }

  addToCart(product: Product) {
    if (product.unitsInStock == 0) {
      this.toastrService.error(product.name + " is out of stock. Can not add to cart.");
    } else {
      this.cartService.addToCart(product);
      this.toastrService.success(product.name + " added to cart.");
    }
  }
}
