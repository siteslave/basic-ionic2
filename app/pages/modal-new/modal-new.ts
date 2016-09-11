import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';

import {SQLite} from 'ionic-native'

@Component({
  templateUrl: 'build/pages/modal-new/modal-new.html',
})
export class ModalNewPage {
  db: SQLite
  firstname: string
  lastname: string

  constructor(private navCtrl: NavController,
    private toastCtrl: ToastController, private loadingCtrl: LoadingController) {
     this.db = new SQLite()
     this.db.openDatabase({
       name: 'data.db',
       location: 'default'
     }).then(() => {
     }, error => {
       console.log(error)
     });
  }

  save() {
    let sql = `INSERT INTO people(firstname, lastname) VALUES (?, ?)`;
    this.db.executeSql(sql, [this.firstname, this.lastname])
      .then(() => {
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
        loading.present();

        setTimeout(() => {
          this.navCtrl.pop()
          loading.dismiss();
        }, 1000)
      }, err => {
        console.log(err)
      });
  }

}
