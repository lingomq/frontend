import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './views/userless/not-found-page/not-found-page.component';
import { LandingComponent } from './views/userless/landing/landing.component';
import { SignInComponent } from './views/userless/sign-in/sign-in.component';
import { SignUpComponent } from './views/userless/sign-up/sign-up.component';
import { AccountComponent } from './views/auth/user/account/account.component';
import { LibraryMainComponent } from './views/auth/word/library-main/library-main.component';
import { LibraryComponent } from './views/auth/word/library/library.component';
import { AccountPersonalDataComponent } from './views/auth/user/account-personal-data/account-personal-data.component';
import { AccountSecurityComponent } from './views/auth/user/account-security/account-security.component';
import { GlobalSettingsComponent } from './views/auth/global-settings/global-settings.component';
import { DictionaryComponent } from './views/auth/word/dictionary/dictionary.component';
import { AccountRoutingComponent } from './views/auth/user/account-routing/account-routing.component';
import { AuthRouterComponent } from './views/auth/auth-router/auth-router.component';

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
    path: 'app',
    component: AuthRouterComponent,
    children: [
      {
        path: '',
        component: LibraryComponent
      },
      {
        path: 'account',
        component: AccountRoutingComponent,
        children: [
          {
            path: '',
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
        ],
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
    ],
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
