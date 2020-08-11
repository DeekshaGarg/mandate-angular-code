import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MandateRegistration } from '../model/debit-card/mandate-registration';
import { LocalDataService } from '../service/debit-card/local-data.service';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { MndtStatus } from '../model/debit-card/mndt-status';
import { MandateService } from '../service/debit-card/mandate.service';

@Component({
  selector: 'app-mandate-authorization-own-setup',
  templateUrl: './mandate-authorization-own-setup.component.html',
  styleUrls: ['./mandate-authorization-own-setup.component.css']
})
export class MandateAuthorizationOwnSetupComponent implements OnInit {

  mandate: MandateRegistration
  readCheckbox=false
  amendCheckbox=false
  constructor(private localDataService:LocalDataService, private router:Router, private mandateService:MandateService) { }

  ngOnInit(): void {
   this.mandate= JSON.parse(this.localDataService.getData());
    //console.log(this.mandate)
  }


  approveMandate(){
    //console.log(this.readCheckbox,this.amendCheckbox)
    if(this.amendCheckbox && this.readCheckbox){
      let status=new MndtStatus(this.mandate.mndtReqId,'Approve')
    this.mandateService.sendMandateStatus(status).subscribe(
      res=>console.log("response: ",res),
      error=>console.log("error: ",error)
      
    )
      this.router.navigate(['../final-confirmation'])
    }else{
      alert("Please click the checkboxes")
    }
    
  }

  rejectMandate(){
    let status=new MndtStatus(this.mandate.mndtReqId,'Reject')
    this.mandateService.sendMandateStatus(status).subscribe(
      res=>console.log("response: ",res),
      error=>console.log("error: ",error)
      
    )
    this.router.navigate(['../rejection-confirmation'])
  }

}
