import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookings } from './my-bookings';
import { HeaderComponent } from '../../components/header/header';
import { RouterOutlet } from '@angular/router';
describe('MyBookings', () => {
  let component: MyBookings;
  let fixture: ComponentFixture<MyBookings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBookings, HeaderComponent, RouterOutlet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBookings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
