import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MainCategoryService } from 'src/app/services/mainCategory.service';

@Component({
  selector: 'app-main-category-add',
  templateUrl: './main-category-add.component.html',
  styleUrls: ['./main-category-add.component.css']
})
export class MainCategoryAddComponent implements OnInit {


  mainCategoryAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private mainCategoryService: MainCategoryService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.mainCategoryAddForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

  add() {
    if (this.mainCategoryAddForm.valid) {
      let mainCategoryModel = Object.assign({}, this.mainCategoryAddForm.value);
      this.mainCategoryService.add(mainCategoryModel).subscribe({
        next: (response) => { this.toastrService.success("New main category added.", response.message) },
        error: () => { this.toastrService.error("Can not add.") },
        complete: () => this.router.navigate(["maincategory-panel"])
      })
    }
  }

}
