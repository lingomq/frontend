import { Component } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { AuthWrapperComponent } from '../auth-wrapper/auth-wrapper.component';

@Component({
  selector: 'app-global-settings',
  imports: [TranslocoModule, AuthWrapperComponent],
  providers: [TranslocoPipe],
  templateUrl: './global-settings.component.html',
  styleUrl: './global-settings.component.scss',
})
export class GlobalSettingsComponent {
  selectTheme(event: any) {
    localStorage.setItem('app-theme', event.target.value);
  }
}
