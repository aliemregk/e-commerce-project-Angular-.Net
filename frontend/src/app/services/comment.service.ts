import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Comment } from 'src/app/models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentsİ: Comment[] = [];
  apiUrl = "https://localhost:44364/api/comments/"

  constructor(private httpClient: HttpClient) { }

  getComments(id : number): Observable<ListResponseModel<Comment>> {
    return this.httpClient.get<ListResponseModel<Comment>>(this.apiUrl + "getallbyproductid?id=" + id);
  }

  getDetails(): Observable<ListResponseModel<Comment>> {
    return this.httpClient.get<ListResponseModel<Comment>>(this.apiUrl + "getcommentdetails");
  }

  add(comment: Comment): Observable<SingleResponseModel<Comment>> {
    return this.httpClient.post<SingleResponseModel<Comment>>(this.apiUrl + "add", comment);
  }

  delete(comment: Comment): Observable<SingleResponseModel<Comment>> {
    return this.httpClient.post<SingleResponseModel<Comment>>(this.apiUrl + "delete", comment);
  }
}
