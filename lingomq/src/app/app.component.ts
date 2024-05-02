import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneralHeaderComponent } from './shared/components/general-header/general-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneralHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lingomq';
}
