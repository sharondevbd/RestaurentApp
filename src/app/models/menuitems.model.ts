export class Menuitems {

    Id:number=0;
    ItemName:string="";
    ItemDescription:string="";
    CategoryId:number=0;
    // [ForeignKey("Unit")]
    UnitId!:number;
    UnitPrice:number=0;
    ImagePath!:string;
    Unit=[];
    Category=[];
    FoodIngredients=[];
    OrderItems=[];
    PurDetails=[];

}
