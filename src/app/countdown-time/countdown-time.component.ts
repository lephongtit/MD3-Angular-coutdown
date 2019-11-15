import {Component, OnInit, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-countdown-time',
  templateUrl: './countdown-time.component.html',
  styleUrls: ['./countdown-time.component.css']
})
export class CountdownTimeComponent implements OnInit {
  private intervalID = 0;
  message = '';
  remainingTime: number;

  @Input()
  second = 11;

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.second;
    }
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.second;
    this.message = `Click start button to start the Countdown`;
  }

  clearTimer() {
    clearInterval(this.intervalID);
  }

  ngOnInit() {
    this.reset();
    this.start();
  }

  // tslint:disable-next-line:use-lifecycle-interface interface ngOnDestroy if
  ngOnDestroy() {
    this.clearTimer();
  }

  private countDown() {
    this.clearTimer();
    this.intervalID = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTimer();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}
