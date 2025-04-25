import { Component } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { AuthWrapperComponent } from '../../auth-wrapper/auth-wrapper.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-library-main',
  imports: [TranslocoModule, AuthWrapperComponent, RouterModule],
  providers: [TranslocoPipe],
  templateUrl: './library-main.component.html',
  styleUrl: './library-main.component.scss',
})
export class LibraryMainComponent {}
