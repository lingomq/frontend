import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AccountComponent } from './pages/account/account.component';
import { LibraryMainComponent } from './pages/library-main/library-main.component';
import { LibraryComponent } from './pages/library/library.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'library',
    component: LibraryMainComponent
  },
  {
    path: 'lib',
    component: LibraryComponent
  },
  {
    path: 'lib/:wordtype',
    component: LibraryComponent
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];
