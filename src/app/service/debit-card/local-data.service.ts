import { Injectable } from '@angular/core';
import { MandateRegistration } from '../../model/debit-card/mandate-registration';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  public setData(mandate: MandateRegistration){
    sessionStorage.setItem("data",JSON.stringify(mandate));
  }

  public getData(){
    return sessionStorage.getItem("data");
  }

}
