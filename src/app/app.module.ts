import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MandateAuthorizationOwnSetupComponent } from './mandate-authorization-own-setup/mandate-authorization-own-setup.component';
import { MandateAuthorizationPaymentGatewayComponent } from './mandate-authorization-payment-gateway/mandate-authorization-payment-gateway.component';
import { RejectionConfirmationComponent } from './rejection-confirmation/rejection-confirmation.component';
import { FinalConfirmationComponent } from './final-confirmation/final-confirmation.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ModeOfAuthenticationComponent } from './mode-of-authentication/mode-of-authentication.component';
import { NetBankingLoginComponent } from './net-banking-login/net-banking-login.component';
import { DebitCardLoginComponent } from './debit-card-login/debit-card-login.component';
//import { NgXCreditCardsModule } from 'ngx-credit-cards';
//var NgXCreditCardsModule = require('ngx-credit-cards');
//type MyType: import('ngx-credit-cards').NgXCreditCardsModule;
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DebitCardLoginComponent,
    MandateAuthorizationOwnSetupComponent,
    MandateAuthorizationPaymentGatewayComponent,
    RejectionConfirmationComponent,
    FinalConfirmationComponent,
    ModeOfAuthenticationComponent,
    NetBankingLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    //NgXCreditCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
