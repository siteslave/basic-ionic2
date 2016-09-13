import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import {SQLite} from 'ionic-native'

@Component({
  templateUrl: 'build/pages/modal-edit/modal-edit.html',
})
export class ModalEditPage {
  id: number
  firstname: string
  lastname: string
  db: SQLite

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private toastCtrl: ToastController) {
    this.id = this.navParams.get('id')
    this.firstname = this.navParams.get('firstname')
    this.lastname = this.navParams.get('lastname')
    
    this.db = new SQLite()
    this.db.openDatabase({
      name: 'data.db',
      location: 'default'
    }).then(() => {
    }, error => {
      console.log(error)
    })
  }

  save() {
    let sql = 'UPDATE people set firstname=?, lastname=? WHERE id=?'
    this.db.executeSql(sql, [this.firstname, this.lastname, this.id])
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
