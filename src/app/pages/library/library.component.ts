import { WordInfoDto } from './../../shared/services/integrations/lingomq-api/lingomq-words/models/word-info-dto';
import { Component, OnInit } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { EmptyHeaderComponent } from '../../shared/components/empty-header/empty-header.component';
import { AuthFooterComponent } from '../../shared/components/auth-footer/auth-footer.component';
import { ActivatedRoute } from '@angular/router';
import { LingomqButtonComponent } from '../../core/ui/lingomq-button/lingomq-button.component';
import { LingomqWordsService } from '../../shared/services/integrations/lingomq-api/lingomq-words/lingomq-words.service';
import { GetWordRequestModel } from '../../shared/services/integrations/lingomq-api/lingomq-words/models/get-word-request-model';
import { CommonModule, NgFor, NgForOf, UpperCasePipe } from '@angular/common';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-library',
  imports: [
    TranslocoModule,
    EmptyHeaderComponent,
    AuthFooterComponent,
    LingomqButtonComponent,
    NgForOf,
    UpperCasePipe,
  ],
  providers: [TranslocoPipe],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent implements OnInit {
  wordType: string | null = 'any';
  pageSize: number = 20;
  take: number = 0;
  skip: number = -this.pageSize;
  filterOpened = false;
  wordInfos: LibraryAlphabeticComponent[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private wordsService: LingomqWordsService
  ) {}
  ngOnInit(): void {
    let queryWordType =
      this.activatedRoute.snapshot.queryParamMap.get('wordtype');
    this.wordType = queryWordType != null ? queryWordType : 'any';
    this.next();
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

  next() {
    this.skip += this.pageSize;
    this.take += this.pageSize;
    this.setWordsInfos();
  }

  prev() {
    this.skip = this.skip - this.pageSize < 0 ? 0 : this.skip - this.pageSize;
    this.take =
      this.take - this.pageSize < 0 ? this.pageSize : this.take - this.pageSize;
    this.setWordsInfos();
  }

  setWordsInfos() {
    const getWordRequest: GetWordRequestModel = {
      language: 'english',
      code: 'en',
      subCode: 'US',
      thematics: this.wordType!,
      skip: this.skip,
      take: this.take,
    };

    this.wordsService.getWords(getWordRequest).subscribe((x) => {
      if (x.length > 0) {
        this.wordInfos = this.transformToAlphabeticMap(x);
      }
    });
  }

  private transformToAlphabeticMap(
    dtos: WordInfoDto[]
  ): LibraryAlphabeticComponent[] {
    const map: Map<string, WordInfoDto[]> = new Map();
    dtos.forEach((element) => {
      let prevValues: WordInfoDto[] = map.get(element.word[0]) ?? [];
      prevValues.push(element);
      map.set(element.word[0], prevValues);
    });

    const resultArray: LibraryAlphabeticComponent[] = [];
    map.forEach((value: WordInfoDto[], key: string) => {
      resultArray.push({
        letter: key,
        wordInfos: value,
      });
    });

    return resultArray;
  }

  parseTranslationFromWordByLanguage(
    word: WordInfoDto,
    language: string
  ): WordInfoDto | undefined {
    return word.translations?.filter((x) => x.language.value == language)[0];
  }
}

export interface LibraryAlphabeticComponent {
  letter: string;
  wordInfos: WordInfoDto[];
}
