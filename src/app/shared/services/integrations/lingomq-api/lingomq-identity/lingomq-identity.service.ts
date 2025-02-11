import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LingoMqApiConfiguration } from '../lingomq-api-configuration';
import { SignModel } from './models/sign-model';
import { Observable, of } from 'rxjs';
import { JwtTokens } from './models/jwt-tokens';
import { LocalStorageExtensionService } from '../../../local-storage-extension-service';
import { UserDto } from './models/user-dto';
import { CreateUserModel } from './models/create-user-model';

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

  public signUp(createUserModel: CreateUserModel) : Observable<Object> {
    const url = this.apiPath + 'auth/sign-up'
    return this.httpClient.post(url, createUserModel);
  }

  public getUser(): Observable<UserDto> {
    const url = this.apiPath + 'users';
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') });
    return this.httpClient.get<UserDto>(url, { headers: headers })
  }

  public static isAuth(): boolean {
    const fields = ["accessToken", "refreshToken", "expiresAt", "refreshExpiresAt"]
    return LocalStorageExtensionService.contains(fields)
  }
}
