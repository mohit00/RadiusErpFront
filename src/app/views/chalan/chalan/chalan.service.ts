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
import { environment } from '../../../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChalanService {
  BASE_URL = environment.LOCAL_BASE;
  constructor(private _http: HttpClient, private router: Router
    // tslint:disable-next-line: no-shadowed-variable
  ) { }
          
  chalanCreate(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.post(environment.LOCAL_BASE + `chalan/create`,data,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  poCreate(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.post(environment.LOCAL_BASE + `po/create`,data,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  chalanOutApprove(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.post(environment.LOCAL_BASE + `po/Approve/${data}`,data,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  chalanList(companyuuid ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `chalan/list/${companyuuid}`,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  chalanOutList(companyuuid ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `po/out/list/${companyuuid}`,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  chalanOutApproveList(approve,companyuuid ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `po/out/Approve/${approve}/company/${companyuuid}`,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  chalanpmList(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `po/pm/list/${data}`,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  chalanPoCreate(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.post(environment.LOCAL_BASE + `chalan/po/create`,data,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  chalanPoList(companyuuid ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `chalan/po/list/${companyuuid}`,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  chalanOutDetail(pouuid ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `po/detail/${pouuid}`,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  chalanPoDetail(pouuid ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `chalan/po/detail/${pouuid}`,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  chalanOutreportData(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `report/chalan/out/${data}`,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
  chalanInreportData(data ): Observable<any> {
    let headerJson = {
      'authorization': 'Bearer ' + sessionStorage.getItem("access")
    };  
    return this._http.get(environment.LOCAL_BASE + `report/chalan/in/${data}`,    {
      headers: headerJson 
    }).pipe(
       map(data => {
        return data;
      }),
       catchError(error => {
        
        return Observable.throw(error);
      })
    );
  }
}