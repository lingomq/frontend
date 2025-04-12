import { UpdateUserPasswordRequest } from './requests/update-user-password-request';
import { UpdateUserDescriptionRequest } from './requests/update-user-description-request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LingoMqApiConfiguration } from '../lingomq-api-configuration';
import { SignModel } from './models/sign-model';
import { Observable, of } from 'rxjs';
import { JwtTokens } from './models/jwt-tokens';
import { LocalStorageExtensionService } from '../../../local-storage-extension-service';
import { UserDto } from './models/user-dto';
import { CreateUserModel } from './models/create-user-model';
import { UserEmailResponse } from './responses/user-email-response';
import { UpdateUserEmailRequest } from './requests/update-user-email-request';
import { RefreshTokenRequest } from './requests/refresh-token-request';

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

  public signUp(createUserModel: CreateUserModel): Observable<Object> {
    const url = this.apiPath + 'auth/sign-up';
    return this.httpClient.post(url, createUserModel);
  }

  public getUser(): Observable<UserDto> {
    const url = this.apiPath + 'users';
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    });
    return this.httpClient.get<UserDto>(url, { headers: headers });
  }

  public getUserImage(): Observable<Blob> {
    const url = this.apiPath + 'users/image';
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      'Content-Type': 'image/jpeg',
    });
    return this.httpClient.get(url, { headers: headers, responseType: 'blob' });
  }

  public getUserEmail(): Observable<UserEmailResponse> {
    const url = this.apiPath + 'users/email';
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    });

    return this.httpClient.get<UserEmailResponse>(url, { headers: headers });
  }

  public updateUserNickname(nickname: string): Observable<Object> {
    const url = this.apiPath + 'users/nickname/' + nickname;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    });

    return this.httpClient.patch(url, null, { headers: headers });
  }

  public updateUserDescription(description: string): Observable<Object> {
    const url = this.apiPath + 'users/description';
    const request: UpdateUserDescriptionRequest = { description: description };

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    });

    return this.httpClient.patch(url, request, { headers: headers });
  }

  public updateUserEmail(email: string): Observable<Object> {
    const url = this.apiPath + 'users/email';
    const request: UpdateUserEmailRequest = { email: email };

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    });

    return this.httpClient.patch(url, request, { headers: headers });
  }

  public updateUserImage(file: File): Observable<Object> {
    const url = this.apiPath + 'users/image';
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    });
    const formData = new FormData();

    formData.append('File', file);
    return this.httpClient.patch(url, formData, { headers: headers });
  }

  public updateUserPassword(
    oldPassword: string,
    newPassword: string
  ): Observable<Object> {
    const url = this.apiPath + 'users/password';
    const request: UpdateUserPasswordRequest = {
      oldPassword: oldPassword,
      password: newPassword,
    };
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    });

    return this.httpClient.patch(url, request, { headers: headers });
  }

  public refreshToken(): Observable<JwtTokens> {
    const url = this.apiPath + 'auth/refresh';
    const refreshToken = localStorage.getItem('refreshToken') ?? '';
    const request: RefreshTokenRequest = { refreshToken: refreshToken };

    return this.httpClient.post<JwtTokens>(url, request);
  }

  public static clearTokens() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('refreshExpiresAt');
  }

  public static isAuth(): boolean {
    const fields = [
      'accessToken',
      'refreshToken',
      'expiresAt',
      'refreshExpiresAt',
    ];
    return LocalStorageExtensionService.contains(fields);
  }
}
