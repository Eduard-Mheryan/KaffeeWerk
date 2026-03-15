import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {

  slides = [
    {
      image: '/images/cafe-outside.jpg',
      title: 'Willkommen im Café',
      text: 'Genieße unseren frischen Kaffee und hausgemachte Spezialitäten.'
    },
    {
      image: '/images/arabic.jpg',
      title: 'Frisch gerösteter Kaffee',
      text: 'Unsere Bohnen werden täglich frisch gemahlen.'
    },
    {
      image: '/images/crossaint.jpg',
      title: 'Hausgemachte Kuchen',
      text: 'Perfekt zu einem Cappuccino am Nachmittag.'
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex >= this.slides.length) {
        this.currentIndex = 0;
      }
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentIndex++;
    if (this.currentIndex >= this.slides.length) {
      this.currentIndex = 0;
    }
  }

  prevSlide() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.slides.length - 1;
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}