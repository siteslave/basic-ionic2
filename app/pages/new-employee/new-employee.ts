import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/new-employee/new-employee.html',
})
export class NewEmployeePage {

  firstName: string
  lastName: string

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.firstName = this.navParams.get('firstName')
    this.lastName = this.navParams.get('lastName')
  }

}
