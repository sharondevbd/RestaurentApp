import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodIngredients } from '../models/food-ingredients.model';
import { Observable } from 'rxjs';

const baseUrl="https://localhost:7176/api/FoodIngredients";
@Injectable({
  providedIn: 'root'
})
export class FoodingredientsService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<FoodIngredients[]> {
    return this.http.get<FoodIngredients[]>(baseUrl);
  }

  get(id: any): Observable<FoodIngredients> {
    return this.http.get<FoodIngredients>(`${baseUrl}/${id}`);
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
  deletebyItem(data: FoodIngredients): Observable<any> {
    return this.http.delete(`${baseUrl}/{data}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<FoodIngredients[]> {
    return this.http.get<FoodIngredients[]>(`${baseUrl}?title=${title}`);
  }
}
