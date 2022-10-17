import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44364/api/auth/";
  admin = false;
  id: string;

  constructor(private httpClient: HttpClient,
    private userService: UserService
  ) { }

  login(loginModel: LoginModel) {
    this.isAdmin(loginModel);
    this.getUserId(loginModel.email)
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel);
  }

  register(registerModel: RegisterModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "register", registerModel);
  }

  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin(loginModel: LoginModel) {
    if (loginModel.email == "admin@admin.com") {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }

  getUserId(email: string) {
    this.userService.getAll().subscribe(response => {
      this.id = response.data.find(u => u.email == email).id.toString()
      localStorage.setItem("id", this.id)
    });
  }

}
