import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateAuthorizationOwnSetupComponent } from './mandate-authorization-own-setup.component';

describe('MandateAuthorizationOwnSetupComponent', () => {
  let component: MandateAuthorizationOwnSetupComponent;
  let fixture: ComponentFixture<MandateAuthorizationOwnSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandateAuthorizationOwnSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateAuthorizationOwnSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
