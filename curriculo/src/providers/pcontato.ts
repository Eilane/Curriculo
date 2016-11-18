import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Pcontato provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Pcontato {
   email = 'eilanedossantoscampos@gmail.com';
   telefone = '(11) 5832-7383';
   celular = '(11) 97549-4509';

  constructor(public http: Http) {
    console.log('Hello Pcontato Provider');
  }


  getEmail(){
   return this.email;
      }
  getTelefone(){
    return this.telefone;
  }    

  getCelular(){
    return this.celular;
  }

}
