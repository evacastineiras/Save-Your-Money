import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/v1/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  /* getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  } */

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'get-all-spents');
  }
  createUserSpent(name: string, price: Number, category: string): Observable<any> {
    return this.http.post(
        API_URL + 'create-spent',
        {
            name,
            price,
            category
        }
    );
  }
  deleteUserSpent(spentId: any): Observable<any> {
    let httpParams = new HttpParams().set('spentId', spentId);
    let options = { params: httpParams };
    return this.http.delete(
        API_URL + 'delete-spent',options
    );
  }
  updateUserSpent(spentId: any, name: string, price: Number, category: string): Observable<any> {
    return this.http.patch(
        API_URL + 'update-spent',
        {
            spentId,
            name,
            price,
            category
        }
    );
  }
}