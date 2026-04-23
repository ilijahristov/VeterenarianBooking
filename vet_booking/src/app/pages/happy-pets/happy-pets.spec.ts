import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyPets } from './happy-pets';

describe('HappyPets', () => {
  let component: HappyPets;
  let fixture: ComponentFixture<HappyPets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HappyPets],
    }).compileComponents();

    fixture = TestBed.createComponent(HappyPets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
