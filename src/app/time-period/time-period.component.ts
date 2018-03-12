import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'time-period',
  templateUrl: './time-period.component.html',
  styleUrls: ['./time-period.component.scss']
})
export class TimePeriodComponent implements OnInit {
  public title = "3. Select Time Period";
  public _timePeriods: any;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set timePeriods(timePeriods) {
    this._timePeriods = timePeriods;
    console.log(this._timePeriods)
  }
  @Output()
  timeCheckedEmitter: EventEmitter<any> = new EventEmitter<any>();


  checkTime(timePeriodIndex) {
    // mark active or not in _timePeriods array
    this._timePeriods.forEach(timePeriod => {
      if (timePeriod.active) {
        delete timePeriod.active;
      }
    });
    this._timePeriods[timePeriodIndex - 1]['active'] = '1';
    let checkedTime = this._timePeriods[timePeriodIndex - 1];
    this.timeCheckedEmitter.emit(checkedTime);
  }
}
