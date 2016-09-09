import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {NewEmployeePage} from '../new-employee/new-employee';

@Component({
  templateUrl: 'build/pages/employee/employee.html',
})
export class EmployeePage {
  
  constructor(private navCtrl: NavController) {

  }

  newEmployee() {
    this.navCtrl.push(NewEmployeePage, { firstName: 'Satit', lastName: 'Rianpit' })
  }

}
