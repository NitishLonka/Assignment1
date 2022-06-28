import { Component, OnInit } from '@angular/core';
import {IEmployee} from './Employee';
@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ParentcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employees:IEmployee={EmployeeId:1,FirstName:"Pandu",LastName:"Pokiri",DOB:new Date("Fri Dec 08 2019 07:44:57"),Salary:10000,Email:"abc@gmail.com"}
  multipleemployees:IEmployee[]=[{EmployeeId:1,FirstName:"Pandu",LastName:"Pokiri",DOB:new Date("Sat Jan 10 2019 07:44:57"),Salary:10000,Email:"abc@gmail.com"},
  {EmployeeId:2,FirstName:"Ajay",LastName:"Dookudu",DOB:new Date("Mon Dec 08 2020 07:44:57"),Salary:15000,Email:"def@gmail.com"},
  {EmployeeId:3,FirstName:"Arjun",LastName:"ArjunReddy",DOB:new Date("Fri Apr 08 2021 07:44:57"),Salary:18000,Email:"efg@gmail.com"},
  {EmployeeId:4,FirstName:"Prashanth",LastName:"Pellichoopulu",DOB:new Date("Wed Sep 08 2022 07:44:57"),Salary:20000,Email:"ijk@gmail.com"},]
  showEdit:boolean=true
  EditEmp(){this.showEdit=false}
  UpdateEmp(){this.showEdit=true}
  HighLight(){}
}
