import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodIngredients } from '../models/food-ingredients.model';
import { Observable } from 'rxjs';
import { Rawitem } from '../models/rawitem.model';

const baseUrl="https://localhost:7176/api/FoodIngredients";
@Injectable({
  providedIn: 'root'
})
export class FoodingredientsService {

  RawMaterial: Rawitem[] = [];

  constructor(private http:HttpClient) { }
  getAll(): Observable<FoodIngredients[]> {
    return this.http.get<FoodIngredients[]>(baseUrl);
  }

  get(id: any): Observable<FoodIngredients> {
    return this.http.get<FoodIngredients>(`${baseUrl}/${id}`);
  }
  create(data: FoodIngredients): Observable<any> {
    const obj = {
      ...data,
      RawMaterial: this.RawMaterial,
    };
    return this.http.post(baseUrl, obj);
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
