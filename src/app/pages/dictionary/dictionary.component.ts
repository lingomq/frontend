import { Component, OnInit } from '@angular/core';
import { AuthFooterComponent } from '../../shared/components/auth-footer/auth-footer.component';
import { EmptyHeaderComponent } from '../../shared/components/empty-header/empty-header.component';
import { TranslocoModule, TranslocoPipe } from '@jsverse/transloco';
import { LingomqButtonComponent } from '../../core/ui/lingomq-button/lingomq-button.component';
import { WordInfoDto } from '../../shared/services/integrations/lingomq-api/lingomq-words/models/word-info-dto';
import {
  LibraryAlphabeticComponent,
  LingomqWordsService,
} from '../../shared/services/integrations/lingomq-api/lingomq-words/lingomq-words.service';
import { GetWordRequestModel } from '../../shared/services/integrations/lingomq-api/lingomq-words/models/get-word-request-model';
import { NgForOf, UpperCasePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GetUserWordRequest } from '../../shared/services/integrations/lingomq-api/lingomq-words/models/get-user-word-request';

@Component({
  selector: 'app-dictionary',
  imports: [
    TranslocoModule,
    EmptyHeaderComponent,
    AuthFooterComponent,
    LingomqButtonComponent,
    NgForOf,
    ReactiveFormsModule,
    UpperCasePipe,
  ],
  providers: [TranslocoPipe],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss',
})
export class DictionaryComponent implements OnInit {
  pageSize: number = 20;
  take: number = this.pageSize;
  skip: number = 0;
  filterOpened = false;
  wordInfos: LibraryAlphabeticComponent[] = [];
  filter = this.formBuilder.group({
    language: 'english',
    category: 'general',
    searchedWord: '',
  });

  constructor(
    private wordsService: LingomqWordsService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.filterize();
  }

  public filterize() {
    const languageMap: Map<string, string[]> = new Map();
    const filterDict = this.filter.value;
    languageMap.set('', ['', '']);
    languageMap.set('english', ['en', 'US']);
    languageMap.set('russian', ['ru', 'RU']);
    languageMap.set('german', ['gr', 'GR']);
    languageMap.set('french', ['fr', 'FR']);
    const getWordRequest: GetUserWordRequest = {
      language: filterDict.language ?? '',
      code: languageMap.get(filterDict.language ?? '')![0],
      subCode: languageMap.get(filterDict.language ?? '')![1],
      skip: this.skip,
      take: this.take,
      searchedWord: filterDict.searchedWord ?? '',
      thematics: filterDict.category ?? 'general',
    };

    this.wordsService.getUserWords(getWordRequest).subscribe((x) => {
      this.wordInfos = this.wordsService.transformToAlphabeticArray(
        x.map((x) => x.word)
      );
    });
  }

  showMobileFilter() {
    let filter = document.getElementsByClassName(
      'content-dictionary-filter-mobile-item'
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
    this.filterize();
  }

  prev() {
    this.skip = this.skip - this.pageSize <= 0 ? 0 : this.skip - this.pageSize;
    this.take =
      this.take - this.pageSize <= 0
        ? this.pageSize
        : this.take - this.pageSize;
    this.filterize();
  }

  parseTranslationFromWordByLanguage(
    word: WordInfoDto,
    language: string
  ): WordInfoDto | undefined {
    return this.wordsService.getTranslationFromWord(word, language);
  }
}
