
import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { SeeLoadingRequestService } from './shared/services/see-loading-request';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

declare var UIkit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public toastr: ToastsManager,
    public vRef: ViewContainerRef,
    public statusLoadingSeach: SeeLoadingRequestService,
  ) {
    /* carrega o modulo Toasts de notificação */
    this.toastr.setRootViewContainerRef(vRef);
  }


}
