// src/app/models/booking.model.ts
export interface Booking {
    id: string;
    ownerName: string;
    clinicName: string;
    petName: string;
    petType: 'dog' | 'cat' | 'bird' | 'rabbit' | 'other';
    date: string;
    reason: 'checkup' | 'vaccine' | 'grooming' | 'emergency' | 'other';
    textArea: string;
    status: 'pending' | 'accepted' | 'rejected';
  }