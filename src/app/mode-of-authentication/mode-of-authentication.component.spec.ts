import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeOfAuthenticationComponent } from './mode-of-authentication.component';

describe('ModeOfAuthenticationComponent', () => {
  let component: ModeOfAuthenticationComponent;
  let fixture: ComponentFixture<ModeOfAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeOfAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeOfAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
