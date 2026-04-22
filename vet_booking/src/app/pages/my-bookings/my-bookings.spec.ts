import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookings } from './my-bookings';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
describe('MyBookings', () => {
  let component: MyBookings;
  let fixture: ComponentFixture<MyBookings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBookings, HeaderComponent, FooterComponent]
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
