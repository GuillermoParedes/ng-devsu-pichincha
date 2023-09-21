import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {
  public baseUrl: string = environment.baseUrl;

  public headers = new HttpHeaders({
    authorId: environment.authorId,
  });

  constructor(protected httpClient: HttpClient, protected _base: string) {}

  get<T>(params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(`${this._base}`, {
      headers: this.headers,
      params,
    });
  }

  post<T>(data: any): Observable<T> {
    console.log('p[os', data);
    return this.httpClient.post<T>(`${this._base}`, data, {
      headers: this.headers,
    });
  }

  put<T>(data: any): Observable<T> {
    return this.httpClient.put<T>(`${this._base}`, data, {
      headers: this.headers,
    });
  }

  delete<T>(params?: HttpParams): Observable<T> {
    return this.httpClient.delete<T>(`${this._base}`, {
      headers: this.headers,
      params,
    });
  }
}
