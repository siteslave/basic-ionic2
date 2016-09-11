import { Component } from '@angular/core';
import { NavController, NavParams, Storage, SqlStorage, ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/modal-edit/modal-edit.html',
})
export class ModalEditPage {
  id: number
  firstname: string
  lastname: string
  private storage: Storage

  constructor(private navCtrl: NavController, private navParams: NavParams, private toastCtrl: ToastController) {
    this.id = this.navParams.get('id')
    this.firstname = this.navParams.get('firstname')
    this.lastname = this.navParams.get('lastname')
    this.storage = new Storage(SqlStorage)
  }

  save() {
    let sql = 'UPDATE people set firstname=?, lastname=? WHERE id=?'
    this.storage.query(sql, [this.firstname, this.lastname, this.id])
      .then(() => {
        let toast = this.toastCtrl.create({
          message: 'Person was added successfully',
          duration: 3000
        });
        toast.present();
        this.navCtrl.pop()
      }, err => {
        console.log(err)
      });
  }

}
