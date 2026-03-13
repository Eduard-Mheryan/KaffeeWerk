import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  slides = [
    {
      image: '/images/cafe1.jpg',
      title: 'Willkommen im Café',
      text: 'Genieße unseren frischen Kaffee und hausgemachte Spezialitäten.'
    },
    {
      image: '/images/cafe2.jpg',
      title: 'Frisch gerösteter Kaffee',
      text: 'Unsere Bohnen werden täglich frisch gemahlen.'
    },
    {
      image: '/images/cafe3.jpg',
      title: 'Hausgemachte Kuchen',
      text: 'Perfekt zu einem Cappuccino am Nachmittag.'
    }
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}