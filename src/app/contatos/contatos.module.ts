import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ContatoBuscaComponent } from "./contato-busca.component";
import { contatoDetails } from "./contato-detail.component";
import { ContatosListaComponent } from './contatos-lista.component';
import { contatoRoutingModule } from "./contato-routing.module";
import { ContatoService } from "./contato.service";

@NgModule({
    imports:[
        CommonModule,
        contatoRoutingModule,
        FormsModule
    ],
    declarations: [
        ContatosListaComponent,
        contatoDetails,
        ContatoBuscaComponent
    ],
    exports: [
        ContatosListaComponent,
        ContatoBuscaComponent        
    ],
    providers: [ ContatoService ]
})
export class ContatosModule { }
