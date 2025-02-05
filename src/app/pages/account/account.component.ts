import { Component } from '@angular/core';
import { EmptyHeaderComponent } from "../../shared/components/empty-header/empty-header.component";
import { AuthFooterComponent } from "../../shared/components/auth-footer/auth-footer.component";
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-account',
  imports: [EmptyHeaderComponent, AuthFooterComponent, TranslocoModule],
  providers: [TranslocoPipe],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

}
