import { Component, OnInit } from "@angular/core";

import { Contato } from "./contato.model";
import { ContatoService } from "./contato.service";
import { DialogService } from "../dialog.service";

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: './contatos-lista.component.html'
})

export class ContatosListaComponent implements OnInit{
    contatos: Contato[];
    mensagem: {};
    classesCss: {};
    currentTime: any;


    

    constructor(
        private contatoService: ContatoService,
        private dialogService: DialogService
    ){
    
    }

    ngOnInit(){
        this.contatoService.getContatos()
            .then((contatos: Contato[]) =>{
                this.contatos = contatos;
            }).catch(err => console.log('erro ' + err));
    }

    onDelete(contato: Contato){
        this.dialogService.confirm('Deseja deletar o contato '+contato.nome+'?')
            .then(canDelete =>{

                if(canDelete){
                    this.contatoService
                        .delete(contato)
                        .then(()=>{

                            this.contatos = this.contatos.filter((c: Contato) => c.id != contato.id )
                            
                            
                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Contato deletado'
                            })



                        }).catch(err => err);
                }
            });
        console.log(contato);
    }

    private mostrarMensagem(mensagem: {
        tipo: string,
        texto: string
    }): void{
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        
        if(this.currentTime){
            clearTimeout(this.currentTime);
        }
        
        this.currentTime = setTimeout(()=>{
            this.mensagem = undefined;
        },3000);
        
    }
    private montarClasses(classe: String): void{
        this.classesCss = {
            'alert': true
        }

        this.classesCss['alert-'+classe] = true;
    }
}