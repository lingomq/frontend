import { Component } from '@angular/core';
import { LingomqButtonComponent } from '../../../core/lingomq-button/lingomq-button.component';

@Component({
  selector: 'app-general-header',
  standalone: true,
  imports: [LingomqButtonComponent],
  templateUrl: './general-header.component.html',
  styleUrl: './general-header.component.scss'
})
export class GeneralHeaderComponent {

}
