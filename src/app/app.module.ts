
/* Dependencias Nativas do Angular */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Dependencias de terceiros */
import { CookieModule } from 'ngx-cookie';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

/* Import Routing App */
import { AppRoutingModule } from './app-routing.module';

/* Import Component App */
import { AppComponent } from './app.component';

/* Import Módulos Internos */
import { Error404Module } from './error404/error404.module';

/* Guarda de Rotas e Autenticador */
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';

/* Serviços Compartilhados */
import { HttpOptionsService } from './shared/services/http-options.service';
import { HandleErrorService } from './shared/services/handle-error.service';
import { SearchDbService } from './shared/services/search-db.service';
import { RegisterDbService } from './shared/services/register-db.service';
import { ModalConfirmService } from './shared/services/modal-confirm.service';
import { SeeLoadingRequestService } from './shared/services/see-loading-request';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    /* Módulos do Angular */
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,

    /* Inicializa Módulos de Terceiros */
    CookieModule.forRoot(),
    ToastModule.forRoot(),

    /* Modulos de Rotas */
    AppRoutingModule,

    /* Módulos Internos */
    Error404Module

  ],
  providers: [

    /* Serviços de Guarda */
    AuthService,
    AuthGuard,

    /* Serviços Compartilhados */
    HttpOptionsService,
    HandleErrorService,
    SearchDbService,
    RegisterDbService,
    ModalConfirmService,
    SeeLoadingRequestService,

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
