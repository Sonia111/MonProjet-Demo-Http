import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IPost } from '../domain/ipost';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsListService {
  URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: HttpClient) { }
  getAllPosts(): Observable<IPost[]> {
   return   this._http.
                 get<IPost[]>(this.URL);
             // map((resp: Response) => <IPost []> resp.json());
  }
    /*return [
      {id: 100, userId: 100, title: 'Title 100', body: 'Body 100'},
      {id: 200, userId: 200, title: 'Title 200', body: 'Body 200'},
      {id: 300, userId: 300, title: 'Title 200', body: 'Body 300'},
    ];*/
}
