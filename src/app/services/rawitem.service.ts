import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rawitem } from '../models/rawitem.model';
import { Observable } from 'rxjs';
const baseUrl="https://localhost:7176/api/RawMaterials";
@Injectable({
  providedIn: 'root'
})
export class RawitemService {
  constructor(private http:HttpClient) { }
  getAll(): Observable<Rawitem[]> {
    return this.http.get<Rawitem[]>(baseUrl);
  }

  get(id: any): Observable<Rawitem> {
    return this.http.get<Rawitem>(`${baseUrl}/${id}`);
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
  deletebyItem(data: Rawitem): Observable<any> {
    return this.http.delete(`${baseUrl}/{data}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Rawitem[]> {
    return this.http.get<Rawitem[]>(`${baseUrl}?title=${title}`);
  }

}
