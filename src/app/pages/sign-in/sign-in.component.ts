import { Component } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { LingomqButtonComponent } from "../../core/ui/lingomq-button/lingomq-button.component";
import { EmptyHeaderComponent } from "../../shared/components/empty-header/empty-header.component";
import { GeneralFooterComponent } from "../../shared/components/general-footer/general-footer.component";

@Component({
  selector: 'app-sign-in',
  imports: [TranslocoModule, LingomqButtonComponent, EmptyHeaderComponent, GeneralFooterComponent],
  providers: [TranslocoPipe],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {

}
