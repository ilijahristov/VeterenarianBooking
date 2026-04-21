import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class BookingService {

  private appointments: any[] = [];

  constructor() { }

  saveAppointment(appointmentData: any) {
    const newRecord = {
      id: Date.now(),
      ...appointmentData,
      createdAt: new Date()
    };

    this.appointments.push(newRecord);
    
    console.log('--- Нов термин е зачуван во сервисот ---');
    console.table(this.appointments); 
    
    return true;
  }

  getAllAppointments() {
    return this.appointments;
  }
}