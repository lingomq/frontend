import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: 'not-found',
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];
