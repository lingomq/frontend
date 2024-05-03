import { Component } from '@angular/core';
import { LingomqButtonComponent } from '../../core/lingomq-button/lingomq-button.component';
import { TranslocoModule, TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LingomqButtonComponent, TranslocoModule],
  providers: [TranslocoPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
