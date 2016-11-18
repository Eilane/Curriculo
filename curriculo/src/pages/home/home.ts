import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Phome } from '../../providers/phome';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lougradouro;
  name;
  bairro;
  cidade;
  estado;
  cep;
  idade;
  nacionalidade;
  estadoCivil;
  cpf;

  constructor(public navCtrl: NavController, 
              public phome:Phome) {
                  
        
              this.name = this.phome.nomeCompleto();
              this.lougradouro = this.phome.getLogradouro();     
              this.bairro = this.phome.getBairro();
              this.cidade = this.phome.getCidade();
              this.estado = this.phome.getEstado();
              this.idade  = this.phome.getIdade();
              this.nacionalidade = this.phome.getNacionalidade();
              this.estadoCivil = this.phome.getEstadoCivil();
              this.cpf = this.phome.getCpf();
              this.cep = this.phome.cep;
               }

}
