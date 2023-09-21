
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


export interface CrudOperations<T, ID> {
	save(t: T): Observable<T>;
	update(id: ID, t: T): Observable<T>;
	findOne(id: ID): Observable<T>;
	findAll(): Observable<T[]>;
	delete(id: ID): Observable<any>;
}

@Injectable({
    providedIn: 'root',
  })
export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {
    public headers = new HttpHeaders({ authorId: environment.authorId });

  constructor(
    protected _http: HttpClient,
    protected _base: string
  ) {}



  save(t: T): Observable<T> {
    return this._http.post<T>(this._base, t, {headers: this.headers});
  }

  update(id: ID, t: T): Observable<T> {
    return this._http.put<T>(this._base + "/" + id, t, {});
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(this._base + "/" + id);
  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>(this._base, {headers: this.headers})
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(this._base + '/' + id);
	}


  get(endPoint: string, params: any) {
    return this._http.get<T>(`${this._base}/${endPoint}`, { params})
  }

  remove(endPoint: string, params: any) {
    return this._http.delete<T>(`${this._base}/${endPoint}`, { params, headers: this.headers})
  }
}