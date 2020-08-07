import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { MandateRegistration } from '../model/debit-card/mandate-registration';
import { LocalDataService } from '../service/debit-card/local-data.service';
import { CheckboxControlValueAccessor } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-mandate-authorization-own-setup',
  templateUrl: './mandate-authorization-own-setup.component.html',
  styleUrls: ['./mandate-authorization-own-setup.component.css']
})
export class MandateAuthorizationOwnSetupComponent implements OnInit {

  mandate: MandateRegistration
  readCheckbox=false
  amendCheckbox=false
  constructor(private localDataService:LocalDataService, private router:Router) { }

  ngOnInit(): void {
   this.mandate= JSON.parse(this.localDataService.getData());
    //console.log(this.mandate)
  }


  approveMandate(){
    //console.log(this.readCheckbox,this.amendCheckbox)
    if(this.amendCheckbox && this.readCheckbox){
      this.router.navigate(['../final-confirmation'])
    }
    
  }

  rejectMandate(){
    this.router.navigate(['../rejection-confirmation'])
  }

}
