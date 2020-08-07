import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MandateAuthorizationOwnSetupComponent } from './mandate-authorization-own-setup/mandate-authorization-own-setup.component';
import { MandateAuthorizationPaymentGatewayComponent } from './mandate-authorization-payment-gateway/mandate-authorization-payment-gateway.component';
import { RejectionConfirmationComponent } from './rejection-confirmation/rejection-confirmation.component';
import { FinalConfirmationComponent } from './final-confirmation/final-confirmation.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//import { NgXCreditCardsModule } from 'ngx-credit-cards';
//var NgXCreditCardsModule = require('ngx-credit-cards');
//type MyType: import('ngx-credit-cards').NgXCreditCardsModule;
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MandateAuthorizationOwnSetupComponent,
    MandateAuthorizationPaymentGatewayComponent,
    RejectionConfirmationComponent,
    FinalConfirmationComponent
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
