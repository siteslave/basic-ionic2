import {Component} from '@angular/core';
import {NavController, SqlStorage, Storage, ModalController, ToastController} from 'ionic-angular';

// import page 
import {ModalNewPage} from '../modal-new/modal-new'
import {ModalEditPage} from '../modal-edit/modal-edit'

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  private storage: Storage
  personList: Array<Object>

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {
    this.storage = new Storage(SqlStorage)
    this.storage.query(`
    CREATE TABLE IF NOT EXISTS
    people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)
    `);

    this.personList = []
  }

  add() {
    this.storage.query("INSERT INTO people (firstname, lastname) VALUES (?, ?)", ["Nic", "Raboy"]).then((data) => {
      this.personList.push({
        "firstname": "Nic",
        "lastname": "Raboy"
      });
    }, (error) => {
      console.log(error);
    });
  }

  getList() {
    this.storage.query('SELECT * FROM people')
      .then(data => {
        console.log(data.res.rows.item(1))
        if (data.res.rows.length > 0) {
          console.log(data.res.rows)
          this.personList = [];
          for (let i = 0; i < data.res.rows.length; i++) {
            this.personList.push({
              id: data.res.rows.item(i).id,
              firstname: data.res.rows.item(i).firstname,
              lastname: data.res.rows.item(i).lastname
            });
          }
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
    this.storage.query('DELETE FROM people WHERE id=?', [id])
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
