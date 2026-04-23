import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClinics } from './all-clinics';

describe('AllClinics', () => {
  let component: AllClinics;
  let fixture: ComponentFixture<AllClinics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllClinics],
    }).compileComponents();

    fixture = TestBed.createComponent(AllClinics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
