import { UpdateUserDescriptionRequest } from './../../shared/services/integrations/lingomq-api/lingomq-identity/requests/update-user-description-request';
import { Component, OnInit } from '@angular/core';
import { EmptyHeaderComponent } from '../../shared/components/empty-header/empty-header.component';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AuthFooterComponent } from '../../shared/components/auth-footer/auth-footer.component';
import { LingomqIdentityService } from '../../shared/services/integrations/lingomq-api/lingomq-identity/lingomq-identity.service';
import { UserDto } from '../../shared/services/integrations/lingomq-api/lingomq-identity/models/user-dto';
import { Observable } from 'rxjs';
import { LingomqButtonComponent } from '../../core/ui/lingomq-button/lingomq-button.component';

@Component({
  selector: 'app-account-personal-data',
  imports: [
    EmptyHeaderComponent,
    AuthFooterComponent,
    TranslocoModule,
    CommonModule,
    LingomqButtonComponent,
  ],
  providers: [TranslocoPipe, AsyncPipe],
  templateUrl: './account-personal-data.component.html',
  styleUrl: './account-personal-data.component.scss',
})
export class AccountPersonalDataComponent implements OnInit {
  user$: Observable<UserDto> | undefined;
  imageUrl: string = '';
  imageToShow: any;
  userEmail: string = 'undefined';

  constructor(private identityService: LingomqIdentityService) {}

  ngOnInit(): void {
    this.user$ = this.identityService.getUser();
    if (!LingomqIdentityService.isAuth()) window.location.href = 'sign-in';
    this.setUserImage();
    this.addUpdateProfileImageEvent();
    this.identityService
      .getUserEmail()
      .subscribe((x) => (this.userEmail = x.email));
  }

  updateUserNickname(event: any): void {
    const input = document.getElementById("nickname") as HTMLInputElement;
    this.identityService.updateUserNickname(input.value).subscribe(x => x);
    // this.onElementUpdated(event);
  }
  updateUserDescription(event: any): void {
    const input = document.getElementById("description") as HTMLInputElement;
    this.identityService.updateUserDescription(input.value).subscribe(x => x);
    // this.onElementUpdated(event);
  }
  updateUserEmail(event: any): void {
    const input = document.getElementById("email") as HTMLInputElement;
    this.identityService.updateUserEmail(input.value).subscribe(x => x);
    // this.onElementUpdated(event);
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

  addUpdateProfileImageEvent() {
    document
      .getElementsByClassName('update-image-btn')[0]
      .addEventListener('click', () =>
        document.getElementById('profile-image')?.click()
      );
  }

  onElementUpdated(event: any) {
    this.user$ = this.identityService.getUser();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.identityService
        .updateUserImage(file)
        .subscribe((x) => window.location.reload());
    }
  }
}
