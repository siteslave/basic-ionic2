import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

  username: string
  password: string

  constructor(private navCtrl: NavController) {

  }

  login() {
    console.log(this.username)
    console.log(this.password)
  }

}

