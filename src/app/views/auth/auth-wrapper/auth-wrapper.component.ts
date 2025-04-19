import { Component, Input } from '@angular/core';
import { EmptyHeaderComponent } from "../../../shared/components/empty-header/empty-header.component";
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';

@Component({
  selector: 'app-auth-wrapper',
  imports: [EmptyHeaderComponent, AuthFooterComponent],
  templateUrl: './auth-wrapper.component.html',
  styleUrl: './auth-wrapper.component.scss'
})
export class AuthWrapperComponent {
  @Input() title: string = "";
  @Input() subTitle: string = "";

}
