import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.css']
})
export class CategoryPanelComponent implements OnInit {

  items: Category[] = [];
  dataLoaded = false;
  constructor(private categoryService: CategoryService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.items = response.data
      this.dataLoaded = true
    })
  }

  delete(category: Category) {
    this.categoryService.delete(category).subscribe({
      next: (response) => this.toastrService.info("Category deleted.", response.message),
      error: (errorResponse) => this.toastrService.error("Cant deleted.", errorResponse.message),
      complete: () => this.getCategories()
    })
  }
}
