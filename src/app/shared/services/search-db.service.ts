
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, finalize } from 'rxjs/operators';

/* Constants das informações de acesso */
import { Constants, OptionsAuth } from './../../constants';

/* Modulos de terceiros */
import swal from 'sweetalert2';

/* Serviços Compartilhados */
import { HandleErrorService } from './handle-error.service';
import { HttpOptionsService } from './http-options.service';
import { SeeLoadingRequestService } from './see-loading-request';

@Injectable()
export class SearchDbService {

  viewLoad: boolean = false;

  constructor(
    private http: HttpClient,

    /* Função compartilhada com o Header da requisição */
    private httpOptions: HttpOptionsService,

    /* Função compartilhada para tratar erros */
    private handleError: HandleErrorService,

    /* Função para o pré load */
    private statusLoadingSeach: SeeLoadingRequestService
  ) { }

  get(objectData: any) {

    /* Ativa o pré load da requisição */
    if (!objectData.hiddenLoading) {
      this.statusLoadingSeach.setStatusLoadingSeach(true);
    }

    return this.http.get(
      Constants.urlHostAPI + objectData.url,
      this.httpOptions.options()
    ).pipe(

      /* Identifica o fim da requisição */
      finalize(() => {

        this.statusLoadingSeach.setStatusLoadingSeach(false);
      }),

      /* Trata erros da requisição */
      catchError((error: HttpErrorResponse) => {
        return this.handleError.fnError(error);
      })
    );
  }
}
