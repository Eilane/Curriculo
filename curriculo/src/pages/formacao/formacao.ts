import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pformacao } from '../../providers/pformacao';


/*
  Generated class for the Formacao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-formacao',
  templateUrl: 'formacao.html'
})
export class Formacao {
  
  nivel;  
  curso;
  instituicao;    
  mesAnoConclusao;



  constructor(public navCtrl: NavController,
              public pformacao:Pformacao ) {
             
              this.curso = this.pformacao.getCurso();
              this.instituicao = this.pformacao.getInstituicao();
              this.instituicao = this.pformacao.getInstituicao();
              this.mesAnoConclusao = this.pformacao.getMesAnoConclusao();
              this.nivel = this.pformacao.getNivel();
              }



}
