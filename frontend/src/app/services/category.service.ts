import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Photo } from '../models/photo';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44364/api/categories/"

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl + "getall")
  }

  getCategoriesByMainCategoryId(id: number): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl + "getallbymaincategoryid?id=" + id)
  }

  add(category: Category): Observable<ResponseModel> {
    console.log(category);
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", category);
  }

  update(category: Category): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "update", category)
  }

  delete(category: Category): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "delete", category)
  }
}
