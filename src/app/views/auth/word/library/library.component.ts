import { WordInfoDto } from '../../../../shared/services/integrations/lingomq-api/lingomq-words/models/word-info-dto';
import { Component, OnInit } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { ActivatedRoute } from '@angular/router';
import { LingomqButtonComponent } from '../../../../core/ui/lingomq-button/lingomq-button.component';
import {
  LibraryAlphabeticComponent,
  LingomqWordsService,
} from '../../../../shared/services/integrations/lingomq-api/lingomq-words/lingomq-words.service';
import { GetWordRequestModel } from '../../../../shared/services/integrations/lingomq-api/lingomq-words/models/get-word-request-model';
import { NgForOf, UpperCasePipe } from '@angular/common';
import { AuthWrapperComponent } from '../../auth-wrapper/auth-wrapper.component';

@Component({
  selector: 'app-library',
  imports: [
    TranslocoModule,
    LingomqButtonComponent,
    NgForOf,
    UpperCasePipe,
    AuthWrapperComponent,
  ],
  providers: [TranslocoPipe],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent implements OnInit {
  wordType: string | null = 'any';
  pageSize: number = 20;
  take: number = this.pageSize;
  skip: number = 0;
  filterOpened = false;
  wordInfos: LibraryAlphabeticComponent[] = [];
  filter: LibraryFilter = {
    languageFrom: 'english',
    languageFromCode: 'en',
    languageFromSubCode: 'US',
    languageTo: '',
    languageToCode: '',
    languageToSubCode: '',
    searchedWord: '',
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private wordsService: LingomqWordsService
  ) {}
  ngOnInit(): void {
    let queryWordType =
      this.activatedRoute.snapshot.queryParamMap.get('wordtype');
    this.wordType = queryWordType != null ? queryWordType : 'any';
    this.setWordsInfos();
  }

  public useFilterEventHandler(e: any, filterType: FilterType) {
    switch (filterType) {
      case FilterType.languageFrom:
        this.useFilter(e.target.value, '', '');
        break;
      case FilterType.languageTo:
        this.useFilter('', e.target.value, '');
        break;
      case FilterType.search:
        this.useFilter('', '', e.target.value);
        break;
    }
  }

  public useFilter(
    languageFrom: string = '',
    languageTo: string = '',
    searchedValue: string
  ) {
    // temp sln
    const languageMap: Map<string, string[]> = new Map();
    languageMap.set('', ['', '']);
    languageMap.set('english', ['en', 'US']);
    languageMap.set('russian', ['ru', 'RU']);
    languageMap.set('german', ['gr', 'GR']);
    languageMap.set('french', ['fr', 'FR']);

    this.filter = {
      languageFrom:
        languageFrom == '' ? this.filter.languageFrom : languageFrom,
      languageFromCode:
        languageFrom == ''
          ? this.filter.languageFromCode
          : languageMap.get(languageFrom)![0],
      languageFromSubCode:
        languageFrom == ''
          ? this.filter.languageFromSubCode
          : languageMap.get(languageFrom)![1],
      languageTo: languageTo,
      languageToCode: languageMap.get(languageTo)![0],
      languageToSubCode: languageMap.get(languageTo)![1],
      searchedWord: (searchedValue = searchedValue),
    };

    this.setWordsInfos();
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

  parseInput(e: any) {
    return e.target.value;
  }

  next() {
    this.skip += this.pageSize;
    this.take += this.pageSize;
    this.setWordsInfos();
  }

  prev() {
    this.skip = this.skip - this.pageSize <= 0 ? 0 : this.skip - this.pageSize;
    this.take =
      this.take - this.pageSize <= 0
        ? this.pageSize
        : this.take - this.pageSize;
    this.setWordsInfos();
  }

  setWordsInfos() {
    const getWordRequest: GetWordRequestModel = {
      language: this.filter.languageFrom,
      code: this.filter.languageFromCode,
      subCode: this.filter.languageFromSubCode,
      thematics: this.wordType!,
      skip: this.skip,
      take: this.take,
      searchedWord: this.filter.searchedWord,
      languageTo: this.filter.languageTo,
      codeTo: this.filter.languageToCode,
      subCodeTo: this.filter.languageToSubCode,
    };

    this.wordsService.getWords(getWordRequest).subscribe((x) => {
      this.wordInfos = this.wordsService.transformToAlphabeticArray(x);
    });
  }

  parseTranslationFromWordByLanguage(
    word: WordInfoDto,
    language: string
  ): WordInfoDto | undefined {
    return this.wordsService.getTranslationFromWord(word, language);
  }

  addUserWord(event: any) {
    this.wordsService
      .addUserWord(event.target.attributes.id.value)
      .subscribe((x) => alert('success'));
  }
}

export interface LibraryFilter {
  languageFrom: string;
  languageFromCode: string;
  languageFromSubCode: string;
  languageTo: string;
  languageToCode: string;
  languageToSubCode: string;
  searchedWord: string | '';
}

export enum FilterType {
  languageFrom,
  languageTo,
  search,
}
