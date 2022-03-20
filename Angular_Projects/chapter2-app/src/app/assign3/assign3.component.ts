import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign3',
  templateUrl: './assign3.component.html',
  styleUrls: ['./assign3.component.css'],
})
export class Assign3Component implements OnInit {
  displayParagraph = false;
  buttonClicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplayParagraph () {
    this.displayParagraph = !this.displayParagraph;
    this.buttonClicks.push(Date.now());
  }

}
