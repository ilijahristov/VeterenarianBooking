import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-city-zoo-clinic',
  standalone: true, 
  imports: [CommonModule,HeaderComponent,FooterComponent], 
  templateUrl: './city-zoo-clinic.html',
  styleUrls: ['./city-zoo-clinic.css']
})
export class CityZooClinic implements OnInit {
  
  clinic: any = {
    name: 'City Zoo Clinic',
    description: "Welcome to City Zoo Clinic, your trusted local partner in comprehensive pet healthcare. For years, we have been dedicated to fostering a community where every animal receives expert medical attention in a warm and welcoming environment. Our clinic is equipped with modern diagnostic tools and a passionate team of specialists who treat every pet as if they were their own. Whether it’s a routine wellness visit, advanced dental care, or specialized surgery, we provide a full spectrum of veterinary services tailored to your pet's unique needs. At City Zoo Clinic, we don’t just treat patients; we nurture the special bond between you and your animal companions, ensuring they lead a long, vibrant, and healthy life.",
    address: 'Ul. Makedonska Brigada 21, Skopje',
    phone: '070 123 123',
    email: 'cityzooclinic@vet.mk',
    services: [
      { title: 'General Checkup', icon: 'bi-heart-pulse' },
      { title: 'Vaccination', icon: 'bi-shield-check' },
      { title: 'Surgery', icon: 'bi-surgery' },
      { title: 'Washing', icon: 'bi-water' },
    ]
  };

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void { }

  isExiting = false;

  onBook(): void {
  this.isExiting = true;
  setTimeout(() => {
    this.router.navigate(['/book-appointment'], { 
      queryParams: { clinicName: this.clinic.name } 
    });
  }, 500);
}
}