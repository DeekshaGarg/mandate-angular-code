import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MandateRegistration } from '../../model/debit-card/mandate-registration';

@Injectable({
  providedIn: 'root'
})
export class MandateService {

  constructor(private http: HttpClient) { }

  
  baseUrl=`${API_URL}`;
  mandateDetailsEndPoint='/mandate-details';

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

  getMandateDetails(){
    return this.http.get<MandateRegistration>(this.baseUrl+this.mandateDetailsEndPoint,this.httpOptions).pipe(catchError(this.handleError));
  }
}
