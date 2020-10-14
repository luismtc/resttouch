import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  @Input() idleStatus = false;
  public time = new Date();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

}
