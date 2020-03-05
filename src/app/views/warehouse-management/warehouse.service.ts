import { Injectable, EventEmitter } from '@angular/core';

import { HttpClient, HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class warehouseService {

  BASE_URL = environment.LOCAL_BASE;
  constructor(private _http: HttpClient, private router: Router
    // tslint:disable-next-line: no-shadowed-variable
  ) { }
  
  warehouseMaterialList( comapanyuuid ): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `warehouse/get/material/${comapanyuuid}`,    {
      headers: headerJson 
      
    }).pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError(error => {
        alert("Something went wrong ;)");
        return Observable.throw(error);
      })
    );
  }
  warehouseList( comapanyuuid ): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `warehouse/get/${comapanyuuid}`,    {
      headers: headerJson 
      
    }).pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError(error => {
        alert("Something went wrong ;)");
        return Observable.throw(error);
      })
    );
  }
  
  warehouseMaterialLimit( warehouseuuid,materialuuid,data): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.put(environment.LOCAL_BASE + `warehouse/${warehouseuuid}/material/${materialuuid}`, data,    {
      headers: headerJson 
      
    }).pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError(error => {
        alert("Something went wrong ;)");
        return Observable.throw(error);
      })
    );
  }
  warehouseDetail( data): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `warehouse/getdetail/${data}`,     {
      headers: headerJson 
      
    }).pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError(error => {
        alert("Something went wrong ;)");
        return Observable.throw(error);
      })
    );
  }
  warehouseCreate( data): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.post(environment.LOCAL_BASE + 'warehouse/create', data,   {
      headers: headerJson 
      
    }).pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError(error => {
        alert("Something went wrong ;)");
        return Observable.throw(error);
      })
    );
  }
  
  warehouseUpdate( data): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.put(environment.LOCAL_BASE + 'warehouse/update', data,   {
      headers: headerJson 
      
    }).pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError(error => {
        alert("Something went wrong ;)");
        return Observable.throw(error);
      })
    );
  }
  handleError = (e) => {
  }
}