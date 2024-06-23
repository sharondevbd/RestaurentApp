import { Component, Inject, OnInit, inject } from '@angular/core';
import { FoodingredientsService } from '../../services/foodingredients.service';
import { FoodIngredients } from '../../models/food-ingredients.model';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {


  constructor(public service:FoodingredientsService){}
  router = inject(Router)

  Recipe:any={
    Id:0,
    FoodId:0,
    RawMaterialId:0,
    Quantity:0,
    UnitId:0,
    Food:[{
      Id: 0, ItemName: '', ItemDescription: '', CategoryId: 0, UnitId: 0, UnitPrice: 0,
      ImagePath: '',
      Unit: [],
      Category: [],
      FoodIngredients: [],
      OrderItems: [],
      PurDetails: []
    }], //MenuItem
    RawMaterial:[{
      Id: 0,
      Name: '',
      UnitId: 0,
      Type: '',
      Unit: [],
      RecipeItems: []
    }],
    Unit:[{
      Id: 0,
      UnitName: '',
      ShortName: '',
      MeasurementUnit: 0
    }]

  }
  Food=[{ItemName: '', ItemDescription: '', CategoryId: 0, UnitId: 0, UnitPrice: 0}]
  // OrderDetails: [{ Id: 0, OrderId: 0, PrdId: 0, Qty: 1 }]

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next:(res)=> {
         this.Recipe= res;
      }
    })
  }

  addRecipe() {
    this.router.navigate(['/recipe/add'])
  }

}
