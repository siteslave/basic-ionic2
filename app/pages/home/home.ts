import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {SQLite} from 'ionic-native'

import {ModalNewPage} from '../modal-new/modal-new'
import {ModalEditPage} from '../modal-edit/modal-edit'

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  db: SQLite
  personList: Array<Object>

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {
    this.db = new SQLite()
    this.db.openDatabase({
      name: 'data.db',
      location: 'default'
    }).then(() => {
    }, error => {
      console.log(error)
    });
  }

  getList() {
    this.personList = [];
    this.db.executeSql('SELECT * FROM people', [])
      .then(data => {
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            this.personList.push({
              id: data.rows.item(i).id,
              firstname: data.rows.item(i).firstname,
              lastname: data.rows.item(i).lastname
            });
          }

          console.log(this.personList)
        }
      }, err => {
        console.log(err)
      });
  }

  ionViewDidEnter() {
    this.getList()
  }

  newPerson() {
    this.navCtrl.push(ModalNewPage)
  }

  doRemove(id: number) {
    this.db.executeSql('DELETE FROM people WHERE id=?', [id])
      .then(() => {
        this.getList()
        let toast = this.toastCtrl.create({
          message: 'Person was removed successfully',
          duration: 3000
        });
        toast.present();
    }, err => console.log(err))
  }

  edit(person: Object) {
    this.navCtrl.push(ModalEditPage, person)
  }  

}
