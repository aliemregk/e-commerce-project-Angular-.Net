import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainCategory } from '../models/mainCategory';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class MainCategoryService {

  apiUrl = "https://localhost:44364/api/maincategories/"

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ListResponseModel<MainCategory>> {
    return this.httpClient.get<ListResponseModel<MainCategory>>(this.apiUrl + "getall")
  }

  add(mainCategory: MainCategory): Observable<SingleResponseModel<MainCategory>> {
    return this.httpClient.post<SingleResponseModel<MainCategory>>(this.apiUrl + "add", mainCategory)
  }

  delete(mainCategory: MainCategory): Observable<SingleResponseModel<MainCategory>> {
    return this.httpClient.post<SingleResponseModel<MainCategory>>(this.apiUrl + "delete", mainCategory)
  }
}
