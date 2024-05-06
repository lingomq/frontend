import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneralHeaderComponent } from './shared/components/general-header/general-header.component';
import { AppThemeService } from './shared/services/app-theme/app-theme.service';
import { TranslocoModule, TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneralHeaderComponent, TranslocoModule],
  providers: [TranslocoPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lingomq';
  constructor() {
    AppThemeService.useTheme();
  }
}
