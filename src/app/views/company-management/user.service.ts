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
export class userService {

    BASE_URL = environment.LOCAL_BASE;
    constructor(private _http: HttpClient, private router: Router
      // tslint:disable-next-line: no-shadowed-variable
    ) { }
  
    userList( ): Observable<any> {
  
      let headerJson = {
        'authorization': 'Bearer ' + sessionStorage.getItem("access")
      };  
      return this._http.get(environment.LOCAL_BASE + `user/list`,    {
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
    userCompanyList( data): Observable<any> {
  
      let headerJson = {
        'authorization': 'Bearer ' + sessionStorage.getItem("access")
      };  
      return this._http.get(environment.LOCAL_BASE + `user/list/${data}`,    {
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
    userDetail( data): Observable<any> {
  
      let headerJson = {
        'authorization': 'Bearer ' + sessionStorage.getItem("access")
      };  
      return this._http.get(environment.LOCAL_BASE + `user/detail/${data}`,     {
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
    userCreate( data): Observable<any> {
  
      let headerJson = {
        'authorization': 'Bearer ' + sessionStorage.getItem("access")
      };  
      return this._http.post(environment.LOCAL_BASE + 'user//signUp', data,   {
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
    userUpdate( data): Observable<any> {
  
      let headerJson = {
        'authorization': 'Bearer ' + sessionStorage.getItem("access")
      };  
      return this._http.put(environment.LOCAL_BASE + 'user/update', data,   {
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