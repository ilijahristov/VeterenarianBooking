import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAppointment } from './book-appointment';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { RouterOutlet } from '@angular/router';
describe('BookAppointment', () => {
  let component: BookAppointment;
  let fixture: ComponentFixture<BookAppointment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookAppointment, HeaderComponent, RouterOutlet, FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookAppointment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
