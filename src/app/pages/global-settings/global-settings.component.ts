import { Component } from '@angular/core';
import { EmptyHeaderComponent } from '../../shared/components/empty-header/empty-header.component';
import { AuthFooterComponent } from '../../shared/components/auth-footer/auth-footer.component';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-global-settings',
  imports: [EmptyHeaderComponent, AuthFooterComponent, TranslocoModule],
  providers: [TranslocoPipe],
  templateUrl: './global-settings.component.html',
  styleUrl: './global-settings.component.scss',
})
export class GlobalSettingsComponent {

  selectTheme(event : any) {
    localStorage.setItem('app-theme', event.target.value);
  }
}
