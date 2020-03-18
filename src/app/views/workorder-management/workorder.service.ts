import { Injectable  } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
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
export class WorkorderService {
  BASE_URL = environment.LOCAL_BASE;
  constructor(private _http: HttpClient, private router: Router
    // tslint:disable-next-line: no-shadowed-variable
  ) { }
  paymentTermGet(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `paymentTerm/get/${data}`,    {
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
  paymentTermDetail(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `paymentTerm/getDetail/${data}`,    {
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
  paymentTermCreate(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.post(environment.LOCAL_BASE + `paymentTerm/create`,data,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        alert("Something went wrong ;)");
        return Observable.throw(error);
      })
    );
  }
  paymentTermUpdate(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.put(environment.LOCAL_BASE + `paymentTerm/update`,data,    {
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

  // site Material
  siteMaterialGet(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `sitematerial/get/${data}`,    {
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
  siteMaterialDetail(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `sitematerial/getDetail/${data}`,    {
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
  siteMaterialCreate(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.post(environment.LOCAL_BASE + `sitematerial/create`,data,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        alert("Something went wrong ;)");
        return Observable.throw(error);
      })
    );
  }
  siteMaterialUpdate(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.put(environment.LOCAL_BASE + `sitematerial/update`,data,    {
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
  //work order

  workorderGet(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `workorder/get/${data}`,    {
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
  workorderBothComGet(data ,company): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `workorder/get/${data}/company/${company}`,    {
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
  workorderComapnyGet(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `workorder/getcompany/${data}`,    {
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
  workorderAppendList(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `workorder/getAppendWorkOrder/${data}`,    {
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
  workorderDetail(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `workorder/getDetail/${data}`,    {
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
  workorderCreate(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.post(environment.LOCAL_BASE + `workorder/create`,data,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        alert("Something went wrong ;)");
        return Observable.throw(error);
      })
    );
  }
  workorderUpdate(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.put(environment.LOCAL_BASE + `workorder/Update`,data,    {
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
  workorderAppend(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.put(environment.LOCAL_BASE + `workorder/Append`,data,    {
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
}