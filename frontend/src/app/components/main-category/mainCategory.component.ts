import { Component, OnInit } from '@angular/core';
import { MainCategoryService } from 'src/app/services/mainCategory.service';
import { MainCategory } from 'src/app/models/mainCategory';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-mainCategory',
  templateUrl: './mainCategory.component.html',
  styleUrls: ['./mainCategory.component.css']
})
export class MainCategoryComponent implements OnInit {

  mainCategories: MainCategory[] = [];
  categories: Category[] = [];
  dataLoaded = false;

  constructor(
    private mainCategoryService: MainCategoryService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getMainCategories();
    this.getCategories();
  }

  getMainCategories() {
    this.mainCategoryService.getCategories().subscribe((response) => {
      this.mainCategories = response.data
      this.dataLoaded = true
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    })
  }

}
