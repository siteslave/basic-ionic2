import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

  framework: string
  
  constructor(private navCtrl: NavController) {
    this.framework = 'Ionic Framework'
  }

}


