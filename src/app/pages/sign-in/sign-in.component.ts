import { SignModel } from './../../shared/services/integrations/lingomq-api/lingomq-identity/models/sign-model';
import { Component } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { LingomqButtonComponent } from '../../core/ui/lingomq-button/lingomq-button.component';
import { EmptyHeaderComponent } from '../../shared/components/empty-header/empty-header.component';
import { GeneralFooterComponent } from '../../shared/components/general-footer/general-footer.component';
import { LingomqIdentityService } from '../../shared/services/integrations/lingomq-api/lingomq-identity/lingomq-identity.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [
    TranslocoModule,
    LingomqButtonComponent,
    EmptyHeaderComponent,
    GeneralFooterComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TranslocoPipe],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  signModel = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private lingoMqIdentityService: LingomqIdentityService) {}

  public signIn() {
    const signModel: SignModel = {
      Type: 0,
      SignKey: this.signModel.value.email!,
      SignValue: this.signModel.value.password!,
    };

    this.lingoMqIdentityService.signIn(signModel).subscribe(
      (x) => {
        sessionStorage.setItem("access_token", x.accessToken);
        sessionStorage.setItem("refresh_token", x.refreshToken);
        sessionStorage.setItem("access_expires_at", x.expiresAt);
        sessionStorage.setItem("refresh_expires_at", x.refreshExpiresAt);
        window.location.href = '/account'
      }
    );
  }
}
