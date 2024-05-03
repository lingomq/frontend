import { Component } from '@angular/core';
import { LingomqButtonComponent } from '../../../core/lingomq-button/lingomq-button.component';
import { TranslocoModule, TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-general-header',
  standalone: true,
  imports: [LingomqButtonComponent, TranslocoModule],
  providers: [TranslocoPipe],
  templateUrl: './general-header.component.html',
  styleUrl: './general-header.component.scss'
})
export class GeneralHeaderComponent {

}
