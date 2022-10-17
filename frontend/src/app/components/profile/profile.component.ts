import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Photo } from 'src/app/models/photo';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userUpdateForm: FormGroup;
  user: User;
  userLoaded = false;
  users: User[] = []

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createUserAddForm();
    this.getUser(+localStorage.getItem("id"));
  }

  createUserAddForm() {
    this.userUpdateForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      address: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
    })
  }

  update() {
    if (this.userUpdateForm.valid) {
      let userModel = Object.assign({}, this.userUpdateForm.value);
      userModel.id = this.user.id
      this.userService.update(userModel).subscribe({
        next: (response) => { this.toastrService.success("Updated", response.message) },
        error: (errorResponse) => { this.toastrService.error("Can not updated.", errorResponse.message) },
        complete: () => this.router.navigate(["profile"])
      })
    }
  }

  getUser(id: number) {
    this.userService.getById(id).subscribe({
      next: (response) => {
        this.user = response.data
        this.userLoaded = true;
        this.userUpdateForm.setValue({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          address: this.user.address,
          email: this.user.email,
          phone: this.user.phone
        })
      },
      error: () => {
        this.userLoaded = false
      }
    })
  }
}
