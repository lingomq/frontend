import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LingoMqApiConfiguration } from '../lingomq-api-configuration';
import { GetWordRequestModel } from './models/get-word-request-model';
import { Observable } from 'rxjs';
import { WordInfoDto } from './models/word-info-dto';
import { GetUserWordRequest } from './models/get-user-word-request';
import { UserWordDto } from './models/user-word-dto';

@Injectable({
  providedIn: 'root',
})
export class LingomqWordsService extends LingoMqApiConfiguration {
  private pageSize: number = 20;
  constructor(private httpClient: HttpClient) {
    super();
  }

  public getWords(
    requestModel: GetWordRequestModel
  ): Observable<WordInfoDto[]> {
    var url =
      this.apiPath +
      `words/${requestModel.language}/${requestModel.code}/${requestModel.subCode}`;

    url += `?take=${requestModel.take}&skip=${requestModel.skip}`;
    url += `&thematics=${requestModel.thematics}&searchedWord=${requestModel.searchedWord}`;
    url +=
      requestModel.languageTo != ''
        ? `&languageTo=${requestModel.languageTo}&codeTo=${requestModel.codeTo}&subCodeTo=${requestModel.subCodeTo}`
        : '';

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    });

    return this.httpClient.get<WordInfoDto[]>(url, { headers });
  }

  public getUserWords(request: GetUserWordRequest): Observable<UserWordDto[]> {
    var url =
      this.apiPath +
      `words/user/?language=${request.language}&code=${request.code}&subCode=${request.subCode}`;
    url += `&take=${request.take}&skip=${request.skip}`;
    url += `&thematics=${request.thematics}&searchedWord=${request.searchedWord}`

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    });

    return this.httpClient.get<UserWordDto[]>(url, { headers });
  }

  public transformToAlphabeticArray(
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

  public getTranslationFromWord(
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
