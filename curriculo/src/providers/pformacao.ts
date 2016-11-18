import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Pformacao provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Pformacao {
 
  nivel =  'Formação superior (cursando)';   
  curso = 'Analise e Desenv. de Sistemas';
  instituicao = 'Centro Universitário Senac';    
  mesAnoConclusao = 'Julho de 2017';

  constructor(public http: Http) {
    console.log('Hello Pformacao Provider');
  }

getNivel(){
   return this.nivel;
 }

getCurso(){
  return this.curso;
}

getInstituicao(){
  return this.instituicao;
}

getMesAnoConclusao(){
  return this.mesAnoConclusao;

}

}
