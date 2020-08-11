import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MandateService } from '../service/debit-card/mandate.service';
import { DebitCard } from '../model/debit-card/debit-card';
import { MandateRegistration } from '../model/debit-card/mandate-registration';
import { LocalDataService } from '../service/debit-card/local-data.service';

@Component({
  selector: 'app-mode-of-authentication',
  templateUrl: './mode-of-authentication.component.html',
  styleUrls: ['./mode-of-authentication.component.css']
})
export class ModeOfAuthenticationComponent implements OnInit {

  debitCard:DebitCard
  mandateRegistration=  new MandateRegistration('','','','','',0,'','',this.debitCard,'','')

  constructor(private router: Router, private mandateService:MandateService, private localDataService: LocalDataService) { }

  mndtReqId:string
  ngOnInit(): void {
  }

  modeOfAuthentication(authMode){
    if('debitCard'==authMode){
      this.mandateService.sendMandateDetailsAndAuthMode(authMode,this.mndtReqId).subscribe(
        res=>{
          this.mandateRegistration=res;
          this.localDataService.setData(this.mandateRegistration)
        },
        error=>{
          console.log(error)
        }
      )
      this.router.navigate(['/debit-card-login'])
    } else if('netBanking'==authMode){
      this.router.navigate(['/net-banking-login'])
    }
  }

}
