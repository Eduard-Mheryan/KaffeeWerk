import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.html',
  standalone: true, 
  imports: [RouterModule, Header, Footer], 
})
export class MainContent {}