import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyPetClinic } from './emergency-pet-clinic';

describe('EmergencyPetClinic', () => {
  let component: EmergencyPetClinic;
  let fixture: ComponentFixture<EmergencyPetClinic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencyPetClinic],
    }).compileComponents();

    fixture = TestBed.createComponent(EmergencyPetClinic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
