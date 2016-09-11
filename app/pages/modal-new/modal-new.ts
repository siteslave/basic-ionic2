import { Component } from '@angular/core';
import { NavController, Storage, SqlStorage, ToastController, LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/modal-new/modal-new.html',
})
export class ModalNewPage {
  private storage: Storage
  firstname: string
  lastname: string

  constructor(private navCtrl: NavController,
    private toastCtrl: ToastController, private loadingCtrl: LoadingController) {
    this.storage = new Storage(SqlStorage)
  }

  save() {
    let sql = `INSERT INTO people(firstname, lastname) VALUES (?, ?)`;
    this.storage.query(sql, [this.firstname, this.lastname])
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
