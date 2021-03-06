import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre: string = '';
  edad: number = 0;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");

    console.log (this.nombre,this.edad);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrar_con_parametros() {
    let data = {
      nombre: 'Saisua',
      edad: 18,
      coords: {
        lat: 10,
        lng: -10
      }
    }
    this.viewCtrl.dismiss( data );
  }

  cerrar_sin_parametros() {
    this.viewCtrl.dismiss();
  }

}
