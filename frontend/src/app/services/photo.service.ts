import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Photo } from '../models/photo';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiUrl = "https://localhost:44364/api/photos/"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Photo>> {
    return this.httpClient.get<ListResponseModel<Photo>>(this.apiUrl + "getall");
  }

  getAllByProductId(id: number): Observable<ListResponseModel<Photo>> {
    return this.httpClient.get<ListResponseModel<Photo>>(this.apiUrl + "getallbyproductid?id=" + id);
  }

  add(photo: Photo): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", photo);
  }

  delete(photo: Photo): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "delete", photo);
  }
}
