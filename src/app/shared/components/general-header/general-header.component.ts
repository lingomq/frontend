import { Component } from '@angular/core';
import { LingomqButtonComponent } from '../../../core/ui/lingomq-button/lingomq-button.component';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-general-header',
  standalone: true,
  imports: [LingomqButtonComponent, TranslocoModule, MatIconModule],
  providers: [TranslocoPipe],
  templateUrl: './general-header.component.html',
  styleUrl: './general-header.component.scss',
})
export class GeneralHeaderComponent {

  onHamburgerClick() {
    let hamburger = document.getElementsByClassName('hamburger-menu')[0];
    hamburger.classList.remove('disable');
    hamburger.classList.add('active');
  }

  onCloseHamburgerClick() {
    let hamburger = document.getElementsByClassName('hamburger-menu')[0];
    hamburger.classList.remove('active');
    hamburger.classList.add('disable');
  }
}
