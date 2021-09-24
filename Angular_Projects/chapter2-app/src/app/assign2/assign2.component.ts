import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign2',
  templateUrl: './assign2.component.html',
  styleUrls: ['./assign2.component.css']
})
export class Assign2Component implements OnInit {
  username = '';
  // allowReset = this.username ? true : false;

  constructor() { }

  ngOnInit(): void {
  }

  // checkUsername (event: InputEvent) {
  //   console.log(event);
  //   this.username = (<HTMLInputElement>event.target).value;
  //   this.allowReset = (this.username) ? true : false;
  // }

  // resetUsername () {
  //   this.username = '';
  // }
}
