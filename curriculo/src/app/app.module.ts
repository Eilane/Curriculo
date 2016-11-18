import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { Formacao } from '../pages/formacao/formacao';
import { TabsPage } from '../pages/tabs/tabs';
import { Phome } from '../providers/phome';
import { Pformacao } from '../providers/pformacao';
import { Pobjetivo } from '../providers/pobjetivo';
import { Pcontato } from '../providers/pcontato';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Formacao
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Formacao
    
  ],
  providers: [
    Phome,
    Pformacao,
    Pobjetivo,
    Pcontato
  ]
})
export class AppModule {}
