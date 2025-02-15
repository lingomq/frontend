import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LingoMqApiConfiguration } from '../lingomq-api-configuration';
import { GetWordRequestModel } from './models/get-word-request-model';
import { Observable } from 'rxjs';
import { WordInfoDto } from './models/word-info-dto';

@Injectable({
  providedIn: 'root',
})
export class LingomqWordsService extends LingoMqApiConfiguration {
  private pageSize: number = 20;
  constructor(private httpClient: HttpClient) {
    super();
    this.apiPath = 'http://localhost:5001/api/';
  }

  public getWords(
    requestModel: GetWordRequestModel
  ): Observable<WordInfoDto[]> {
    const url =
      this.apiPath +
      `words/${requestModel.language}/${requestModel.code}/${requestModel.subCode}?take=${requestModel.take}&skip=${requestModel.skip}&thematics=${requestModel.thematics}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    });

    return this.httpClient.get<WordInfoDto[]>(url, { headers });
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
}


export interface LibraryAlphabeticComponent {
  letter: string;
  wordInfos: WordInfoDto[];
}
