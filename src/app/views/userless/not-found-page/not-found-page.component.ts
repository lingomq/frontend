import { Component } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { LingomqButtonComponent } from '../../../core/ui/lingomq-button/lingomq-button.component';
import { LandingWrapperComponent } from '../../../core/common/landing-wrapper/landing-wrapper.component';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [TranslocoModule, LingomqButtonComponent, LandingWrapperComponent],
  providers: [TranslocoPipe],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
})
export class NotFoundPageComponent {}
