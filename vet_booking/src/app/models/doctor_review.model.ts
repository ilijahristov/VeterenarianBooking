export interface DoctorReview {
  id: string;
  bookingId: string;
  clinicName: string; 
  description: string;
  healthScore: number;
  weight: number;
  activity: 'low' | 'medium' | 'high';
  medicationId: string;
}