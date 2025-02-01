import { Component } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { EmptyHeaderComponent } from "../../shared/components/empty-header/empty-header.component";
import { GeneralFooterComponent } from "../../shared/components/general-footer/general-footer.component";
import { LingomqButtonComponent } from "../../core/ui/lingomq-button/lingomq-button.component";

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [TranslocoModule, EmptyHeaderComponent, GeneralFooterComponent, LingomqButtonComponent],
  providers: [TranslocoPipe],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent {

}
