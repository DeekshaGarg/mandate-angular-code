import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebitCardLoginComponent } from './debit-card-login/debit-card-login.component';
import { MandateAuthorizationOwnSetupComponent } from './mandate-authorization-own-setup/mandate-authorization-own-setup.component';
import { MandateAuthorizationPaymentGatewayComponent } from './mandate-authorization-payment-gateway/mandate-authorization-payment-gateway.component';
import { RejectionConfirmationComponent } from './rejection-confirmation/rejection-confirmation.component';
import { FinalConfirmationComponent } from './final-confirmation/final-confirmation.component';
import { ModeOfAuthenticationComponent } from './mode-of-authentication/mode-of-authentication.component';
import { NetBankingLoginComponent } from './net-banking-login/net-banking-login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth-mode',
    pathMatch: 'full'
  },
  {
    path: 'debit-card-login',
    component: DebitCardLoginComponent
  },
  {
    path: 'net-banking-login',
    component: NetBankingLoginComponent
  },
  {
    path: 'own',
    component: MandateAuthorizationOwnSetupComponent
  },
  {
    path: 'payment-gateway',
    component: MandateAuthorizationPaymentGatewayComponent
  },
  {
    path: 'rejection-confirmation',
    component: RejectionConfirmationComponent
  },
  {
    path: 'final-confirmation',
    component: FinalConfirmationComponent
  },
  {
    path: 'auth-mode',
    component: ModeOfAuthenticationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
