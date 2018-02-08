import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent implements OnInit {
  itemCount :number=4;
  btnText :string ="Add an item";
  goalText :string="My first Life Goal";
  lifeGoals=['hey','i','you'];
  constructor() { }

  ngOnInit() {
    this.itemCount=this.lifeGoals.length;

  }
 addItem(){
this.lifeGoals.push(this.goalText);
this.goalText='';
this.itemCount=this.lifeGoals.length;
 }
 removeItem(i){
   this.lifeGoals.splice(i,1);
 }
}
