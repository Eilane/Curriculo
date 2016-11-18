import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Pcontato } from '../../providers/pcontato';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

   email;
   telefone;
   celular;

  constructor(public navCtrl: NavController,
              public pcontato: Pcontato) {

                  this.email = this.pcontato.getEmail();
                  this.telefone = this.pcontato.getTelefone();
                  this.celular = this.pcontato.getCelular();
                  
  }

}
