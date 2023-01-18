import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url:string =  'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { 
  }
  listArticles(){
    return this.http.get<any>(this.url+'/api/articles');
  }
  httpOptions = {
    headers : new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  addArticle(article:any): Observable <any>{
    return this.http.post<any>(this.url+'/api/articles', article, this.httpOptions)
  }
}
