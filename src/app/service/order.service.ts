import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from '../constants/url';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private apiUrl = API_URL+'/order/save';
  private api = API_URL+'/order/test';

  constructor(private http: HttpClient) { }

 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'text/plain',
      'Access-Control-Allow-Origin': 'http://localhost:4200' // Replace with your Angular app URL
    })
  };

  saveOrder(data: any):Observable<any>  {
    return this.http.post<any>(this.apiUrl, data);
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }


  test(): Observable<any> {
    return this.http.get<any>(`${this.api}`)
      .pipe(
        catchError(this.handleError)
      );
  }
}
