
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Inport Modulo de Rotas */
import { ModelsRoutingModule } from './models-routing.module';

/* Import Components */

/* Import Modulos Internos */
import { ProfileModule } from './profile/profile.module';

@NgModule({
  imports: [
    CommonModule,

    /* Módulo de Rotas */
    ModelsRoutingModule,

    /* Modulos Internos */
    ProfileModule,
  ],
  declarations: []
})
export class ModelsModule { }
