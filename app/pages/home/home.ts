import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

  pizza: boolean = false
  coke: boolean = true
  egg: boolean = false

  mainDepartments: any[]
  subDepartments: any[]
  allSubDepartments: any[]
  mainDep: number
  subDep: number

  constructor(private navCtrl: NavController) {
    this.mainDepartments = [
      {id: 1, name: 'ฝ่ายการพยาบาล'},
      {id: 2, name: 'ฝ่ายส่งเสริมสุขภาพ'},
      {id: 3, name: 'ศูนย์ประกัน'},
    ]

    this.allSubDepartments = [
      { id: 1, mainId: 1, name: 'ห้องอุบัติเหตุฉุกเฉิน' },
      { id: 2, mainId: 1, name: 'แผนกผู้ป่วยใน' },
      { id: 3, mainId: 2, name: 'สุขภาพเด็กดี' },
      { id: 4, mainId: 2, name: 'ฝากครรภ์' },
      { id: 5, mainId: 3, name: 'ศูนย์ข้อมูล' },
      { id: 6, mainId: 3, name: 'เวชระเบียน' },

    ];
  } 

  getSubDepartments() {
    this.subDepartments = [];
    let mainDep = this.mainDep;
    this.allSubDepartments.forEach(v => {
      if (v.mainId == mainDep) {
        this.subDepartments.push(v)
      }
    })
  }

  showSelected() {
    console.log(this.mainDep)
    console.log(this.subDep)
  }

  showSelectedFood() {
    console.log(this.pizza)
    console.log(this.coke)
    console.log(this.egg)
  }

}
