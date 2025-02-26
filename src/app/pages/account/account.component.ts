import { Component, OnInit } from '@angular/core';
import { EmptyHeaderComponent } from "../../shared/components/empty-header/empty-header.component";
import { AuthFooterComponent } from "../../shared/components/auth-footer/auth-footer.component";
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { LingomqIdentityService } from '../../shared/services/integrations/lingomq-api/lingomq-identity/lingomq-identity.service';
import { Observable } from 'rxjs';
import { UserDto } from '../../shared/services/integrations/lingomq-api/lingomq-identity/models/user-dto';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [EmptyHeaderComponent, AuthFooterComponent, TranslocoModule, CommonModule],
  providers: [TranslocoPipe, AsyncPipe],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {
  user$: Observable<UserDto> | undefined;

  constructor(private identityService: LingomqIdentityService) {
  }

  ngOnInit(): void {
    this.user$ = this.identityService.getUser();
    if (!LingomqIdentityService.isAuth()) window.location.href = 'sign-in';
  }

}
