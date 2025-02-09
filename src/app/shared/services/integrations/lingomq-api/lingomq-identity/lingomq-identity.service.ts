import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LingoMqApiConfiguration } from '../lingomq-api-configuration';
import { SignModel } from './models/sign-model';
import { Observable } from 'rxjs';
import { JwtTokens } from './models/jwt-tokens';

@Injectable({
  providedIn: 'root',
})
export class LingomqIdentityService extends LingoMqApiConfiguration {
  constructor(private httpClient: HttpClient) {
    super();
  }

  public signIn(signModel: SignModel): Observable<JwtTokens> {
    const url = this.apiPath + 'auth/sign-in';
    return this.httpClient.post<JwtTokens>(url, signModel);
  }
}
