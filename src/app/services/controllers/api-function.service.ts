import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiFunctionService<T> {
  constructor(
    @Inject(String) private url: string,
    protected http: HttpClient
  ) {}
  get(): Observable<T> {
    return this.http.get<T>(`${this.url}`);
  }
  getById(Id: any): Observable<T> {
    return this.http.get<T>(`${this.url}/${Id}`);
  }
  post(obj: any): Observable<T> {
    return this.http.post<T>(this.url, obj);
  }
  put(Id: any, obj: any): Observable<T> {
    return this.http.put<T>(this.url + `/${Id}`, obj);
  }
  delete(Id: any): Observable<T> {
    return this.http.delete<T>(this.url + `/${Id}`);
  }
}
