import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-all-clinics',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './all-clinics.html',
  styleUrls: ['./all-clinics.css']
})
export class AllClinics {
  
  clinics = [
    {
      id: 'happy-path-clinic',
      name: 'Happy Path East',
      image: 'assets/happypath.png',
      location: 'Ul. Partizanska 23, Skopje',
      rating: 4.8
    },
    {
      id: 'happy-pets',
      name: 'Happy Pets Clinic',
      image: 'assets/hp1.png',
      location: 'Ul. Leninova 45, Strumica',
      rating: 4.4
    },
    {
      id: 'city-zoo-clinic',
      name: 'City Zoo Clinic',
      image: 'assets/vet5.png',
      location: 'Ul. Makedonska Brigada 21, Skopje',
      rating: 4.2
    },
    {
      id: 'emergency-pet-clinic',
      name: 'Emergency Pet Care',
      image: 'assets/hp3.png',
      location: 'Ul. Mickel Nob, Hungary',
      rating: 4.8
    },
    {
      id: 'vet-care-center',
      name: 'Vet Care Center',
      image: 'assets/vet1.png',
      location: 'Ul. Bove 45, Pariz',
      rating: 4.78
    },
  ];

  constructor(private router: Router) {}

  viewClinic(id: string) {
    this.router.navigate([id]);
  }
}