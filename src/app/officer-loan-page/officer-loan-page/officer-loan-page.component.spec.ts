import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerLoanPageComponent } from './officer-loan-page.component';

describe('OfficerLoanPageComponent', () => {
  let component: OfficerLoanPageComponent;
  let fixture: ComponentFixture<OfficerLoanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerLoanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerLoanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
