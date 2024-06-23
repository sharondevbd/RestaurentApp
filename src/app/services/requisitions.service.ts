import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Requisitions } from '../models/requisitions.model';
import { Observable } from 'rxjs';
const baseUrl="https://localhost:7176/api/Requisition";
@Injectable({
  providedIn: 'root'
})
export class RequisitionsService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<Requisitions[]> {
    return this.http.get<Requisitions[]>(baseUrl);
  }

  get(id: any): Observable<Requisitions> {
    return this.http.get<Requisitions>(`${baseUrl}/${id}`);
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
  deletebyItem(data: Requisitions): Observable<any> {
    return this.http.delete(`${baseUrl}/{data}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Requisitions[]> {
    return this.http.get<Requisitions[]>(`${baseUrl}?title=${title}`);
  }
}
