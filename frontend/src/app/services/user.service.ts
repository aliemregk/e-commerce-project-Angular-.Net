import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44364/api/users/"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<User>> {
    return this.httpClient.get<ListResponseModel<User>>(this.apiUrl + "getall");
  }

  getById(id: number): Observable<SingleResponseModel<User>> {
    return this.httpClient.get<SingleResponseModel<User>>(this.apiUrl + "getbyid?id=" + id);
  }

  add(user: User): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", user);
  }

  delete(user: User): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "delete", user);
  }

  update(user: User): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "update", user);
  }

}
