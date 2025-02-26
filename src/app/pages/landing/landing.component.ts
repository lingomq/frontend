import { Component } from '@angular/core';
import { GeneralFooterComponent } from '../../shared/components/general-footer/general-footer.component';
import { GeneralHeaderComponent } from '../../shared/components/general-header/general-header.component';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { LingomqButtonComponent } from "../../core/ui/lingomq-button/lingomq-button.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [GeneralFooterComponent, GeneralHeaderComponent, TranslocoModule, LingomqButtonComponent],
  providers: [TranslocoPipe],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
