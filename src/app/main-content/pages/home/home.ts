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
  intervalTime = 3000; // Automatischer Wechsel alle 3 Sekunden

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  // automatischer Slider
  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, this.intervalTime);
  }

  // Reset-Intervall beim manuellen Klick
  resetAutoSlide() {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.resetAutoSlide();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.resetAutoSlide();
  }

  goToSlide(index: number) {
    this.currentIndex = index % this.slides.length;
    this.resetAutoSlide();
  }
}