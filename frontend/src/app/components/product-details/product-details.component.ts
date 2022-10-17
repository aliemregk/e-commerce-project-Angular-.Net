import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  photos: Photo[] = []
  product: Product;
  dataLoaded: boolean = false;

  constructor(private productService: ProductService,
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getProductById(params["productid"]);
      this.getProductPhotos(params["productid"])
    })
  }

  getProductById(id: number) {
    this.productService.getByProductId(id).subscribe(data => {
      this.product = data.data
      this.dataLoaded = true;
    })
  }

  getProductPhotos(id: number) {
    this.photoService.getAllByProductId(id).subscribe(data => {
      this.photos = data.data
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
