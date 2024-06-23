import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catagory } from '../models/catagory.model';
import { Observable } from 'rxjs';
const baseUrl="https://localhost:7176/api/Categories";
@Injectable({
  providedIn: 'root'
})
export class CatagoryService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<Catagory[]> {
    return this.http.get<Catagory[]>(baseUrl);
  }

  get(id: any): Observable<Catagory> {
    return this.http.get<Catagory>(`${baseUrl}/${id}`);
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
  deletebyItem(data: Catagory): Observable<any> {
    return this.http.delete(`${baseUrl}/{data}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Catagory[]> {
    return this.http.get<Catagory[]>(`${baseUrl}?title=${title}`);
  }
}
