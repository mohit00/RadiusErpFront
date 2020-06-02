import { Injectable, EventEmitter } from '@angular/core';

 
@Injectable({
  providedIn: 'root'
})
export class IndianStatesCode {

  States = [{
      name:"JAMMU AND KASHMIR",
      code:1
  },{
    name:"HIMACHAL PRADESH	",
    code:2
},{
    name:"PUNJAB",
    code:3
},{
    name:"CHANDIGARH",
    code:4
},{
    name:"UTTARAKHAND",
    code:5
},{
    name:"HARYANA",
    code:6
},{
    name:"DELHI",
    code:7
},{
    name:"RAJASTHAN",
    code:8
},{
    name:"UTTAR PRADESH",
    code:9
},{
    name:"BIHAR",
    code:10
},{
    name:"SIKKIM",
    code:11
},{
    name:"ARUNACHAL PRADESH",
    code:12
},{
    name:"NAGALAND",
    code:13
},{
    name:"MANIPUR",
    code:14
},{
    name:"MIZORAM",
    code:15
},{
    name:"TRIPURA",
    code:16
},{
    name:"MEGHLAYA",
    code:17
},{
    name:"ASSAM",
    code:18
},{
    name:"WEST BENGAL",
    code:19
},{
    name:"JHARKHAND",
    code:20
},{
    name:"ODISHA",
    code:21
},{
    name:"CHATTISGARH",
    code:22
},{
    name:"MADHYA PRADESH",
    code:22
},{
    name:"GUJARAT",
    code:23
},{
    name:"DAMAN AND DIU",
    code:24
},{
    name:"DADRA AND NAGAR HAVELI",
    code:25
},{
    name:"MAHARASHTRA",
    code:26
},{
    name:"ANDHRA PRADESH",
    code:27
},{
    name:"KARNATAKA",
    code:28
},{
    name:"GOA",
    code:29
},{
    name:"LAKSHWADEEP",
    code:30
},{
    name:"KERALA",
    code:31
},{
    name:"TAMIL NADU",
    code:32
},{
    name:"KERALA",
    code:33
},{
    name:"PUDUCHERRY",
    code:34
},{
    name:"ANDAMAN AND NICOBAR ISLANDS",
    code:35
},{
    name:"TELANGANA",
    code:36
}];
  constructor( 
  ) { }


}