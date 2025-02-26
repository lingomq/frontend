import { Component } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { EmptyHeaderComponent } from '../../shared/components/empty-header/empty-header.component';
import { AuthFooterComponent } from '../../shared/components/auth-footer/auth-footer.component';

@Component({
  selector: 'app-library-main',
  imports: [TranslocoModule, EmptyHeaderComponent, AuthFooterComponent],
  providers: [TranslocoPipe],
  templateUrl: './library-main.component.html',
  styleUrl: './library-main.component.scss'
})
export class LibraryMainComponent {

}
