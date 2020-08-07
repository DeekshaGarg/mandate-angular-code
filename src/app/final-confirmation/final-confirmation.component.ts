import { Component, OnInit } from '@angular/core';
import { MandateRegistration } from '../model/debit-card/mandate-registration';
import { LocalDataService } from '../service/debit-card/local-data.service';

@Component({
  selector: 'app-final-confirmation',
  templateUrl: './final-confirmation.component.html',
  styleUrls: ['./final-confirmation.component.css']
})
export class FinalConfirmationComponent implements OnInit {

  mandate: MandateRegistration
  constructor(private localDataService:LocalDataService) { }

  ngOnInit(): void {
   this.mandate= JSON.parse(this.localDataService.getData());
    //console.log(this.mandate)
  }



}
