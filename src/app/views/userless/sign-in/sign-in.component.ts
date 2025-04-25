import { SignModel } from '../../../shared/services/integrations/lingomq-api/lingomq-identity/models/sign-model';
import { Component, OnInit } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { LingomqButtonComponent } from '../../../core/ui/lingomq-button/lingomq-button.component';
import { LingomqIdentityService } from '../../../shared/services/integrations/lingomq-api/lingomq-identity/lingomq-identity.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { LocalStorageExtensionService } from '../../../shared/services/local-storage-extension-service';
import { LandingWrapperComponent } from "../../../core/common/landing-wrapper/landing-wrapper.component";

@Component({
  selector: 'app-sign-in',
  imports: [
    TranslocoModule,
    LingomqButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    LandingWrapperComponent
],
  providers: [TranslocoPipe],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit {
  signModel = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private lingoMqIdentityService: LingomqIdentityService) { }
  ngOnInit(): void {
    if (LingomqIdentityService.isAuth()) window.location.href = 'app/library'
  }

  public signIn() {
    const signModel: SignModel = {
      Type: 0,
      SignKey: this.signModel.value.email!,
      SignValue: this.signModel.value.password!,
    };

    this.lingoMqIdentityService.signIn(signModel).subscribe(
      (x) => {
        LocalStorageExtensionService.setValues(x);
        window.location.href = 'app/library'
      }
    );
  }
}
