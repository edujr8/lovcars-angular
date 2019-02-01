import { Injectable } from '@angular/core';

/* Modulos de terceiros */
import swal from 'sweetalert2';

@Injectable()
export class ModalConfirmService {

  constructor() { }

  /* Função para exibição do modal para confirmação 
  * Parametros:
  *   options: objetc { 
  *     titleItem: string (Informa o titulo ou nome do item que sera manipulado)
  *   }
  * 
  *   callback: function (Uma função de callback que será executada ao confirmar a ação que retorna um segundo modal que pode ser exibido apos a ação)
  * 
  */
  delete(opions, callback) {

    swal({
      title: 'Confirmar a exclusão ?',
      html: `Caso confirmado o item <b class="text-danger">${opions.titleItem}</b> será excluido de forma permanente !`,
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Pode Excluir !',
      cancelButtonText: 'Foi sem querer...',
      allowEscapeKey: false,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.value) {

        callback((fn) => {
          swal(
            'Excluido!',
            `O item <b class="text-danger">${opions.titleItem}</b> foi excluido com sucesso.`,
            'success'
          )
        })

      } else {
        swal({
          title: 'Ufaaa!',
          html: 'Ainda bem que eu perguntei <b class="icon-emoticon-smile"></b>',
          type: 'info',
          timer: 3000,
          showConfirmButton: false
        })
      }
    })

  }

  confir(opions, callback) {

    swal({
      title: (opions.titleItem) ? opions.titleItem : 'Use o Atributo "titleItem" pro titulo ',
      html: (opions.descriptionItem) ? opions.descriptionItem : 'Use o Atributo "descriptionItem" pra descrição ',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: (opions.confirmMsg) ? opions.confirmMsg : 'Confirmar',
      cancelButtonText: (opions.cancelMsg) ? opions.cancelMsg : 'Cancelar',
      allowEscapeKey: false,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.value) {

        callback((fn) => {

            swal(
              (opions.modalConfirmTitle) ? opions.modalConfirmTitle : 'Sucesso !',
              (opions.modalConfirmDescription) ? opions.modalConfirmDescription : 'Ação executada com sucesso.',
              'success'
            )
          
        })

      } else {
        if (opions.viewModalCancel) {
          swal({
            title: (opions.modalCancelTitle) ? opions.modalCancelTitle : 'Cancelado !',
            html: (opions.modalCancelDescription) ? opions.modalCancelDescription : 'Ação cancelada.',
            type: 'info',
            timer: 3000,
            showConfirmButton: false
          })
        }
      }
    })

  }

}
