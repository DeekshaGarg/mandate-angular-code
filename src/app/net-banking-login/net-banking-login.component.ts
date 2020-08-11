import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-net-banking-login',
  templateUrl: './net-banking-login.component.html',
  styleUrls: ['./net-banking-login.component.css']
})
export class NetBankingLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  netBankingLogin(){
    this.router.navigate(['/own'])
  }

}
