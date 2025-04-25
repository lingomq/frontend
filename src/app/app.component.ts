import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppThemeService } from './shared/services/app-theme.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lingomq';
  constructor() {
    AppThemeService.useTheme();
  }
}
