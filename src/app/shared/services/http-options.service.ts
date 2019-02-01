import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

/* cookies do navegador */
import { CookieService } from 'ngx-cookie';

@Injectable()
export class HttpOptionsService {

  constructor(
    private cookieService: CookieService,
  ) { }

  private authToken = this.cookieService.getObject('authToken');

  options() {

    /* Monta o Header da requisição */
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authToken['access_token']}`
      }),
    };

  }
}
