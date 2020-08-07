import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MandateAuthorizationOwnSetupComponent } from './mandate-authorization-own-setup/mandate-authorization-own-setup.component';
import { MandateAuthorizationPaymentGatewayComponent } from './mandate-authorization-payment-gateway/mandate-authorization-payment-gateway.component';
import { RejectionConfirmationComponent } from './rejection-confirmation/rejection-confirmation.component';
import { FinalConfirmationComponent } from './final-confirmation/final-confirmation.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
