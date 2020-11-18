import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'environments/environment';
import { ChalanService } from '../chalan/chalan.service';
var converter = require('number-to-words');

@Component({
  selector: 'app-chalan-in-report',
  templateUrl: './chalan-in-report.component.html',
  styleUrls: ['./chalan-in-report.component.scss']
})
export class ChalanInReportComponent implements OnInit {
  @ViewChild('pRef', {static: false}) pRef: ElementRef;

  constructor(private ChalanService:ChalanService) { }
  showDestinationText:Boolean = false;
  showSupplierRefText:Boolean = false;
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
  getPoDetail(){
      this.ChalanService.chalanInreportData( sessionStorage.getItem("chalaninuuid")).subscribe(res=>{
      
        this.totalAmount = 0;
        this.TotalTax = 0;
        this.paymentTermArray = [];
        for(var i =0 ;i<res.chalanPoMateriaRelationship.length;i++){
          this.totalAmount = this.totalAmount + (res.chalanPoMateriaRelationship[i].matQty * res.chalanPoMateriaRelationship[i].matCost)
          this.TotalTax = this.TotalTax + ((res.chalanPoMateriaRelationship[i].matQty * res.chalanPoMateriaRelationship[i].matCost ) * res.chalanPoMateriaRelationship[i].tax/100)
        }
        this.numberText = converter.toWords(this.totalAmount -this.TotalTax );
        for(var i =0 ;i<res.paymentTerm.length ;i++){
          this.paymentTermArray.push({
            name:res.paymentTerm[i].split("=")[0],
            value:res.paymentTerm[i].split("=")[1]
          })
          
          
        }
        this.getData = res;
        this.getData.destination = 'R&D'
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
