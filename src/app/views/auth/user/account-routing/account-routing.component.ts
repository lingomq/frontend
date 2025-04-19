import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { RouterModule } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-routing',
  providers: [TranslocoPipe, AsyncPipe],
  imports: [TranslocoModule, RouterModule, CommonModule],
  templateUrl: './account-routing.component.html',
  styleUrl: './account-routing.component.scss'
})
export class AccountRoutingComponent  {

}
