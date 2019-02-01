
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth/auth.service';
import { ModalConfirmService } from './../services/modal-confirm.service';

declare var UIkit;

@Component({
  selector: 'menu-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private modalConfirmService: ModalConfirmService
  ) { }

  ngOnInit() {
  }

  onLogout() {

    this.modalConfirmService.confir(
      {
        titleItem: "Logout",
        descriptionItem: "<b>Desejar confirmar e sair do sistema ?</b>",
        confirmMsg: "Realmente tenho que ir...",
        cancelMsg: "Foi sem querer !",
        viewModalCancel: true,
        modalCancelTitle: 'Ufaa !',
        modalCancelDescription: "Que bom que você ficou <i class='far fa-smile uk-text-success'></i>"
      },
      () => {
        UIkit.offcanvas('#user-profile').hide();

        setTimeout(() => {
          this.authService.logout();
        }, 100);
      }
    )

  }
}
