import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectionConfirmationComponent } from './rejection-confirmation.component';

describe('RejectionConfirmationComponent', () => {
  let component: RejectionConfirmationComponent;
  let fixture: ComponentFixture<RejectionConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectionConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectionConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
