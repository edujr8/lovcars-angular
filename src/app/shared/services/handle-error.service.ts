import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

/* Modulos de terceiros */
import swal from 'sweetalert2';

@Injectable()
export class HandleErrorService {

  constructor() { }

  /* Trata os erros da requisição */
  fnError(error) {

    console.log(error);

    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);

    } else if (error.error instanceof ProgressEvent) {

      swal({
        title: "Sem Resposta !",
        html: 'O sistema não retornou uma resposta para a requisição, por favor contate o administrador !',
        type: "error",
        showConfirmButton: true,
        confirmButtonText: 'Ok',
        showCloseButton: true,
      });

    } else {

      switch (error.status) {

        case 400:

          swal({
            title: "Opss!",
            html: "<b>Parece que alguns campos não foram preenchidos, por favor revise o formulário.</b>",
            type: "warning",
            showConfirmButton: true,
            confirmButtonText: 'Ok, vou revisar <i class="ft-thumbs-up"></i>',
            showCloseButton: true,
          });

          break;

        case 401:

          swal({
            title: "Não Encontrado !",
            html: "<b>Não foi permitido o acesso ao sistema com o <b class='text-danger'>E-Mail</b> e <b class='text-danger'>Senha</b> informados.</b>",
            type: "warning",
            showConfirmButton: true,
            confirmButtonText: 'Tentar Novamente !',
            showCloseButton: true,
          });

          break

        case 404:

          swal({
            title: "404",
            html: 'O endereço informado não foi localizado !',
            type: "info",
            showConfirmButton: true,
            confirmButtonText: 'Ok',
            showCloseButton: true,
          });

          break

        case 500:

          swal({
            title: "500",
            html: 'Essa requisição apresentou problemas, informe ao administrador do sistema.',
            type: "error",
            showConfirmButton: false,
            showCloseButton: true,
          });

          console.log(error)

          break

        default:

          swal({
            title: "Humm...",
            html: 'Algo de errado aconteceu, por favor verifique com o administrador.',
            type: "error",
            showConfirmButton: false,
            showCloseButton: true,
          });

          console.log(error)

          break;
      }

    }

    return new ErrorObservable('Ocorreu algum problema com a requição !');
  };

}
