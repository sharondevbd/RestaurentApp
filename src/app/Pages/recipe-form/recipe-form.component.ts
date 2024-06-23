import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FoodingredientsService } from '../../services/foodingredients.service';
import { HttpClientModule } from '@angular/common/http';
import { Catagory } from '../../models/catagory.model';
import { CatagoryService } from '../../services/catagory.service';
import { RawitemService } from '../../services/rawitem.service';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HttpClientModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent implements OnInit {

  constructor(public service:FoodingredientsService){} 

  Recipe:any={
    Id:0,
    FoodId:0,
    RawMaterialId:0,
    Quantity:1,
    UnitId:0,
    Food:[{
      Id: 0, ItemName: '', ItemDescription: '', CategoryId: 0, UnitId: 0, UnitPrice: 0,
      ImagePath: '',
      Unit: [],
      Category: [{CategoryName:"", CategoryId:0}],
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
  // Food=[{ItemName: '', ItemDescription: '', CategoryId: 0, UnitId: 0, UnitPrice: 0}]
  // catagory:Catagory[] = [CategoryName:"", CategoryId:0]

  RawItem:any=[];
  RawMaterialList:any=[{
    Id: 0,
    Name: '',
    UnitId: 0,
    Type: '',
    Unit: [],
    RecipeItems: []
  }]

  rawsrv = inject(RawitemService)

  cat:any=[{CategoryName:"New", Id:0, IsActive:true}]; 
  Catagory:any=[{CategoryName:"New", Id:0, IsActive:true}];
  catsrv = inject(CatagoryService)

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next:(res)=> {
         this.Recipe= res;
         console.log(res)}});

         //catagory
        this.catsrv.getAll().subscribe({
          next:(res)=>{this.Catagory = res; console.log(res)}})

          //Raw Item
        this.rawsrv.getAll().subscribe({
          next:(res)=>{this.RawMaterialList = res;
            debugger
            console.log(res)
          }})

  }
  //new Test for dropdownlist

//End TEts
  addRawItem() {
    const strobj = JSON.stringify(this.RawMaterialList);
    const obj = JSON.parse(strobj);
    this.RawItem.unshift(obj);
    // this.Recipe.push({ Id: 0, RawMaterialId:0, Quantity:0, UnitId:0 });
  }
  isEditMode = false;
  customers:any = [];
  removeOrderDetail(i:any){
    (i).closest('tr').remove();
  }
  save(){
    //post
    this.service.create(this.Recipe).subscribe(res=>{
      alert("Saved")
    })
  }

  inputbox: boolean = false;
  newCatagory(){
    this.inputbox = true;
    alert("Clicked")
  }
  savecat() {
    this.catsrv.create(this.cat).subscribe({
      next:(res)=>{
        this.inputbox = false
        alert("A new Category Created")
      }
    })
  }
  


}
function push(arg0: { Id: number; RawMaterialId: number; Quantity: number; UnitId: number; }) {
  throw new Error('Function not implemented.');
}

