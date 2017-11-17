import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContatosListaComponent } from "./contatos-lista.component"
import { contatoDetails } from "./contato-detail.component"

const contatosRouting: Routes = [
    {
        path: 'contatos',
        component: ContatosListaComponent
    },
    {
        path: 'contatos/save',
        component: contatoDetails
    },
    {
        path: 'contatos/save/:id',
        component: contatoDetails
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(contatosRouting)
    ],
    exports: [
        RouterModule
    ]
    
})


export class contatoRoutingModule{}