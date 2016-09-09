import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';

import {InfoModalPage} from '../info-modal/info-modal';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {

  }

  showInfo() {
    let modal = this.modalCtrl.create(InfoModalPage)
    modal.present()
  }

}
