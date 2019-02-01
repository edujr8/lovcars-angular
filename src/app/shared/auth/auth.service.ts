
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';

/* cookies do navegador */
import { CookieService } from 'ngx-cookie';

/* Constants das informações de acesso */
import { Constants, OptionsAuth } from './../../constants';

import swal from 'sweetalert2';
import { HandleErrorService } from './../services/handle-error.service';
import { SeeLoadingRequestService } from './../services/see-loading-request';

@Injectable()
export class AuthService {

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private http: HttpClient,

    /* Função compartilhada para tratar erros */
    private handleError: HandleErrorService,

    /* Função para o pré load */
    private statusLoadingSeach: SeeLoadingRequestService,
  ) { }

  signinUser(optionsAuth: OptionsAuth) {

    this.statusLoadingSeach.setStatusLoadingRegister(true);

    let ret = false;

    optionsAuth.client_id = Constants.clientId;
    optionsAuth.client_secret = Constants.clientSecret;
    optionsAuth.grant_type = Constants.grantType;
    optionsAuth.scope = Constants.scope;

    this.http.post(
      Constants.urlHostAuth,
      optionsAuth
    ).pipe(

      /* Trata erros da requisição */
      catchError((error: HttpErrorResponse) => {
        return this.handleError.fnError(error);
      }),

      /* intercepta o fim da requisição */
      finalize(() => {
        this.statusLoadingSeach.setStatusLoadingRegister(false);
      }),

    ).subscribe(rest => {

      this.cookieService.putObject('authToken', rest);

      ret = true;
 
      this.router.navigate(['/']);

    });

    return ret

  }

  logout() {
    this.cookieService.removeAll();
    this.router.navigate(['/']);
  }

  getToken() {
    return this.cookieService.getObject('authToken');
  }

  isAuthenticated() {

    if (this.cookieService.get('authToken')) {
      return true;
    }

    this.router.navigate(['/']);

  }
}
