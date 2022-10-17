import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44364/api/products/"

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl + "getall");
  }

  getProductsByCategoryId(id: number): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl + "getallbycategoryid?id=" + id);
  }

  getByProductId(id: number): Observable<SingleResponseModel<Product>> {
    return this.httpClient.get<SingleResponseModel<Product>>(this.apiUrl + "getbyproductid?id=" + id);
  }

  add(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", product);
  }

  delete(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "delete", product);
  }

  update(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "update", product);
  }

}
