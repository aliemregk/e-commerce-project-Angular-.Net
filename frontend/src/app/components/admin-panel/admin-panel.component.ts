import { ProductsComponent } from './../products/products.component';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MainCategoryService } from 'src/app/services/mainCategory.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  items: any[] = [];
  dataLoaded = false;

  constructor() { }

  ngOnInit(): void {
    
  }

}
