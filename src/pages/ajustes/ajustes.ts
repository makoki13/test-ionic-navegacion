import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  activarPrincipal() {
    console.log(this.navCtrl.parent)
    this.navCtrl.parent.select(0);
  }

  mostrar_modal() {
    let modal = this.modalCtrl.create( ModalPage, { nombre: 'Makoki', edad: 51} );
    modal.present();

    modal.onDidDismiss( (parametros) => {
      console.log (parametros);
    })
  }

}
