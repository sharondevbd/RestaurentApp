export class Requisitions {


RequisitionId:number=0;
RequestedBy!:string; 
requisitionDate: Date = new Date();
RequestedQuantity:number=0;
// [ForeignKey("MenuItem")]
MenuItemID:number=0;
MenuItem!:[]
}
