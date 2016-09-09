
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Employees, EmployeeData} from '../../employee'

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  employee: EmployeeData

  constructor(private navCtrl: NavController) {
    this.employee = { firstName: 'Satit', lastName: 'Rianpit' }
    let myInfo = new Employees(this.employee)

    console.log(myInfo)
    console.log(myInfo.getFirstName())
    console.log(myInfo.getLastName())
  }

}

