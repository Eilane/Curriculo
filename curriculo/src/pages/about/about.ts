import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Pobjetivo } from '../../providers/pobjetivo';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

 objetivo;
 
  constructor(public navCtrl: NavController,
              public pobjetivo: Pobjetivo ) {

                this.objetivo = this.pobjetivo.getObjetivo();
  }

}
