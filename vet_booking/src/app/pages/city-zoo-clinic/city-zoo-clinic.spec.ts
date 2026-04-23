import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityZooClinic } from './city-zoo-clinic';

describe('CityZooClinic', () => {
  let component: CityZooClinic;
  let fixture: ComponentFixture<CityZooClinic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityZooClinic],
    }).compileComponents();

    fixture = TestBed.createComponent(CityZooClinic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
