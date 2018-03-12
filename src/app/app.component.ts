import { Component } from '@angular/core';
import { DataService } from 'app/_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public allData: any;
  public title = 'Welcome to my CyberBit exam';
  public groupIsOpen: boolean = false;
  public device_groups: { "id": string; "name": string; "devices": { "id": number; "name": string; "active": number; }[]; }[];
  public protocols: any;
  public time_periods: any;

  public deviceList = {};
  public protocolsList = {};
  public timeList = {};
  public spinner = false;

  constructor(
    private _dataService: DataService,
  ) { }

  ngOnInit() {
    this.init();
  }
  init() {
    this.device_groups = this._dataService.getDeviceGroups();
    this.protocols = this._dataService.getProtocols();
    this.time_periods = this._dataService.getTimes();
    this.allData = this._dataService.getAllData();
  }

  devicesChecked(devicesChecked) {
    this.deviceList = devicesChecked;
  }
  protocolsChecked(protocolsChecked) {
    this.protocolsList = protocolsChecked;
  }
  timeChecked(timeChecked) {
    this.timeList = timeChecked;
  }

  clear() {
    this.spinner = true;
    setTimeout(() => {
      document.location.href = 'index.html';
      this.spinner = false;
    }, 500);
  }
  startLearning() {
    this._dataService.startLearning(this.deviceList, this.protocolsList, this.timeList)
  }
}
