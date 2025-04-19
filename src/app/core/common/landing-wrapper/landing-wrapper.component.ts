import { Component } from '@angular/core';
import { GeneralHeaderComponent } from "../../../shared/components/general-header/general-header.component";
import { GeneralFooterComponent } from "../../../shared/components/general-footer/general-footer.component";

@Component({
  selector: 'app-landing-wrapper',
  imports: [GeneralHeaderComponent, GeneralFooterComponent],
  templateUrl: './landing-wrapper.component.html',
  styleUrl: './landing-wrapper.component.scss'
})
export class LandingWrapperComponent {

}
