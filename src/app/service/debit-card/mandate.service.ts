import { Injectable } from '@angular/core';
import { NPCI_API_URL, BANK_API_URI } from '../../app.constants';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MandateRegistration } from '../../model/debit-card/mandate-registration';
import { MndtStatus } from '../../model/debit-card/mndt-status';

@Injectable({
  providedIn: 'root'
})
export class MandateService {

  constructor(private http: HttpClient) { }

  
  npciUrl=`${NPCI_API_URL}`;
  bankUrl=`${BANK_API_URI}`;
  mandateDetailsEndPoint='/npci/mandate/auth-request';
  mandateStatusEndPoint='/bank/mandate/status';

  httpOptions ={
    headers: new HttpHeaders({
      'Content-type':'application/json', 
    })
  }

  handleError(error: HttpErrorResponse){
    let errorMessage="Unknown error!";
    if(error.error instanceof ErrorEvent){
      //client side error
      errorMessage=`Error : ${error.error.message}`;
    }else{
      //server side error
      errorMessage=`Error code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  sendMandateDetailsAndAuthMode(authMode: string, mndtReqId:string){
    return this.http.get<MandateRegistration>(this.npciUrl+this.mandateDetailsEndPoint+'/'+authMode+'/'+mndtReqId,this.httpOptions).pipe(catchError(this.handleError));
  }

  sendMandateStatus(mndtStatus: MndtStatus){
    console.log(mndtStatus)
    return this.http.post(this.bankUrl+this.mandateStatusEndPoint,mndtStatus,this.httpOptions);
  }
}
