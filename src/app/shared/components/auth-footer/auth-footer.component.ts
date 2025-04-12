import { Component } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { UserDto } from '../../services/integrations/lingomq-api/lingomq-identity/models/user-dto';
import { LingomqIdentityService } from '../../services/integrations/lingomq-api/lingomq-identity/lingomq-identity.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-footer',
  standalone: true,
  imports: [TranslocoModule, CommonModule],
  providers: [TranslocoPipe, AsyncPipe],
  templateUrl: './auth-footer.component.html',
  styleUrl: './auth-footer.component.scss',
})
export class AuthFooterComponent {
  user$: Observable<UserDto> | undefined;
  imageUrl: string = '';
  imageToShow: any;

  constructor(private identityService: LingomqIdentityService) {}

  ngOnInit(): void {
    this.user$ = this.identityService.getUser();
    if (!LingomqIdentityService.isAuth()) window.location.href = 'sign-in';
    this.setUserImage();
  }

  setUserImage(): void {
    this.identityService.getUserImage().subscribe((x) => {
      this.createImageFromBlob(x);
    });
    const canvasImg = document.getElementsByClassName(
      'content-account-image__img1'
    )[0];
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
}
