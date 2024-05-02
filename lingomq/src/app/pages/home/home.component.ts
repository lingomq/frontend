import { Component } from '@angular/core';
import { LingomqButtonComponent } from '../../core/lingomq-button/lingomq-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LingomqButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
