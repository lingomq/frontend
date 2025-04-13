import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AccountComponent } from './pages/account/account.component';
import { LibraryMainComponent } from './pages/library-main/library-main.component';
import { LibraryComponent } from './pages/library/library.component';
import { AccountPersonalDataComponent } from './pages/account-personal-data/account-personal-data.component';
import { AccountSecurityComponent } from './pages/account-security/account-security.component';
import { GlobalSettingsComponent } from './pages/global-settings/global-settings.component';
import { DictionaryComponent } from './pages/dictionary/dictionary.component';

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
    component: AccountComponent,
  },
  {
    path: 'account-personal-data',
    component: AccountPersonalDataComponent,
  },
  {
    path: 'account-security',
    component: AccountSecurityComponent,
  },
  {
    path: 'global-settings',
    component: GlobalSettingsComponent,
  },
  {
    path: 'dictionary',
    component: DictionaryComponent,
  },
  {
    path: 'library',
    component: LibraryMainComponent,
  },
  {
    path: 'lib',
    component: LibraryComponent,
  },
  {
    path: 'lib/:wordtype',
    component: LibraryComponent,
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
