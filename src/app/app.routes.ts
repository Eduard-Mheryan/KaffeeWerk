import { Routes } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { Home } from './main-content/pages/home/home';
import { Impressum } from './main-content/pages/impressum/impressum';

export const routes: Routes = [
  {
    path: '',
    component: MainContent,
    children: [
      { path: '', component: Home },
      { path: 'impressum', component: Impressum },
    ]
  }
];