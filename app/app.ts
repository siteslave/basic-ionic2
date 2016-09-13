import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar, SQLite} from 'ionic-native';


import {TabsPage} from './pages/tabs/tabs';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      StatusBar.styleDefault();
      let db = new SQLite()
      db.openDatabase({
        name: 'data.db',
        location: 'default'
      }).then(() => {
        let sql1 = `CREATE TABLE IF NOT EXISTS 
        people (id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstname TEXT, lastname TEXT)`;
        let sql2 = `CREATE TABLE IF NOT EXISTS 
        users (id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT, password TEXT)`;
        
        db.sqlBatch([sql1, sql2])
          .then(() => {
          console.log("TABLE CREATED");
        }, (error) => {
          console.error("Unable to execute sql", error);
        });
      }, error => {
        console.error("Unable to open database", error)
      });
    });
  }
}

ionicBootstrap(MyApp);
