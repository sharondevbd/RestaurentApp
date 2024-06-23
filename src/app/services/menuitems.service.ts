import { Injectable } from '@angular/core';
import { Menuitems } from '../models/menuitems.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl="https://localhost:7176/api/MenuItem";
@Injectable({
  providedIn: 'root'
})
export class MenuitemsService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<Menuitems[]> {
    return this.http.get<Menuitems[]>(baseUrl);
  }

  get(id: any): Observable<Menuitems> {
    return this.http.get<Menuitems>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(  data: any): Observable<any> {
    return this.http.put(`${baseUrl}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deletebyItem(data: Menuitems): Observable<any> {
    return this.http.delete(`${baseUrl}/{data}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Menuitems[]> {
    return this.http.get<Menuitems[]>(`${baseUrl}?title=${title}`);
  }
}
