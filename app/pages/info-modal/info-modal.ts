import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/info-modal/info-modal.html',
})
export class InfoModalPage {

  constructor(private navCtrl: NavController, private viewCtrl: ViewController) {

  }

  close() {
    this.viewCtrl.dismiss();
  }

}
