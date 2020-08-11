import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataService } from '../service/debit-card/local-data.service';
import { MndtStatus } from '../model/debit-card/mndt-status';
import { MandateService } from '../service/debit-card/mandate.service';

@Component({
  selector: 'app-mandate-authorization-payment-gateway',
  templateUrl: './mandate-authorization-payment-gateway.component.html',
  styleUrls: ['./mandate-authorization-payment-gateway.component.css']
})
export class MandateAuthorizationPaymentGatewayComponent implements OnInit {
  mandateRegistration: any;

  constructor(private router:Router,private localDataService: LocalDataService,private mandateService: MandateService) {
    
   }

  ngOnInit(): void {
    this.mandateRegistration=JSON.parse(this.localDataService.getData());
  }

  submit(){
    
    let status=new MndtStatus(this.mandateRegistration.mndtReqId,'Approve')
    this.mandateService.sendMandateStatus(status).subscribe(
      res=>console.log(res),
      error=>console.log(error)
      
    )
    this.router.navigate(['../final-confirmation'])
  }

  cancel(){
    let status=new MndtStatus(this.mandateRegistration.mndtReqId,'Cancel')
    this.mandateService.sendMandateStatus(status).subscribe(
      res=>console.log(res),
      error=>console.log(error)
      
    )
    this.router.navigate(['../rejection-confirmation'])
  }

}
