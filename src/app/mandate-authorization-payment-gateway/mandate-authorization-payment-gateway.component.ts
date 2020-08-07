import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-mandate-authorization-payment-gateway',
  templateUrl: './mandate-authorization-payment-gateway.component.html',
  styleUrls: ['./mandate-authorization-payment-gateway.component.css']
})
export class MandateAuthorizationPaymentGatewayComponent implements OnInit {

  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigate(['../final-confirmation'])
  }

  cancel(){
    this.router.navigate(['../rejection-confirmation'])
  }

}
