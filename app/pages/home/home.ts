import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

interface Person {
  firstName: string,
  lastName: string,
  age?: number
}

@Component({
  templateUrl: 'build/pages/home/home.html'
})



export class HomePage {

  
  private firstName: string = 'Satit'
  private lastName: string = 'Rianpit'

  total: number = 20  
  isSuccess: boolean
  isOpenned: boolean = true
  fullName: string = 'Satit Rianpit'
  language: string[] = ['JavaScript', 'Python', 'C#', 'VB']
  

  constructor(private navCtrl: NavController) {
    console.log(this.firstName)
    console.log(this.lastName)
    
    
    let john: Person;
    let satit: Person;

    john = { firstName: 'John', lastName: 'Doe', age: 40 }
    satit = { firstName: 'Satit', lastName: 'Rianpit' } 

    // console.log(john)
    // console.log(satit)


    let employee = new Employee('Satit', 'Rianpit');

    console.log(employee)
    employee.showInfo()

    // loop
    
    let frameworks: string[] = ['Ionic', 'Onsen', 'jQuery'];    
    // frameworks.forEach(v => {
    //   console.log(v)
    // })

    // for (let i = 0; i <= 5; i++) {
    //   console.log(i)
    // }


    let employees: any[] = [
      {id: 1001, name: 'Satit Rianpit'},
      {id: 1002, name: 'John Doe'},
      {id: 1003, name: 'Steve Job'},
    ]
    // get employees length
    console.log(employees.length)

    employees.forEach(employee => {
      if (employee.id == 1003) console.log('Welcome, ' + employee.name)
    })

  }

}

class Employee {
  firstName: string
  lastName: string
  age: number

  constructor(firstName: string, lastName: string, age?: number) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age || 15;
  }

  showInfo() {
    let info = `${this.firstName} ${this.lastName} age: ${this.age}`
    console.log(info)
  }

  // showInfo(): string {
  //   let info = `${this.firstName} ${this.lastName} age: ${this.age}`
  //   console.log(info)
  //   return info
  // }
}  

