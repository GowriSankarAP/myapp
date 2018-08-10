import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  template:'<h1>hello</h1>',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'arun';
}
