import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ОВА Е ВАЖНО ЗА *ngFor

@Component({
  selector: 'app-happy-path-clinic',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './happy-path-clinic.html',
  styleUrls: ['./happy-path-clinic.css']
})
export class HappyPathClinic implements OnInit {
  
  clinic: any = {
    name: 'Happy Path East',
    description: "Welcome to Happy Paws, where your pet's health and happiness are our ultimate priority. As a state-of-the-art veterinary clinic, we combine years of clinical expertise with the latest medical technology to provide comprehensive care for your beloved companions. From routine preventative wellness exams to advanced surgical procedures and diagnostics, our dedicated team of professionals is committed to delivering expert medical assistance with love, compassion, and a personal touch. We believe in building lasting relationships with our clients and ensuring every patient feels safe and comfortable in our care.",
    address: 'Ul. Partizanska 23, Skopje',
    phone: '070 123 456',
    email: 'happypaws@vet.mk',
    services: [
      { title: 'General Checkup', icon: 'bi-heart-pulse' },
      { title: 'Vaccination', icon: 'bi-shield-check' },
      { title: 'Dental Care', icon: 'bi-brightness-high' },
      { title: 'Surgery', icon: 'bi-scissors' }
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