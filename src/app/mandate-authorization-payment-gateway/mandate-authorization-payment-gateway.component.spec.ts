import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateAuthorizationPaymentGatewayComponent } from './mandate-authorization-payment-gateway.component';

describe('MandateAuthorizationPaymentGatewayComponent', () => {
  let component: MandateAuthorizationPaymentGatewayComponent;
  let fixture: ComponentFixture<MandateAuthorizationPaymentGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandateAuthorizationPaymentGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateAuthorizationPaymentGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
