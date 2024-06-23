import { Menuitems } from "./menuitems.model";
import { Rawitem } from "./rawitem.model";
import { Unit } from "./unit.model";

export class FoodIngredients {
    Id:number=0;
    // [ForeignKey("Food")]
    FoodId:number=0;
// [ForeignKey("RawMaterial")]
    RawMaterialId!:number;
    Quantity:number=0;
    UnitId!:number;
    Food!:Menuitems[]; //MenuItem
    RawMaterial!:Rawitem[];
    Unit!:Unit[]
}
