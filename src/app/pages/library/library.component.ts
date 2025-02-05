import { Component, OnInit } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { EmptyHeaderComponent } from '../../shared/components/empty-header/empty-header.component';
import { AuthFooterComponent } from '../../shared/components/auth-footer/auth-footer.component';
import { ActivatedRoute } from '@angular/router';
import { LingomqButtonComponent } from '../../core/ui/lingomq-button/lingomq-button.component';

@Component({
  selector: 'app-library',
  imports: [
    TranslocoModule,
    EmptyHeaderComponent,
    AuthFooterComponent,
    LingomqButtonComponent,
  ],
  providers: [TranslocoPipe],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent implements OnInit {
  wordType: string | null = 'any';
  filterOpened = false;
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    let queryWordType =
      this.activatedRoute.snapshot.queryParamMap.get('wordtype');
    this.wordType = queryWordType != null ? queryWordType : 'any';
  }

  showMobileFilter() {
    let filter = document.getElementsByClassName(
      'content-library-filter-mobile-item'
    )[0];
    if (!this.filterOpened) {
      this.filterOpened = true;
      filter.classList.add('active-flex');
    } else {
      this.filterOpened = false;
      filter.classList.remove('active-flex');
    }
  }
}
