import { Component, OnInit } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { EmptyHeaderComponent } from '../../shared/components/empty-header/empty-header.component';
import { GeneralFooterComponent } from '../../shared/components/general-footer/general-footer.component';
import { LingomqButtonComponent } from '../../core/ui/lingomq-button/lingomq-button.component';
import { LingomqIdentityService } from '../../shared/services/integrations/lingomq-api/lingomq-identity/lingomq-identity.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserModel } from '../../shared/services/integrations/lingomq-api/lingomq-identity/models/create-user-model';

@Component({
  selector: 'app-sign-up',
  imports: [
    TranslocoModule,
    EmptyHeaderComponent,
    GeneralFooterComponent,
    LingomqButtonComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TranslocoPipe],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {
  signModel = new FormGroup({
    nickname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private identityService: LingomqIdentityService) {

  }

  ngOnInit(): void {
    if (LingomqIdentityService.isAuth()) window.location.href = 'library'
  }

  public signUp(): void {
    const body: CreateUserModel = {
      UserDto: {
        nickname: this.signModel.value.nickname!
      },
      SignModel: {
        Type: 0,
        SignKey: this.signModel.value.email!,
        SignValue: this.signModel.value.password!
      }
    }

    this.identityService.signUp(body).subscribe(x => {
      alert("success");
      window.location.href = 'account'
    });
  }
}
