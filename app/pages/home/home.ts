import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

  constructor(private navCtrl: NavController) {

  }

  sayHello() {
    let name: string = 'Ionic framework!'
    alert(name);
  }

}

