import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Pobjetivo provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Pobjetivo {

  objetivo = 'Analista de Sistemas Jr'

  constructor(public http: Http) {
    console.log('Hello Pobjetivo Provider');
  }

  
  getObjetivo(){
    return this.objetivo;
  }

}
