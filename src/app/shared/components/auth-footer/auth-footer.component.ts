import { Component } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-auth-footer',
  standalone: true,
  imports: [TranslocoModule],
  providers: [TranslocoPipe],
  templateUrl: './auth-footer.component.html',
  styleUrl: './auth-footer.component.scss'
})
export class AuthFooterComponent {
  profileImageSource = "../../../../assets/img/temp.jpg";
  profileName = "sh0rtener";
}
