import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { MainCategory } from 'src/app/models/mainCategory';
import { MainCategoryService } from 'src/app/services/mainCategory.service';

@Component({
  selector: 'app-main-category-panel',
  templateUrl: './main-category-panel.component.html',
  styleUrls: ['./main-category-panel.component.css']
})
export class MainCategoryPanelComponent implements OnInit {

  items: MainCategory[] = [];
  dataLoaded = false;
  constructor(private mainCategoryService: MainCategoryService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getMainCategories();
  }

  getMainCategories() {
    this.mainCategoryService.getCategories().subscribe((response) => {
      this.items = response.data
      this.dataLoaded = true
    })
  }

  delete(mainCategory: MainCategory) {
    this.mainCategoryService.delete(mainCategory).subscribe({
      next: (response) => this.toastrService.info("Main category deleted." , response.message),
      error: (errorResponse) => this.toastrService.error("Cant deleted." , errorResponse.message),
      complete: () => this.getMainCategories()
    })
  }
}
