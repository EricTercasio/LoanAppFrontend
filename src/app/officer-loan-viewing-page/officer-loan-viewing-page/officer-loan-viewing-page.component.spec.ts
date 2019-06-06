import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerLoanViewingPageComponent } from './officer-loan-viewing-page.component';

describe('OfficerLoanViewingPageComponent', () => {
  let component: OfficerLoanViewingPageComponent;
  let fixture: ComponentFixture<OfficerLoanViewingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerLoanViewingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerLoanViewingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
