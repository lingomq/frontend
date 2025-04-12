import { LingomqIdentityService } from './../services/integrations/lingomq-api/lingomq-identity/lingomq-identity.service';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { LocalStorageExtensionService } from '../services/local-storage-extension-service';
import { Injectable } from '@angular/core';
import { JwtTokens } from '../services/integrations/lingomq-api/lingomq-identity/models/jwt-tokens';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private identityService: LingomqIdentityService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (localStorage.getItem('accessToken') == null) {
      return next.handle(req);
    }

    var token = localStorage.getItem('accessToken');
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });

    return next.handle(req).pipe<any>(
      catchError((error) => {
        return this.handle401Error(req, next);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.identityService.refreshToken().subscribe(
        (x) => LocalStorageExtensionService.setValues(x),
        (err) => {
          LingomqIdentityService.clearTokens();
          window.location.href = 'sign-in';
        }
      );
    }

    var token = localStorage.getItem('accessToken');
    request = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next.handle(request);
  }
}
