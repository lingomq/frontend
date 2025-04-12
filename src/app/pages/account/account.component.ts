import { Component, OnInit } from '@angular/core';
import { EmptyHeaderComponent } from '../../shared/components/empty-header/empty-header.component';
import { AuthFooterComponent } from '../../shared/components/auth-footer/auth-footer.component';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { LingomqIdentityService } from '../../shared/services/integrations/lingomq-api/lingomq-identity/lingomq-identity.service';
import { Observable } from 'rxjs';
import { UserDto } from '../../shared/services/integrations/lingomq-api/lingomq-identity/models/user-dto';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [
    EmptyHeaderComponent,
    AuthFooterComponent,
    TranslocoModule,
    CommonModule,
  ],
  providers: [TranslocoPipe, AsyncPipe],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  user$: Observable<UserDto> | undefined;
  userEmail: string = 'undefined';
  imageUrl: string = '';
  imageToShow: any;

  constructor(private identityService: LingomqIdentityService) {}

  ngOnInit(): void {
    this.user$ = this.identityService.getUser();
    if (!LingomqIdentityService.isAuth()) window.location.href = 'sign-in';
    this.setUserImage();
    this.identityService
      .getUserEmail()
      .subscribe((x) => (this.userEmail = x.email));
  }

  setUserImage(): void {
    var image: Blob;
    this.identityService.getUserImage().subscribe((x) => {
      this.createImageFromBlob(x);
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imageToShow = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  logout() {
    LingomqIdentityService.clearTokens();
    window.location.href = '';
  }
}
