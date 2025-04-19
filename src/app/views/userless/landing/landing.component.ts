import { Component } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { LingomqButtonComponent } from '../../../core/ui/lingomq-button/lingomq-button.component';
import { LandingWrapperComponent } from '../../../core/common/landing-wrapper/landing-wrapper.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [TranslocoModule, LingomqButtonComponent, LandingWrapperComponent],
  providers: [TranslocoPipe],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
