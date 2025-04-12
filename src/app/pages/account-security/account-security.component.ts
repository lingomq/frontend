import { Component } from '@angular/core';
import { EmptyHeaderComponent } from '../../shared/components/empty-header/empty-header.component';
import { AuthFooterComponent } from '../../shared/components/auth-footer/auth-footer.component';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { LingomqButtonComponent } from '../../core/ui/lingomq-button/lingomq-button.component';
import { LingomqIdentityService } from '../../shared/services/integrations/lingomq-api/lingomq-identity/lingomq-identity.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-security',
  imports: [
    EmptyHeaderComponent,
    AuthFooterComponent,
    TranslocoModule,
    LingomqButtonComponent,
    ReactiveFormsModule,
  ],
  providers: [TranslocoPipe],
  templateUrl: './account-security.component.html',
  styleUrl: './account-security.component.scss',
})
export class AccountSecurityComponent {
  passwordForm = this.formBuilder.group({
    oldPassword: '',
    newPassword: '',
  });
  constructor(
    private identityService: LingomqIdentityService,
    private formBuilder: FormBuilder
  ) {}

  public updatePassword() {
    this.identityService
      .updateUserPassword(
        this.passwordForm.value.oldPassword ?? '',
        this.passwordForm.value.newPassword ?? ''
      )
      .subscribe(
        (x) => {
          alert('Success');
          LingomqIdentityService.clearTokens();
          window.location.href = 'sign-in';
        },
        (err) => alert('error')
      );
  }
}
