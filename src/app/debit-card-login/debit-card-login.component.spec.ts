import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCardLoginComponent } from './debit-card-login.component';

describe('DebitCardLoginComponent', () => {
  let component: DebitCardLoginComponent;
  let fixture: ComponentFixture<DebitCardLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitCardLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCardLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
