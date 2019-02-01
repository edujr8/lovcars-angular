
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, finalize, tap } from 'rxjs/operators';

/* Constants das informações de acesso */
import { Constants, OptionsAuth } from './../../constants';

/* Modulos de terceiros */
import swal from 'sweetalert2';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

/* Serviços Compartilhados */
import { HandleErrorService } from './handle-error.service';
import { HttpOptionsService } from './http-options.service';
import { SeeLoadingRequestService } from './see-loading-request';

@Injectable()
export class RegisterDbService {

  constructor(
    private http: HttpClient,

    /* Função compartilhada com o Header da requisição */
    private httpOptions: HttpOptionsService,

    /* Função compartilhada para tratar erros */
    private handleError: HandleErrorService,

    /* Função para o pré load */
    private statusLoadingSeach: SeeLoadingRequestService,

    public toastr: ToastsManager
  ) { }

  post(objectData: any) {

    let statusReturn: boolean = false;

    /* configurações do alerta de sucesso da requisição */
    if (!objectData.optionsMsg) {
      objectData.optionsMsg = {
        view: true,
        title: 'Sucesso !',
        description: 'Cadastro realizado com sucesso.',
        type: 'success'
      }
    }

    /* Ativa o pré load da requisição */
    if (!objectData.hiddenLoading) {
      this.statusLoadingSeach.setStatusLoadingRegister(true);
    }

    return this.http.post(
      Constants.urlHostAPI + objectData.url,
      objectData.data,
      this.httpOptions.options()
    ).pipe(

      /* intercepta status da requisição */
      tap(
        success => statusReturn = true,
        error => statusReturn = false
      ),

      /* intercepta o fim da requisição */
      finalize(() => {

        /* Ativa o alerta para notificar que a requisição deu certo */
        if (statusReturn && objectData.optionsMsg.view) {
          this.toastr[objectData.optionsMsg.type](objectData.optionsMsg.description, objectData.optionsMsg.title);
        }

        this.statusLoadingSeach.setStatusLoadingRegister(false);
      }),

      /* intercepta erros da requisição */
      catchError((error: HttpErrorResponse) => {
        return this.handleError.fnError(error);
      })
    );
  }

  update(objectData: any) {

    /* configurações do alerta de sucesso da requisição */
    if (!objectData.optionsMsg) {
      objectData.optionsMsg = {
        view: true,
        title: 'Sucesso !',
        description: 'Edição realizada com sucesso.',
        type: 'success'
      }
    }

    let statusReturn: boolean = false;

    /* Ativa o pré load da requisição */
    if (!objectData.hiddenLoading) {
      this.statusLoadingSeach.setStatusLoadingRegister(true);
    }

    return this.http.put(
      Constants.urlHostAPI + objectData.url,
      objectData.data,
      this.httpOptions.options()
    ).pipe(

      /* intercepta status da requisição */
      tap(
        success => statusReturn = true,
        error => statusReturn = false
      ),

      /* intercepta o fim da requisição */
      finalize(() => {

        /* Ativa o alerta para notificar que a requisição deu certo */
        if (statusReturn && objectData.optionsMsg.view) {
          this.toastr[objectData.optionsMsg.type](objectData.optionsMsg.description, objectData.optionsMsg.title);
        }

        this.statusLoadingSeach.setStatusLoadingRegister(false);
      }),

      /* intercepta erros da requisição */
      catchError((error: HttpErrorResponse) => {
        return this.handleError.fnError(error);
      })
    );
  }

  delete(objectData: any) {

    /* configurações do alerta de sucesso da requisição */
    if (!objectData.optionsMsg) {
      objectData.optionsMsg = {
        view: false,
        title: 'Sucesso !',
        description: 'Item excluido com sucesso.',
        type: 'success'
      }
    }

    let statusReturn: boolean = false;

    /* Ativa o pré load da requisição */
    if (!objectData.hiddenLoading) {
      this.statusLoadingSeach.setStatusLoadingRegister(true);
    }

    return this.http.delete(
      Constants.urlHostAPI + objectData.url,
      this.httpOptions.options()
    ).pipe(

      /* intercepta status da requisição */
      tap(
        success => statusReturn = true,
        error => statusReturn = false
      ),

      /* intercepta o fim da requisição */
      finalize(() => {

        /* Ativa o alerta para notificar que a requisição deu certo */
        if (statusReturn && objectData.optionsMsg.view) {
          this.toastr[objectData.optionsMsg.type](objectData.optionsMsg.description, objectData.optionsMsg.title);
        }

        this.statusLoadingSeach.setStatusLoadingRegister(false);
      }),

      /* intercepta erros da requisição */
      catchError((error: HttpErrorResponse) => {
        return this.handleError.fnError(error);
      })
    );

  }

}
