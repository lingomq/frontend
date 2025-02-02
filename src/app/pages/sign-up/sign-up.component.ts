import { Component } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { EmptyHeaderComponent } from '../../shared/components/empty-header/empty-header.component';
import { GeneralFooterComponent } from '../../shared/components/general-footer/general-footer.component';
import { LingomqButtonComponent } from '../../core/ui/lingomq-button/lingomq-button.component';

@Component({
  selector: 'app-sign-up',
  imports: [
    TranslocoModule,
    EmptyHeaderComponent,
    GeneralFooterComponent,
    LingomqButtonComponent,
  ],
  providers: [TranslocoPipe],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {}
