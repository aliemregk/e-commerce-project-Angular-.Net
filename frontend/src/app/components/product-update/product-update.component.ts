import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productAddForm: FormGroup;
  numberOfCategories: number = 0;
  product: Product;
  productLoaded = false;
  photos: Photo[] = []

  constructor(private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createProductAddForm();
    this.getNumberOfCategories();
    this.activatedRoute.params.subscribe((params) => {
      this.getProduct(params["id"]);
    });

  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      categoryId: ["", Validators.required],
      description: ["", Validators.required],
      discount: [""],
      coverImg: ["", Validators.required]
    })
  }

  getNumberOfCategories() {
    this.categoryService.getCategories().subscribe(c => {
      this.numberOfCategories = c.data.length
    });
  }

  update() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      productModel.id = this.product.id
      this.productService.update(productModel).subscribe({
        next: (response) => { this.toastrService.success("Updated", "Product " + response.message) },
        error: (errorResponse) => { this.toastrService.error("Can not updated.") },
        complete: () => this.router.navigate(["product-panel"])
      })
    }
  }

  getProduct(id: number) {
    this.productService.getByProductId(id).subscribe({
      next: (response) => {
        this.product = response.data
        this.productLoaded = true;

        this.productAddForm.setValue({
          name: this.product.name,
          unitPrice: this.product.unitPrice,
          unitsInStock: this.product.unitsInStock,
          categoryId: this.product.categoryId,
          description: this.product.description,
          discount: this.product.discount,
          coverImg: this.product.coverImg
        })
      },
      error: (errorResponse) => {
        this.productLoaded = false
      }
    })
  }

}
