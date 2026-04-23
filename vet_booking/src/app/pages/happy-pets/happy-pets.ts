import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ОВА Е ВАЖНО ЗА *ngFor

@Component({
  selector: 'app-happy-pets',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './happy-pets.html',
  styleUrls: ['./happy-pets.css']
})
export class HappyPetsClinic implements OnInit {
  
  clinic: any = {
    name: 'Happy Pets Clinic',
    description: "Welcome to Happy Pets, your trusted local partner in comprehensive pet healthcare. For years, we have been dedicated to fostering a community where every animal receives expert medical attention in a warm and welcoming environment. Our clinic is equipped with modern diagnostic tools and a passionate team of specialists who treat every pet as if they were their own. Whether it’s a routine wellness visit, advanced dental care, or specialized surgery, we provide a full spectrum of veterinary services tailored to your pet's unique needs. At Happy Pets, we don’t just treat patients; we nurture the special bond between you and your animal companions, ensuring they lead a long, vibrant, and healthy life.",
    address: 'Ul. Leninova 45, Strumica',
    phone: '071 123 123',
    email: 'happypets@vet.mk',
    services: [
      { title: 'General Checkup', icon: 'bi-heart-pulse' },
      { title: 'Vaccination', icon: 'bi-shield-check' },
      { title: 'Surgery', icon: 'bi-scissors' },
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