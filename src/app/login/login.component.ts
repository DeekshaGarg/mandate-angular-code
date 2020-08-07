import { Component, OnInit } from '@angular/core';
import { MandateRegistration } from '../model/debit-card/mandate-registration';
import { Router } from '@angular/router';
import { MandateService } from '../service/debit-card/mandate.service';
import { DebitCard } from '../model/debit-card/debit-card';
import { LocalDataService } from '../service/debit-card/local-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  debitCard:DebitCard
  mandateRegistration=  new MandateRegistration('','','','','',0,'','',this.debitCard)
  cvv:number
  expiryMonth:number
  expiryYear:number


  constructor(private router: Router, private mandateService:MandateService, private localDataService:LocalDataService) { }

  ngOnInit(): void {
    this.mandateService.getMandateDetails().subscribe(
      res=>{
        //console.log(res);
        this.mandateRegistration=res;
      },
      error=>{
        console.log(error)
      }
    )
  }

  submitCardDetails(user){
      console.log(user);
  }

  proceed(event){
    this.router.navigate(['../own']);
    //this.router.navigate(['../payment-gateway']);
    this.localDataService.setData(this.mandateRegistration)
    
  }

  cancel(event){
    this.router.navigate(['../rejection-confirmation']);
  }

  validateCvv(cvv){
    console.log(cvv.key)
    
  }

}
