import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { CONTATOS } from "./contatos-mock";
import { Contato } from "./contato.model";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ContatoService {
    
    
    private apiUrl = 'app/contatos';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(
        private http: Http
    ){
        
    }
    
    getContatos():Promise<Contato[]> {
        return this.http.get(this.apiUrl)
        .toPromise().then(response => response.json() as Contato[])
        .catch(this.handleError)
    }

    create(contato: Contato):Promise<Contato>{

        return this.http.post(
            this.apiUrl,
            JSON.stringify(contato),
            {headers: this.headers }).toPromise()
            .then(response => response.json() as Contato)
            .catch(this.handleError);


    }
    

    update(contato: Contato):Promise<Contato>{
        const url = `${this.apiUrl}/${contato.id}`;
        return this.http.put(
            url,
            JSON.stringify(contato),
            {headers: this.headers }).toPromise()
            .then( () => contato as Contato)
            .catch(this.handleError);


    }
    
    
    private handleError(error: any):Promise<any> {
        console.log("Error: "+error);
        return Promise.reject(error.message || error);

    }

    getContato(id: number): Promise<Contato>{
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find( contato => contato.id === id ) )
    }
}