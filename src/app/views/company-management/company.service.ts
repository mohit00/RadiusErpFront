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
export class CompanyService {

  BASE_URL = environment.LOCAL_BASE;
  constructor(private _http: HttpClient, private router: Router
    // tslint:disable-next-line: no-shadowed-variable
  ) { }

  companyList( ): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.post(environment.LOCAL_BASE + 'company/list', {},   {
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
  companyUnderList(data ): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `company/underCompany/${data}`,     {
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
  companyDetail( data): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `company/detail/${data}`,     {
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
  companyManageBy( companyuuid,manageCompanyuuid): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.put(environment.LOCAL_BASE + `company/managed/${companyuuid}/by/${manageCompanyuuid}`,  {},   {
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
  companyCreate( data): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.post(environment.LOCAL_BASE + 'company/create', data,   {
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
  companyUpdate( data): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.put(environment.LOCAL_BASE + 'company/update', data,   {
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