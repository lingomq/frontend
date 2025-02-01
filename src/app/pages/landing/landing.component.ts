import { Component } from '@angular/core';
import { GeneralFooterComponent } from "../../shared/components/general-footer/general-footer.component";
import { GeneralHeaderComponent } from "../../shared/components/general-header/general-header.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [GeneralFooterComponent, GeneralHeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
