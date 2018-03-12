import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  public title = "Summary"
  public _deviceList;
  public _protocolsList = {};
  public _timeList = {};
  public _timePeriod = {};

  constructor() { }
  
  @Input()
  set deviceList(deviceList) {
    this._deviceList  = Object.keys(deviceList).map((k) => deviceList[k]);
  }

  @Input()
  set protocolsList(protocolsList) {
    this._protocolsList  = Object.keys(protocolsList).map((k) => protocolsList[k]);
  }
  @Input()
  set timeList(timeList) {
    this._timeList  = Object.keys(timeList).map((k) => timeList[k]);
    console.log(this._timeList);
    this._timePeriod = timeList;
  }

  @Output()
  clearEmitter: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  startLearningEmitter: EventEmitter<any> = new EventEmitter<any>();

  clear(){
    this.clearEmitter.emit()
  }

  startLearning(){
    this.startLearningEmitter.emit()
  }
  
  ngOnInit() {
  } 

}
