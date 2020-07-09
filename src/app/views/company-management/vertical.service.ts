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
export class verticalService {

  BASE_URL = environment.LOCAL_BASE;
  constructor(private _http: HttpClient, private router: Router
    // tslint:disable-next-line: no-shadowed-variable
  ) { }

  verticalList(data ): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `vertical/list/${data}`,    {
      headers: headerJson 
      
    }).pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  verticalDetail( data): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `vertical/detail/${data}`,     {
      headers: headerJson 
      
    }).pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  verticalCreate( data): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.post(environment.LOCAL_BASE + 'vertical/create', data,   {
      headers: headerJson 
      
    }).pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  verticalUpdate( data): Observable<any> {

    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.put(environment.LOCAL_BASE + 'vertical/update', data,   {
      headers: headerJson 
      
    }).pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  handleError = (e) => {
  }
}