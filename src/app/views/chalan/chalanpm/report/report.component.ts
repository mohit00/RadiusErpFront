import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'environments/environment';
import { ChalanService } from '../../chalan/chalan.service'
var converter = require('number-to-words');

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @ViewChild('pRef', {static: false}) pRef: ElementRef;

  showDestinationText:Boolean = false;
  showSupplierRefText:Boolean = false;
  totalText: any;
  roundOff: any;
  floatroundoff: number;

  constructor(private ChalanService:ChalanService) { }
  Destination(){
    this.showDestinationText = !this.showDestinationText;
  }
  SupplierRefText(){
    this.showSupplierRefText = !this.showSupplierRefText;
  }
  ngOnInit() {
    this.getPoDetail();
  }
  data = [{},{}]
  getData:any ;
  paymentTermArray = [];
  totalAmount:any =0 ;
TotalTax:any =0 ;
numberText:any;
showIgst:Boolean = false;
grandTotal:any;
  getPoDetail(){
      this.ChalanService.chalanPoreportData( sessionStorage.getItem("chalanpo")).subscribe(res=>{
      
        this.totalAmount = 0;
        this.TotalTax = 0;
        this.paymentTermArray = [];
        for(var i =0 ;i<res.chalanPoMateriaRelationship.length;i++){
          this.totalAmount = this.totalAmount + (res.chalanPoMateriaRelationship[i].matQty * res.chalanPoMateriaRelationship[i].matCost)
          this.TotalTax = this.TotalTax + ((res.chalanPoMateriaRelationship[i].matQty * res.chalanPoMateriaRelationship[i].matCost ) * res.chalanPoMateriaRelationship[i].tax/100)
        }
        this.totalText  = (this.totalAmount+this.TotalTax).toString();
        this.roundOff = this.totalText.split(".");
        this.floatroundoff = parseFloat('0.'+this.roundOff[1]);
        if(this.floatroundoff < 0.5){
          this.grandTotal = parseInt(this.totalAmount +this.TotalTax)
          this.numberText = converter.toWords( this.grandTotal);

        }else{
          this.floatroundoff = 1-this.floatroundoff;
          this.grandTotal = parseInt(this.totalAmount +this.TotalTax) +1

          this.numberText = converter.toWords(this.grandTotal );

        }

        for(var i =0 ;i<res.paymentTerm.length ;i++){
          this.paymentTermArray.push({
            name:res.paymentTerm[i].split("=")[0],
            value:res.paymentTerm[i].split("=")[1]
          })
          
          
        }
        this.getData = res;
        
        if(this.getData.supplier.stateCode != this.getData.chalanBy.stateCode ){
          this.showIgst = true;
        }

        if(this.getData.chalanBy.stateCode < 10){
          this.getData.chalanBy.stateCode ='0' +this.getData.chalanBy.stateCode
        }
        if(this.getData.supplier.stateCode < 10){
          this.getData.supplier.stateCode ='0' +this.getData.supplier.stateCode
        }
        

        if(this.getData.poType){}else{
          this.getData.poType = 'Purchase'
        }
        this.getData.destination = 'Noida'
        this.getData.supplierRef = res.chPoNo;

        console.log(JSON.stringify(res))
      })
  }
GetHtml(){
  let s = this.getData.chPoNo.split("/");
      let data = {
      html:`${this.pRef.nativeElement.innerHTML}`,
      pdfName:s.join(' ')
    }
    this.ChalanService.htmlTOPdf(data).subscribe(res=>{
      window.open(environment.LOCAL_BASE+res.message,"_blank")
    })
}
}
