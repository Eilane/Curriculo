import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Phome provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Phome {
  

 nameSobrenome = 'Eilane Santos';
 logradouro = 'Rua Barbosa de Freitas, 104';
 bairro =  'Pq. Novo Santo Amaro';
 cidade = 'São Paulo' ;
 estado = 'São Paulo - Brasil';
 idade  = '24 anos';
 nacionalidade = 'Brasileira';
 estadoCivil = 'Solteira';
 cpf = '400.424.600-17';
 cep = '05874-040'

  constructor(public http: Http) {
    console.log('Hello Phome Provider');
  }


getCep() {
    return this.cep;
  }


getIdade() {
    return this.idade;
  }

getNacionalidade() {
    return this.nacionalidade;
  }

 
getEstadoCivil() {
    return this.estadoCivil;
  }

getCpf() {
    return this.cpf;
  }  


 nomeCompleto() {
    return this.nameSobrenome;
  }

 getLogradouro() {
    return this.logradouro;
  }

  getBairro() {
    return this.bairro;
  }

  getCidade() {
    return this.cidade;
  }

  getEstado() {
    return this.estado;
  }


}
