import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyPathClinic } from './happy-path-clinic';

describe('HappyPathClinic', () => {
  let component: HappyPathClinic;
  let fixture: ComponentFixture<HappyPathClinic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HappyPathClinic],
    }).compileComponents();

    fixture = TestBed.createComponent(HappyPathClinic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
