import {Component} from '@angular/core';
import {NavController, Platform, ModalController, ToastController} from 'ionic-angular';
import {SQLite} from 'ionic-native'

import {ModalNewPage} from '../modal-new/modal-new'
import {ModalEditPage} from '../modal-edit/modal-edit'

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  db: SQLite
  personList: Array<Object>

  constructor(private platform: Platform, private navCtrl: NavController, private toastCtrl: ToastController) {
    this.db = new SQLite()
    this.db.openDatabase({
      name: 'data.db',
      location: 'default'
    }).then(() => {
    }, error => {
      console.log(error)
    });

    // this.storage.query(`
    // CREATE TABLE IF NOT EXISTS
    // people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)
    // `);

    // this.personList = []
  }

  add() {
    this.db.executeSql("INSERT INTO people (firstname, lastname) VALUES (?, ?)", ["Nic", "Raboy"]).then((data) => {
      this.personList.push({
        "firstname": "Nic",
        "lastname": "Raboy"
      });
    }, (error) => {
      console.log(error);
    });
  }

  getList() {
    this.db.executeSql('SELECT * FROM people', [])
      .then(data => {
        console.log(data.rows)
        if (data.rows.length > 0) {
          this.personList = [];
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
