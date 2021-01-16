import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'environments/environment';
import { ChalanService } from '../chalan/chalan.service';
var converter = require('number-to-words');
import { ToWords } from 'to-words';

const toWords = new ToWords({
  localeCode: 'en-IN',
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
  }
});
@Component({
  selector: 'app-chalan-out-report',
  templateUrl: './chalan-out-report.component.html',
  styleUrls: ['./chalan-out-report.component.scss']
})
export class ChalanOutReportComponent implements OnInit {
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
      this.ChalanService.chalanOutreportData( sessionStorage.getItem("chalanoutuuid")).subscribe(res=>{
      
        this.totalAmount = 0;
        this.TotalTax = 0;
        this.paymentTermArray = [];
        for(var i =0 ;i<res.woDetail.materialArray.length;i++){
          this.totalAmount = this.totalAmount + (res.woDetail.materialArray[i].qty * res.woDetail.materialArray[i].rate)
          this.TotalTax = this.TotalTax + ((res.woDetail.materialArray[i].qty * res.woDetail.materialArray[i].rate ) * res.woDetail.materialArray[i].tax/100)
        }
        this.totalText  = (this.totalAmount+this.TotalTax).toString();
        this.roundOff = this.totalText.split(".");
        this.floatroundoff = parseFloat('0.'+this.roundOff[1]);
        if(this.floatroundoff < 0.5){
          this.grandTotal = parseInt(this.totalAmount +this.TotalTax)
          this.numberText =toWords.convert(this.grandTotal);  

        }else{
          this.floatroundoff = 1-this.floatroundoff;
          this.grandTotal = parseInt(this.totalAmount +this.TotalTax) +1

          this.numberText = toWords.convert(this.grandTotal);  
        }
        if(res.paymentTerm){
          for(var i =0 ;i<res.paymentTerm.length ;i++){
            this.paymentTermArray.push({
              name:res.paymentTerm[i].split("=")[0],
              value:res.paymentTerm[i].split("=")[1]
            })
            
            
          }
        }
     
        this.getData = res;
        
        if(this.getData.companyClient.stateCode != this.getData.parentCompany.stateCode ){
          this.showIgst = true;
        }

        if(this.getData.parentCompany.stateCode < 10){
          this.getData.parentCompany.stateCode ='0' +this.getData.parentCompany.stateCode
        }
        if(this.getData.companyClient.stateCode < 10){
          this.getData.companyClient.stateCode ='0' +this.getData.companyClient.stateCode
        }
        

      
        this.getData.destination = 'Noida'
        this.getData.supplierRef = res.woDetail.woNo;

        console.log(JSON.stringify(res))
      })
  }
GetHtml(){
  let s = this.getData.poNo.split("/");
      let data = {
      html:`${this.pRef.nativeElement.innerHTML}`,
      pdfName:s.join(' ')
    }
    this.ChalanService.htmlTOPdf(data).subscribe(res=>{
      window.open(environment.LOCAL_BASE+res.message,"_blank")
    })
}
}
