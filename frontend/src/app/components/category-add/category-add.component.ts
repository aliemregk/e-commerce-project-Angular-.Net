import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { MainCategoryService } from 'src/app/services/mainCategory.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryAddForm: FormGroup;
  numberOfCategories: number = 0;

  constructor(private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private mainCategoryService: MainCategoryService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createProductAddForm();
    this.getNumberOfCategories();
  }

  createProductAddForm() {
    this.categoryAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      mainCategoryId: ["", Validators.required],
      photoUrl: ["", Validators.required]
    })
  }

  add() {
    if (this.categoryAddForm.valid) {
      let categoryModel = Object.assign({}, this.categoryAddForm.value);
      this.categoryService.add(categoryModel).subscribe({
        next: (response) => { this.toastrService.success("Added successfully.", response.message) },
        error: (errorResponse) => { this.toastrService.error("Can not add.", errorResponse.message) },
        complete: () => this.router.navigate(["category-panel"])
      })
    } else {
      this.toastrService.error("Can not add. Invalid value(s).")
    }
  }

  getNumberOfCategories() {
    this.mainCategoryService.getCategories().subscribe(c => {
      this.numberOfCategories = c.data.length
    });
  }
}
