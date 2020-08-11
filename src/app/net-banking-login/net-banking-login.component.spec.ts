import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetBankingLoginComponent } from './net-banking-login.component';

describe('NetBankingLoginComponent', () => {
  let component: NetBankingLoginComponent;
  let fixture: ComponentFixture<NetBankingLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetBankingLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetBankingLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
