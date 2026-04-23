import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetCareCenter } from './vet-care-center';

describe('VetCareCenter', () => {
  let component: VetCareCenter;
  let fixture: ComponentFixture<VetCareCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VetCareCenter],
    }).compileComponents();

    fixture = TestBed.createComponent(VetCareCenter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
