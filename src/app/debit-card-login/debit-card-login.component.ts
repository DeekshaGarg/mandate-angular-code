import { Component, OnInit } from '@angular/core';
import { MandateRegistration } from '../model/debit-card/mandate-registration';
import { Router } from '@angular/router';
import { MandateService } from '../service/debit-card/mandate.service';
import { DebitCard } from '../model/debit-card/debit-card';
import { LocalDataService } from '../service/debit-card/local-data.service';
import { MndtStatus } from '../model/debit-card/mndt-status';

@Component({
  selector: 'app-login',
  templateUrl: './debit-card-login.component.html',
  styleUrls: ['./debit-card-login.component.css']
})
export class DebitCardLoginComponent implements OnInit {

  debitCard:DebitCard
  mandateRegistration=  new MandateRegistration('','','','','',0,'','',this.debitCard,'','')
  cvv:number
  expiryMonth:number
  expiryYear:number


  constructor(private router: Router, private mandateService:MandateService, private localDataService:LocalDataService) { }

  ngOnInit(): void {
    this.mandateRegistration=JSON.parse(this.localDataService.getData());
  }

  submitCardDetails(user){
      console.log(user);
  }

  proceed(event){
    //this.router.navigate(['../own']);
    this.router.navigate(['../payment-gateway']);
    
    
  }

  cancel(event){
    //console.log(this.mandateRegistration)
    let status=new MndtStatus(this.mandateRegistration.mndtReqId,'Cancel')
    this.mandateService.sendMandateStatus(status).subscribe(
      res=>console.log(res),
      error=>console.log(error)
      
    )
    this.router.navigate(['../rejection-confirmation']);

  }

  validateCvv(cvv){
    console.log(cvv.key)
    
  }

}
