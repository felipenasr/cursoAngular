import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { ContatoService } from "./contato.service";
import { Contato } from "./contato.model";

@Component({
    moduleId: module.id,
    selector: 'contato-detail',
    templateUrl: './contato-detail.component.html'
})

export class contatoDetails implements OnInit{
    

    contato: Contato;
    private isNew: boolean = true;

    constructor(private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location){

    }

    ngOnInit(){
        this.contato = new Contato(0, '','','');
        this.route.params.forEach((params: Params)=>{
            let id: number = +params['id'];

            if(id){
                this.isNew = false;    
                this.contatoService.getContato(id).then((contato: Contato)=>{
                    this.contato = contato;
                })
            }
        })


    }

    getFormGroupClass(isValid: boolean, isPristine: boolean){
        return{
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        }
    }

    getFormControlClass(isValid: boolean, isPristine: boolean){
        return{
            'form-control': true,
            'form-group-danger': !isValid && !isPristine,
            'form-group-success': isValid && !isPristine
        }
    }

    onSubmit(): void{
        
        let promise;

        if(this.isNew){
            promise = this.contatoService.create(this.contato);
        }else{
            promise = this.contatoService.update(this.contato);            
        }

        promise.then(response => this.location.back());
    }

}