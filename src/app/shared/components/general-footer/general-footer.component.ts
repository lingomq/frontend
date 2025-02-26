import { Component } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-general-footer',
  standalone: true,
  imports: [TranslocoModule],
  providers: [TranslocoPipe],
  templateUrl: './general-footer.component.html',
  styleUrl: './general-footer.component.scss',
})
export class GeneralFooterComponent {
  currentYear = new Date().getFullYear();
}
