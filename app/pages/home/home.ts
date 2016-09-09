import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Employee} from '../../providers/employee/employee'

interface EmployeeData {
  username: string,
  name: string,
  email: string,
  id: number
}

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Employee]
})

export class HomePage {
  employees: Array<EmployeeData>

  constructor(private navCtrl: NavController, private employeeService: Employee) {
    this.employeeService.getUsers()
      .then(result => {
        this.employees = <Array<EmployeeData>> result;
      }, err => {
        console.log(err)
      });
  }

}
